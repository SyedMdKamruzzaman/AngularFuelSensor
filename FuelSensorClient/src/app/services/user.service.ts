import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UrlConstants } from '../enums/UrlConstants';
import { RequestMessage } from '../models/request-message';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {



   request:RequestMessage =new RequestMessage();
  constructor(private http:HttpClient) { }
  SaveUser(user){
    this.request.requestObject=JSON.stringify(user);
   return this.http.post(UrlConstants.insertUser,this.request);
  }
  GetUserUtils() {
    return this.http.get(UrlConstants.userUtils);
  }
  GetOnlineUser(user:User){
    this.request.requestObject=JSON.stringify(user);
    return this.http.post(UrlConstants.getOnlineUser,this.request);
  }
  GetOfflineUser(user:User){
    this.request.requestObject=JSON.stringify(user);
    return this.http.post(UrlConstants.getOfflineUser,this.request);
  }
  GetActiveUser(user:User){
    this.request.requestObject=JSON.stringify(user);
    return this.http.post(UrlConstants.searchAllUser,this.request);
  }
  GetBlockedUser(user:User){
    this.request.requestObject=JSON.stringify(user);
    return this.http.post(UrlConstants.getBlockedUser,this.request);
  }
  GetUserByID(user: User) {
    this.request.requestObject=JSON.stringify(user);
    return this.http.post(UrlConstants.getUserByUserID,this.request);
  }
  EditUser(user: User) {
    this.request.requestObject=JSON.stringify(user);
    return this.http.post(UrlConstants.updateUser,this.request);
  }
}
