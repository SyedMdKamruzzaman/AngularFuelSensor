import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlConstants } from '../enums/UrlConstants';

@Injectable({
  providedIn: 'root'
})
export class FillingDataService {

  constructor(private http:HttpClient) { }
  GetFillingData(obj:any){
 return this.http.post(UrlConstants.getFillingData,obj)
}
uploadData(file:any){
 return this.http.post(UrlConstants.uploadData,file)
}
}
