import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleDataService } from 'src/app/services/vehicle.service';
import { FillingDataDBService } from 'src/app/services/fillingDataDB.service';
import { ResponseMessage } from 'src/app/models/response-message';
import { isNullOrUndefined } from 'util';
import { ClientDataService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})


export class AddVehicleComponent implements OnInit {
  listClientData:any;
  listFillingData:any;
  filter: any;
  vehicle:any;
  VehicleList:any;
  
  constructor(private fillDataService:FillingDataDBService
             ,private vehicleService:VehicleDataService
             ,private clientService:ClientDataService)
  {}
  
  ngOnInit() {

    $('#sandbox-container input').datepicker({
      format: "dd-M-yyyy",
      autoclose: true
    });

    this.loadClientList();

    this.vehicle=new Object();
    this.GetVehicleList();

    this.vehicle.TrackerName='';
    this.vehicle.TrackerType='';
    this.vehicle.ClientID='';
    this.vehicle.FuelCapacity='';
    this.vehicle.InstallationDate='';


  }

  GetVehicleList(){
    this.VehicleList='';
    this.vehicleService.GetVehicleData().subscribe((res:ResponseMessage)=>{
        this.VehicleList= res;
        console.log(res);
    })
  }

  SaveParameter(){
    // this.user.PasswordExpiryDate=$('#sandbox-container input').datepicker().val();
    this.vehicle.InstallationDate =$('#sandbox-container input').datepicker().val();
     if (this.canSave()) {
     if(this.vehicle.ID>0)
     {
      this.vehicleService.EditVehicleData(this.vehicle).subscribe((res:ResponseMessage)=>{
        alert(res);
        this.GetVehicleList();
      })
     }
     else 
     {
      
      this.vehicleService.SaveVehicleData(this.vehicle).subscribe((res:ResponseMessage)=>{
        alert(res);
        this.GetVehicleList();
      })
   }
      this.vehicle=new Object();
      
 
}
  }

  canSave():boolean{ 
    
    if (isNullOrUndefined(this.vehicle.TrackerName)|| this.vehicle.TrackerName=="") {
      alert("Tracker name is blank.")
      return false;
    }
    if (isNullOrUndefined(this.vehicle.ClientID)|| this.vehicle.ClientID=="") {
      alert("Client ID is blank.")
      return false;
    }

    if (isNullOrUndefined(this.vehicle.FuelCapacity)|| this.vehicle.FuelCapacity=="") {
      alert("Fuel Capactiy is blank.")
      return false;
    }
   

    return true;
  }

  UpdateParameter(obj){
    this.vehicle=Object.assign({}, obj);
  }

  loadClientList(){
    this.clientService.GetClientData().subscribe((res:any)=>{
      this.listClientData=res;
    });
  }

}



