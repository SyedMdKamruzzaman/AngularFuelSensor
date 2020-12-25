import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ClientDataService } from 'src/app/services/client.service';
import { ResponseMessage } from 'src/app/models/response-message';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/helper/notification.service';
import { StatusCode, UserStatus } from 'src/app/enums/enums';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { isNullOrUndefined } from 'util';
import { AppUtilityService } from 'src/app/helper/app-utility.service';
import { DatePipe } from '@angular/common';
declare let $:any;

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  listClientData:any;
  sortColumnName:any;
  sortReverse:any;
  userID:string;
  passwordExpiryDate:any;
  lstStatus=Object.keys(UserStatus).filter(
    (type) => isNaN(<any>type) && type !== 'values'
  );
  lstUser: any;
  dasboard: any;
  fileData: File = null;
previewUrl:any = null;
fileUploadProgress: string = null;
uploadedFilePath: string = null;
previewUrl2:any = null;
  constructor(private userService:UserService,
              private route:ActivatedRoute,
              private datePipe:DatePipe,
              private messageService: NotificationService,
              private utilService:AppUtilityService,
              private clientDataService:ClientDataService) {

    this.userID = this.route.snapshot.queryParams["id"];
  }
  isUpdate:boolean=false;
  user:User;
  header:string="Add user"
  userUtils:any=new Object();
  myDate:Date;
  ngOnInit() {
    this.loadClientList();
    this.dasboard=JSON.parse(localStorage.getItem('dasboard'));
    this.isUpdate=false;

    this.myDate=new Date();
   
    this.user=new User();
    this.SearchAllUser();
    this.user.PasswordExpiryDate=this.datePipe.transform(new Date(),"yyyy-MM-dd");
    this.user.AccessRight=1;
    this.user.Status=1;
    this.userService.GetUserUtils().subscribe((res:ResponseMessage)=>{
     this.userUtils=res.ResponseObj;
   
    });
    if (this.userID!==undefined && this.userID!==null && this.userID !=="") {
      this.isUpdate=true;
      this.user=new User();
      this.user.UserID=this.userID;
      this.getUserByID();
    }
    $('#sandbox-container input').datepicker({
      format: "mm/dd/yyyy",
      autoclose: true
    });
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
}

preview() {
  // Show preview
  var mimeType = this.fileData.type;
  if (mimeType.match(/image\/*/) == null) {
    return;
  }

  var reader = new FileReader();
  reader.readAsDataURL(this.fileData);
  reader.onload = (_event) => {
    this.previewUrl = reader.result;
    var sign=this.previewUrl.split(',', 1) + ',';
    this.user.UsersPhoto= this.previewUrl.replace(sign, '');
 
  }
}

fileProgress2(fileInput: any) {
  this.fileData = <File>fileInput.target.files[0];
  this.preview2();
}

preview2() {
// Show preview
var mimeType = this.fileData.type;
if (mimeType.match(/image\/*/) == null) {
  return;
}

var reader = new FileReader();
reader.readAsDataURL(this.fileData);
reader.onload = (_event) => {
  this.previewUrl2 = reader.result;
  var sign=this.previewUrl.split(',', 1) + ',';
  this.user.Signature= this.previewUrl.replace(sign, '');
}
}

  SaveUser(user){
    this.user.PasswordExpiryDate=$('#sandbox-container input').datepicker().val();
    
 if (this.canSave()) {


  if (this.isUpdate) {
    this.userService.EditUser(user).subscribe(
   (res:ResponseMessage)=>{
     if (res.StatusCode==StatusCode.Success) {
      location.replace("/view-user")
     }
    },
    (error:any)=>{

    })
  } else {
        this.userService.SaveUser(user).subscribe(
   (res:ResponseMessage)=>{
      this.user=new User();
    if (res.StatusCode==StatusCode.Success) {
      this.SearchAllUser();
     }
    },
    (error:any)=>{

    })
  }
}
  }
  close(){
    location.replace("/view-user");
  }
  canSave():boolean{
    if (isNullOrUndefined(this.user.UserID)|| this.user.UserID=="") {
      this.messageService.warning("UserID is blank.")
      return false;
    }
    if (isNullOrUndefined(this.user.Name)|| this.user.Name=="") {
      this.messageService.warning("User name is blank.")
      return false;
    }
    if (isNullOrUndefined(this.user.UserID)|| this.user.UserID=="") {
      this.messageService.warning("UserID is blank.")
      return false;
    }
    if (isNullOrUndefined(this.user.CellPhone)|| this.user.CellPhone=="" ) {
      this.messageService.warning("Cell phone is blank.")
      return false;
    }

    if (isNullOrUndefined(this.user.EmailAddress)|| this.user.EmailAddress=="") {
      this.messageService.warning("Email address is blank.")
      return false;
    }
    if (isNullOrUndefined(this.user.Password)|| this.user.Password=="") {
      this.messageService.warning("Password is blank.")
      return false;
    }
    if (isNullOrUndefined(this.user.RetypePassword)|| this.user.RetypePassword=="") {
      this.messageService.warning("Retype password is blank.")
      return false;
    }
    if (this.user.Password!==this.user.RetypePassword) {
      this.messageService.warning("Password is not matched.")
      return false;
    }
    return true;
  }
  SearchAllUser(){
    this.userService.GetActiveUser(this.user).subscribe((res:ResponseMessage)=>{
      if (res.StatusCode==1) {
        this.lstUser=res.ResponseObj;
      }
    });
  }

  updateUser(obj:any){
    this.isUpdate=true;
    this.user=Object.assign({},obj);
    this.getUserByID();
  }
  getUserByID(){
    this.userService.GetUserByID(this.user).subscribe((res:ResponseMessage)=>{
      if (res.StatusCode==1) {
        this.user=res.ResponseObj;

        this.user.PasswordExpiryDate=this.datePipe.transform(new Date(this.user.PasswordExpiryDate),"yyyy-MM-dd");
        this.user.RetypePassword=this.user.Password;
        this.previewUrl="data:image/png;base64,"+this.user.Signature;
        this.previewUrl2="data:image/png;base64,"+this.user.UsersPhoto;
      } 

        })
  }
  reset(){
    this.isUpdate=false;
    this.user=new User();
    this.user.PasswordExpiryDate=this.datePipe.transform(new Date(),"yyyy-MM-dd");
    this.user.AccessRight=1;
    this.user.Status=1;
  }

  loadClientList(){
    this.clientDataService.GetClientData().subscribe((res:any)=>{
      this.listClientData=res;
    });
  }

  goToSessionLog(obj){

  }
}
