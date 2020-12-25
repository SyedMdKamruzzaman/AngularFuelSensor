import { Component, OnInit } from '@angular/core';
import { Clients } from 'src/app/models/client';
import { FillingDataDBService } from 'src/app/services/fillingDataDB.service';
import { ResponseMessage } from 'src/app/models/response-message';
import { isNullOrUndefined } from 'util';
import { ClientDataService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})


export class AddClientComponent implements OnInit {
  client:any;
  listClientData:any;
  listFillingData:any;
  filter: any;
  
  constructor(private fillDataService:FillingDataDBService
             ,private clientService:ClientDataService) {}
  
  ngOnInit() {

    this.LoadClientList();

    this.client=new Object();
    this.LoadClientList();

    this.client.ClientID='';
    this.client.Name='';
    this.client.BDTrackLoginID='';
    this.client.ContactNo='';
    this.client.Address='';


  }

  

  SaveClient(){
    if (this.canSave()) {
     if(this.client.ID>0)
     {
      this.clientService.EditClientData(this.client).subscribe((res:ResponseMessage)=>{
        alert(res);
        this.LoadClientList();
      })
     }
    else 
    {
        this.clientService.SaveClientData(this.client).subscribe((res:ResponseMessage)=>{
        alert(res);
        this.LoadClientList();
      })
   }
      this.client=new Object();
      this.LoadClientList();
 
}
  }
  

   canSave():boolean{

    if (isNullOrUndefined(this.client.ClientID)|| this.client.ClientID=="") {
      alert("Client ID is blank.")
      return false;
    }
    if (isNullOrUndefined(this.client.Name)|| this.client.Name=="") {
      alert("Name is blank.")
      return false;
    }

     return true;
   }

  UpdateClient(obj){
    this.client=Object.assign({}, obj);
  }

  LoadClientList(){
      this.listClientData='';
      this.clientService.GetClientData().subscribe((res:ResponseMessage)=>{
          this.listClientData = res;
      })
  }

}


