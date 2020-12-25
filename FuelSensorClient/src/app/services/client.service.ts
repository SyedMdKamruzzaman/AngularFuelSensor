import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlConstants } from '../enums/UrlConstants';

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {

  constructor(private http:HttpClient) { }
    
    GetClientData(){
        return this.http.get(UrlConstants.getClientData)
    }

    SaveClientData(parameter:any)
    {
        return this.http.post(UrlConstants.insertClientData,parameter);
    }

    EditClientData(parameter:any)
    {
        return this.http.post(UrlConstants.editClientData,parameter);
    }
}
