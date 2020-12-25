import { Injectable } from '@angular/core';
import { UrlConstants } from '../enums/UrlConstants';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
    }

    // public getToken(obj) {
    //     return this.http.post(UrlConstants.getToken, obj);
    // }

    // public getVerificationCode(obj){
    //     return this.http.post(UrlConstants.verificationCode, obj)
    // }
    

    // public changePassword(obj:any){
    //     return this.http.post(UrlConstants.changeUserPassword, obj);
    // }

    public logout(): void {
        localStorage.removeItem('token');
    }
    
    public isAuthenticated(){
        let token = localStorage.getItem('token');
        if(token != null){
            return true;
        }
        return false;
    }
}