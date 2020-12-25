import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ResponseMessage } from 'src/app/models/response-message';
import { User } from 'src/app/models/user';
import { AppUtilityService } from 'src/app/helper/app-utility.service';
declare let $:any;
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  sortColumnName:any;
  sortReverse:any;
  user: User;
  lstUser:any=[];
  userUtils: any;
  dasboard: any=new Object();
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.SearchAllUser();
    $(function(){
      // Helper function to convert a string of the form "Mar 15, 1987" into a Date object.

      var table = $("table").stupidtable();

      table.on("beforetablesort", function (event, data) {
        // Apply a "disabled" look to the table while sorting.
        // Using addClass for "testing" as it takes slightly longer to render.
        $("#msg").text("Sorting...");
        $("table").addClass("disabled");
      });

      table.on("aftertablesort", function (event, data) {
        // Reset loading message.
        $("#msg").html("&nbsp;");
        $("table").removeClass("disabled");

        var th = $(this).find("th");
        th.find(".arrow").remove();
        var dir = $.fn.stupidtable.dir;
        //console.log(dir);
        var arrow = data.direction === dir.ASC ? "&uarr;" : "&darr;";
        th.eq(data.column).append('<span class="arrow">' + arrow +'</span>');
      });
  });
  }
  searchOnlineUser(){
    this.userService.GetOnlineUser(this.user).subscribe((res:ResponseMessage)=>{
      if (res.StatusCode==1) {
        this.lstUser=res.ResponseObj;
      }else{
        alert(res.Message);
      }
    });
  }
  searchOfflineUser(){
    this.userService.GetOfflineUser(this.user).subscribe((res:ResponseMessage)=>{
      if (res.StatusCode==1) {
        this.lstUser=res.ResponseObj;
      }else{
        alert(res.Message);
      }
    });
  }
  searchBlockedUser(){
    this.userService.GetBlockedUser(this.user).subscribe((res:ResponseMessage)=>{
      if (res.StatusCode==1) {
        this.lstUser=res.ResponseObj;
      }else{
        alert(res.Message);
      }
    });
  }
  SearchAllUser(){
    this.userService.GetActiveUser(this.user).subscribe((res:ResponseMessage)=>{
      if (res.StatusCode==1) {
        this.lstUser=res.ResponseObj;
      }else{
        alert(res.Message);
      }
    });
  }
  GotoAddUser(){
   location.replace("/add-user");
  }
  updateUser(obj:User){
   if (obj.UserID==undefined ||obj.UserID==" ") {
     alert("Invalid user.")
   }else{
     location.replace("/add-user?id="+obj.UserID)
   }
  }
  goToSessionLog(obj:User){

  }
}
