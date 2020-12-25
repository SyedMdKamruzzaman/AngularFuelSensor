import { Component, OnInit } from '@angular/core';
import { ClientDataService } from 'src/app/services/client.service';
import { VehicleDataService } from 'src/app/services/vehicle.service';
import { FillingDataDBService } from 'src/app/services/fillingDataDB.service';
import { ResponseMessage } from 'src/app/models/response-message';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-refueling-report-db',
  templateUrl: './refueling-report-db.component.html',
  styleUrls: ['./refueling-report-db.component.css']
})

export class RefuelingReportDbComponent implements OnInit {
  sum = 0;
  listFillingData:any;
  listClientData:any;
  listVehicleData:Array<any>;
  filter: any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings;
  latitude:any;
  longitude:any;

  constructor(private fillDataService:FillingDataDBService,private clientDataService:ClientDataService,private vehicleDataService:VehicleDataService) { }

 

  ngOnInit() {

    
     this.filter=new Object();
    //this.loadAllFuelFillingData();
    this.loadClientList();
    this.loadVehicleList();


    $('#sandbox-container input').datepicker({
      format: "dd-M-yyyy",
      autoclose: true
    });

    $('#sandbox-container2 input').datepicker({
      format: "dd-M-yyyy",
      autoclose: true
    });
    
  
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];
   

  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  loadAllFuelFillingData(){
    this.filter.StartDate=$('#sandbox-container input').datepicker().val();
    this.filter.EndDate= $('#sandbox-container2 input').datepicker().val();
    // debugger;
    this.fillDataService.GetFillingData(this.filter).subscribe((res:any)=>{
        this.listFillingData = res;
        //  console.log(this.listFillingData);
        this.sum = 0;
        for(let j=0;j<this.listFillingData.length;j++)
        {
          this.sum += this.listFillingData[j].FuelinLiter;
        }

        // this.sum = Math.round(this.sum,2);
    });
  }

  loadClientList(){
    this.clientDataService.GetClientData().subscribe((res:any)=>{
      this.listClientData=res;
    });
  }

  loadVehicleList(){
    this.vehicleDataService.GetVehicleData().subscribe((res:any)=>{
      this.listVehicleData=res;
      //console.log(this.listVehicleData);
    });
  }
  filterVehicle(clientID:string){

    this.filter=new Object();
    this.filter.TrackerName='';
            
    this.dropdownList=this.listVehicleData.filter(x=>x.ClientID==clientID);

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'ID',
      textField: 'TrackerName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit:1,
      allowSearchFilter: true
    };
  }
}


