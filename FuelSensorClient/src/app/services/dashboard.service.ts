import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlConstants } from '../enums/UrlConstants';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }
GetDashboard(){
 return this.http.get(UrlConstants.getDashboard)
}
}
