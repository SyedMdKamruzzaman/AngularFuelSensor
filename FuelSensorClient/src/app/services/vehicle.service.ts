import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlConstants } from '../enums/UrlConstants';

@Injectable({
  providedIn: 'root'
})
export class VehicleDataService {

      constructor(private http:HttpClient) { }

      GetVehicleData(){
         return this.http.get(UrlConstants.getVehicleData);
      }

      SaveVehicleData(parameter:any)
      {
          return this.http.post(UrlConstants.insertVehicleData,parameter);
      }
  
      EditVehicleData(parameter:any)
      {
          return this.http.post(UrlConstants.editVehicleData,parameter);
      }
}
