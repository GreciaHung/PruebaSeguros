import { Injectable } from "@angular/core";
import { Policy } from "../models/policy.model";
import { Subject } from "rxjs";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";



@Injectable({
    providedIn: 'root'
})
export class PolicyApiServices {

    constructor(
        private httpClient: HttpClient
    ) { }

    UpdatePolicy(id, body) {
        return this.httpClient.put(environment.urlApi + "/Policies/" + id, body);
    }

    DeletePolicy(id) {
        return this.httpClient.delete(environment.urlApi + "/Policies/" + id);
    }

    GetPolicy(id) {
        return this.httpClient.get(environment.urlApi + "/Policies/" + id);
    }

    GetAllPolicy() {
        return this.httpClient.get(environment.urlApi + "/Policies");
    }

    SavePolicy(body) {
        return this.httpClient.post(environment.urlApi + "/Policies", body);
    }
}