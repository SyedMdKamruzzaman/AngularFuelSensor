import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestMessage } from '../models/request-message';
import { UrlConstants } from '../enums/UrlConstants';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {


   request:RequestMessage=new RequestMessage();
  constructor(private http:HttpClient) { }
  signin(user:any){
    this.request.requestObject=JSON.stringify(user);    
    return this.http.post(UrlConstants.login,this.request);
  }
  signout() {
    return this.http.get(UrlConstants.logout);
  }
  refresh() {
    return this.http.get(UrlConstants.refresh);
  }
}
