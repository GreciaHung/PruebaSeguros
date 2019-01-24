import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import * as moment from 'moment';
import { AssistantPolicyManager } from 'src/app/shared/manager/assistant-policy-manager.services';

@Component({
  selector: 'app-assistant-policy',
  templateUrl: './assistant-policy.component.html',
  styleUrls: ['./assistant-policy.component.scss']
})
export class AssistantPolicyComponent implements OnInit {
  public ListTypeCovering: any[] = [
    { Name: 'Terremoto', Value: 1 },
    { Name: 'Incendio', Value: 2 },
    { Name: 'Robo', Value: 3 },
    { Name: 'Pérdida', Value: 4 },
    { Name: 'Otros', Value: 5 }
  ];
  public ListTypeRisk: any[] = [
    { Name: 'Bajo', Value: 1 },
    { Name: 'Medio', Value: 2 },
    { Name: 'Medio-Alto', Value: 3 },
    { Name: 'Alto', Value: 4 }
  ];
  public Now = new Date();
  public loading = false;
  public edit = false;


  public FormPolicy: FormGroup = new FormGroup({
    CustomerName: new FormControl({value:'', disabled: this.edit}, [Validators.required]),
    Description: new FormControl('', [Validators.required]),
    TypeCover: new FormControl({value:'', disabled: this.edit}, [Validators.required]),
    TypeRisk: new FormControl('', [Validators.required]),
    PercentageCoverage: new FormControl('', [Validators.required]),
    StartDate: new FormControl({value:'', disabled: this.edit}, [Validators.required]),
    EndDate: new FormControl({value:'', disabled: this.edit}, [Validators.required]),
    Price: new FormControl('', [Validators.required])

  }, this.PercentageCoverageValidator)

  constructor(
    private policyManager:AssistantPolicyManager
  ) { }

  ngOnInit() {
    this.policyManager.getLoading().subscribe(load=>this.loading = load);
    this.policyManager.getPolicy().subscribe(res=>{
      if(res){
        res.id && (this.edit = true);
        this.FormPolicy.patchValue(res);
      }
    });
  }

  ngOnDestroid(){
    this.policyManager.destroyPolicy();
  }

  getErrorMessagePercentageCoverage() {
    return this.FormPolicy.get("PercentageCoverage").hasError('required') ? 'Ingrese el pocentaje de cobertura' :
      this.FormPolicy.get("PercentageCoverage").hasError('customValidation') ? 'Debe ser menor a 50%' :
        '';
  }
  getErrorMessageEndDate() {
    return this.FormPolicy.get("EndDate").hasError('required') ? 'Ingrese la fecha de terminación' :
      this.FormPolicy.get("EndDate").hasError('customValidationEndDate') ? 'No puede ser mayor a 2 años' :
        '';
  }


  PercentageCoverageValidator(fc) {

    if (fc.value.EndDate == "") {
      fc.get("EndDate").setErrors({ "required": true });
    } else {
      if (moment(fc.value.EndDate).format() > moment(new Date()).add(2, 'years').format())
        fc.get("EndDate").setErrors({ "customValidationEndDate": true });
      else
        fc.get("EndDate").setErrors(null);

    }

    if (fc.value.PercentageCoverage == "") {
      fc.get("PercentageCoverage").setErrors({ "required": true });
    } else {
      if (fc.value.TypeRisk == 4 && fc.value.PercentageCoverage > 50)
        fc.get("PercentageCoverage").setErrors({ "customValidation": true });
      else
        fc.get("PercentageCoverage").setErrors(null);
    }

    return (null);

  }

  setMoment(data, format?) {
    if (format)
      return moment(data, format).locale('es');
    return moment(data).locale('es');
  }

  savePolicy() {
    console.log(this.FormPolicy.value);

    if(this.FormPolicy.valid){
      this.policyManager.SavePolicy(this.FormPolicy.value);
    }

  }

}
