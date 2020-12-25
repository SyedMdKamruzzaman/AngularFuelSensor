import {Injectable} from '@angular/core';
import { UrlConstants } from '../enums/UrlConstants';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})


export class ParameterSettingsService{

    constructor (private http:HttpClient) {}

    GetParameterSettingsList()
    {
        return this.http.get(UrlConstants.getParameterSettingsData);
    }
    
    SaveParameterSettings(parameter:any)
    {
        return this.http.post(UrlConstants.insertParameterSettings,parameter);
    }

    EditParameterSettings(parameter:any)
    {
        return this.http.post(UrlConstants.editParameterSettings,parameter);
    }

}