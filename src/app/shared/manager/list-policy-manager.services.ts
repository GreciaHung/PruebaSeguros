import { Injectable } from "@angular/core";
import { PolicyApiServices } from "../services/policy-api.services";
import { BehaviorSubject } from "rxjs";
import { Policy } from "../models/policy.model";
import { MatSnackBar } from "@angular/material";

@Injectable({
    providedIn: 'root'
})
export class ListPolicyManager {


    private _loading: BehaviorSubject<any> = new BehaviorSubject(false);
    private _listPolicy: BehaviorSubject<any> = new BehaviorSubject(null);

    constructor(
        private policyService: PolicyApiServices,
        public snackBar: MatSnackBar
    ) {

    }

    getLoading() {
        return this._loading.asObservable();
    }

    getListPolicy() {
        return this._listPolicy.asObservable();
    }

    DeletePolicy(id) {
        this.policyService.DeletePolicy(id).subscribe(res => {
            this._loading.next(false);
            this.snackBar.open('Poliza Eliminada', null, {
                duration: 3000
            });
            this.AllPolicy();
        }, err => {
            this.snackBar.open(err.error.ModelState.msg.length > 0 ? err.error.ModelState.msg[0] : "", null, {
                duration: 3000
            });
            this._loading.next(false);
        });
    }

    AllPolicy() {
        this._loading.next(true);
        this.policyService.GetAllPolicy().subscribe(res => {
            this._loading.next(false);
            this._listPolicy.next(res);
        }, err => {
            this._loading.next(false);
        });
    }

}
