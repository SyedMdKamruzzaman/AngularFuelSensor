import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { LoadingSpinner } from '../components/spinner/loading.spinner.component';
import { NotificationService } from './notification.service';

@Injectable()
export class TokenService {

    constructor(private http: HttpClient,
        private spinner: LoadingSpinner,
        private notify: NotificationService) { }

    public getToken() {
        if (localStorage.getItem('token') != null) {
            return localStorage.getItem('token');
        }
        return null;
    }

    // private decodeToken() {
    //     const token = this.getToken();

    //     if (token != null) {
    //         return JSON.parse(atob(token.split('.')[1]));
    //     }
    //     return null;
    // }

    // setToken(token: string) {
    //     if(token !== undefined && token !== null){
    //         localStorage.setItem('token', 'Bearer ' + token);
    //     }
    // }

    // getClientId(){
    //     if (this.decodeToken() !== null && this.decodeToken().clientId !== null) {
    //         return this.decodeToken().clientId;
    //     }
    //     return 0;
    // }

    // getUserName(){
    //     if (this.decodeToken() !== null && this.decodeToken().userName !== null) {
    //         return this.decodeToken().userName;
    //     }
    //     return '';
    // }

    // getUserRoleId(){
    //     if (this.decodeToken() !== null && this.decodeToken().role !== null) {
    //         return this.decodeToken().role;
    //     }
    //     return '';
    // }
}
