import { Component, OnInit } from '@angular/core';
import { FillingDataService } from 'src/app/services/fillingData.service';
import { ResponseMessage } from 'src/app/models/response-message';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-fuel-consumption-report',
  templateUrl: './fuel-consumption-report.component.html',
  styleUrls: ['./fuel-consumption-report.component.css']
})


export class FuelConsumptionReportComponent implements OnInit {
  
  listFillingData:any;
  filter: any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings;

  constructor(private fillDataService:FillingDataService) { }

 

  ngOnInit() {
     this.filter=new Object();
    this.loadAllFuelFillingData();

    $('#sandbox-container input').datepicker({
      format: "mm/dd/yyyy",
      autoclose: true
    });

    $('#sandbox-container2 input').datepicker({
      format: "mm/dd/yyyy",
      autoclose: true
    });

    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

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
    this.fillDataService.GetFillingData(this.filter).subscribe((res:any)=>{
        this.listFillingData = res;
        console.log(this.listFillingData );
    });
  }

}


