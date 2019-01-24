import { Injectable } from "@angular/core";
import { LoginApiServices } from "../services/login-api.services";
import { BehaviorSubject } from "rxjs";
import { Policy } from "../models/policy.model";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class LoginManager {

    private _loading: BehaviorSubject<any> = new BehaviorSubject(false);


    constructor(
        private LoginService: LoginApiServices,
        private router: Router
    ) {

    }

    getLoading() {
        return this._loading.asObservable();
    }

    Logout() {
        this.deleteToken();
        this.router.navigate(['/auth/login'])
    }

    Login(User, Password) {
        this._loading.next(true);
        this.LoginService.Loging(User, Password).subscribe(rest => {
            this._loading.next(false);
            this.router.navigate(['/list-policy']);
            localStorage.setItem("session", JSON.stringify(rest));

        }, err => {
            this._loading.next(false)

        })

    }

    getToken() {
        let session = JSON.parse(localStorage.getItem("session"))
        return session ? session.access_token : "";
    }

    deleteToken() {
        let session = JSON.parse(localStorage.getItem("session"))
        session && localStorage.removeItem("session")
    }

    isLogin(){
        return JSON.parse(localStorage.getItem("session"))?true:false;

    }


}
