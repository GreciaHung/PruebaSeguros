import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import * as moment from 'moment';
import { AssistantPolicyManager } from 'src/app/shared/manager/assistant-policy-manager.services';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assistant-policy',
  templateUrl: './assistant-policy.component.html',
  styleUrls: ['./assistant-policy.component.scss']
})
export class AssistantPolicyComponent implements OnInit {
  public ListTypeCovering: any[] = [
    { Name: 'Terremoto', Value: "Earthquake" },
    { Name: 'Incendio', Value: "Fire" },
    { Name: 'Robo', Value: "Stole" },
    { Name: 'Pérdida', Value: "Lost" },
    { Name: 'Otros', Value: "Others" }
  ];
  public ListTypeRisk: any[] = [
    { Name: 'Bajo', Value: "Low" },
    { Name: 'Medio', Value: "Medium" },
    { Name: 'Medio-Alto', Value: "MediumHigh" },
    { Name: 'Alto', Value: "High" }
  ];
  public Now = new Date();
  public loading = false;
  private subscription = new Subscription();

  public FormPolicy: FormGroup = new FormGroup({
    CustomerName: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),
    TypeCover: new FormControl('', [Validators.required]),
    TypeRisk: new FormControl('', [Validators.required]),
    PercentageCoverage: new FormControl('', [Validators.required]),
    StartDate: new FormControl('', [Validators.required]),
    EndDate: new FormControl('', [Validators.required]),
    Price: new FormControl('', [Validators.required])

  }, this.PercentageCoverageValidator)

  constructor(
    private policyManager: AssistantPolicyManager,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {

    this.subscription.add(this.activatedRoute.params.subscribe(params => {
      if (params.id && params.id != 'new')
        this.policyManager.GetPolicy(params.id);
    }))

    this.subscription.add(this.policyManager.getLoading().subscribe(load => this.loading = load));
    this.subscription.add(this.policyManager.getPolicy().subscribe(res => {
      if (res) {
        console.log(res);

        if (res.Id) {
          this.FormPolicy.controls['CustomerName'].disable();
          this.FormPolicy.controls['TypeCover'].disable();
          this.FormPolicy.controls['StartDate'].disable();
          this.FormPolicy.controls['EndDate'].disable();
        }
        this.FormPolicy.patchValue(res);
      }
    }));
  }

  ngOnDestroy() {
    this.policyManager.destroyPolicy();
    this.subscription.unsubscribe();
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
      if (fc.value.TypeRisk == "High" && fc.value.PercentageCoverage > 50)
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
    // console.log(this.FormPolicy.value);

    if (this.FormPolicy.valid) {
      this.policyManager.SavePolicy(this.FormPolicy.value);
    }

  }

}
