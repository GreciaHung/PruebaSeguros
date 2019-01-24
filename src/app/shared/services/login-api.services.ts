import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";



@Injectable({
    providedIn: 'root'
})
export class LoginApiServices {

    constructor(private httpClient: HttpClient) {

    }

    Loging(userName,password) {
        console.log("ENTREEE");
        
        return this.httpClient.post(environment.urlApi + "/token",
        `client_id=macheteapp&grant_type=password&password=${password}&userName=${userName}`,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'),
            });
    }

}