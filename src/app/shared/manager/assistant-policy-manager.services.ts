import { Injectable } from "@angular/core";
import { PolicyApiServices } from "../services/policy-api.services";
import { BehaviorSubject } from "rxjs";
import { Policy } from "../models/policy.model";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";

@Injectable({
    providedIn: 'root'
})
export class AssistantPolicyManager {

    private _loading: BehaviorSubject<any> = new BehaviorSubject(false);
    private _policy: BehaviorSubject<any> = new BehaviorSubject(null);


    constructor(
        private policyService: PolicyApiServices,
        private router: Router,
        private  snackBar: MatSnackBar
    ) {

    }

    getLoading() {
        return this._loading.asObservable();
    }

    getPolicy() {
        return this._policy.asObservable();
    }

    SavePolicy(body) {

        this._loading.next(true);
        if (!this._policy.getValue())
            this.policyService.SavePolicy(body).subscribe(res => {
                this._loading.next(false);
                this.router.navigate(['/list-policy']);
                this.snackBar.open('Guardado correctamente', null, {
                    duration: 3000
                });
            }, err => {
                this._loading.next(false);
                this.snackBar.open('Error al guardar', null, {
                    duration: 3000
                });
            });
        else
            this.policyService.UpdatePolicy(this._policy.getValue().Id, {...this._policy.getValue(),...body}).subscribe(res => {
                this._loading.next(false);
                this.router.navigate(['/list-policy']);
                this.snackBar.open('Actualizado correctamente', null, {
                    duration: 3000
                });
            }, err => {
                this._loading.next(false);
                this.snackBar.open('Error al actualizar', null, {
                    duration: 3000
                });
            });

    }

    GetPolicy(id) {
        this._loading.next(true);
        this.policyService.GetPolicy(id).subscribe(res => {
            this._loading.next(false);
            this._policy.next(res);
        }, err => {
            this._loading.next(false);
        });
    }

    destroyPolicy() {
        this._policy.next(null);
    }


}
