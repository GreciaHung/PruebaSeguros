import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import * as moment from 'moment';

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


  public FormPolicy: FormGroup = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),
    TypeCover: new FormControl('', [Validators.required]),
    TypeRisk: new FormControl('', [Validators.required]),
    PercentageCoverage: new FormControl('', [Validators.required]),
    StartDate: new FormControl('', [Validators.required]),
    EndDate: new FormControl('', [Validators.required]),
    Price: new FormControl('', [Validators.required])

  }, this.PercentageCoverageValidator)

  constructor() { }

  ngOnInit() {

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

    }

  }

}
