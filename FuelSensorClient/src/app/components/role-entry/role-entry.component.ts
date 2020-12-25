import { Component, OnInit } from '@angular/core';
import { ParameterSettings } from 'src/app/models/parameterSettings';
import { ParameterSettingsService } from 'src/app/services/parameterSettings.service';
import { FillingDataDBService } from 'src/app/services/fillingDataDB.service';
import { ResponseMessage } from 'src/app/models/response-message';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-role-entry',
  templateUrl: './role-entry.component.html',
  styleUrls: ['./role-entry.component.css']
})

export class RoleEntryComponent implements OnInit {
  listFillingData:any;
  filter: any;
  parameterSettings:any;
  ParamSettingsList:any;
  
  constructor(private fillDataService:FillingDataDBService,private parameterService:ParameterSettingsService) {}
  
  ngOnInit() {
    this.parameterSettings=new Object();
    this.GetParameterSettings();

    this.parameterSettings.Key='';
    this.parameterSettings.Value='';


  }

  GetParameterSettings(){
    this.ParamSettingsList='';
    this.parameterService.GetParameterSettingsList().subscribe((res:ResponseMessage)=>{
        this.ParamSettingsList = res;
    })
  }

  SaveParameter(){
    // this.user.PasswordExpiryDate=$('#sandbox-container input').datepicker().val();
     if (this.canSave()) {
     if(this.parameterSettings.ID>0)
     {
      this.parameterService.EditParameterSettings(this.parameterSettings).subscribe((res:ResponseMessage)=>{
        alert(res);
        this.GetParameterSettings();
      })
     }
     else 
     {
      // this.parameter.Key = "no_of_rows";
      // this.parameter.Value=30;
      this.parameterSettings.CreatedBy = "Kamruzzaman";
      this.parameterSettings.CreatedDate = "10-Feb-2020";
      this.parameterSettings.UpdatedBy = this.parameterSettings.CreatedBy;
      this.parameterSettings.UpdatedDate = this.parameterSettings.CreatedDate;

      this.parameterService.SaveParameterSettings(this.parameterSettings).subscribe((res:ResponseMessage)=>{
        alert(res);
        this.GetParameterSettings();
      })
   }
      this.parameterSettings=new Object();
      this.GetParameterSettings();
 
}
  }

  canSave():boolean{
    if (isNullOrUndefined(this.parameterSettings.Key)|| this.parameterSettings.Key=="") {
      alert("Key is blank.")
      return false;
    }
    if (isNullOrUndefined(this.parameterSettings.value)|| this.parameterSettings.value=="") {
      alert("Value is blank.")
      return false;
    }

    return true;
  }

  UpdateParameter(obj){
    this.parameterSettings=Object.assign({}, obj);
  }

}


