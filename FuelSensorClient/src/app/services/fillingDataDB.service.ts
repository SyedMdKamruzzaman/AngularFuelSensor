import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlConstants } from '../enums/UrlConstants';

@Injectable({
  providedIn: 'root'
})
export class FillingDataDBService {

  constructor(private http:HttpClient) { }
  GetFillingData(obj:any){
 return this.http.post(UrlConstants.getFillingDataDB,obj)
}
uploadData(file:any){
 return this.http.post(UrlConstants.uploadData,file)
}
}
