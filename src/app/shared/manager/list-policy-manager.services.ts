import { Injectable } from "@angular/core";
import { PolicyApiServices } from "../services/policy-api.services";
import { BehaviorSubject } from "rxjs";
import { Policy } from "../models/policy.model";

@Injectable({
    providedIn: 'root'
})
export class ListPolicyManager {


    private _loading: BehaviorSubject<any> = new BehaviorSubject(false);
    private _listPolicy: BehaviorSubject<any> = new BehaviorSubject(null);

    constructor(
        private policyService: PolicyApiServices
    ) {

    }

    getLoading() {
        return this._loading.asObservable();
    }

    getListPolicy() {
        return this._listPolicy.asObservable();
    }

    DeletePolicy() {

    }

    GetAllPolicy() {
        this._loading.next(true);
        this.policyService.GetAllPolicy().subscribe(res => {
            this._loading.next(false);
            this._listPolicy.next(res);
        }, err => {
            this._loading.next(false);
        });
    }

}
