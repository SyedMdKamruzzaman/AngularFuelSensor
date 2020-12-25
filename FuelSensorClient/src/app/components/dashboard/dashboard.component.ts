import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ResponseMessage } from 'src/app/models/response-message';
import * as $ from 'jquery';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  BruName:string;
  FullName:string;
  htmlToAdd: any;
  dasboard:any;
  userPhoto: string;
  constructor(private securityService:SecurityService,private dashboardService:DashboardService) {
  
      // this.dashboardService.GetDashboard().subscribe((res:ResponseMessage)=>{
      //   this.dasboard=res.ResponseObj;
      //   this.BruName=this.dasboard.BruName;
      //   this.FullName=this.dasboard.FullName;
      //   this.htmlToAdd=this.dasboard.MenuString;
      //   this.userPhoto="data:image/png;base64,"+this.dasboard.UserImage;
      //   console.log(this.dasboard);
      //   localStorage.setItem("dasboard",JSON.stringify(this.dasboard));
      // })
     // location.replace("home");
   }

  ngOnInit() {
  //   $(".bars").on("click", function () {
  //     if (!$('body').hasClass('overlay-open')) {
  //         $('body').addClass('overlay-open');
  //     } else {
  //         $('body').removeClass('overlay-open');
  //     }
  
  //   });
  //  $(".navbar-toggle").on("click", function () {
  //   if (!$('body').hasClass('overlay-open')) {
  //       $('body').addClass('overlay-open');
  //   } else {
  //       $('body').removeClass('overlay-open');
  //   }

  //   });
  //   var myFunction = (function () {
  //     var menu_element = $("#myTopnav"),
  //         target_class = 'responsive';
  //     $(window).click(function (e) {
  //         var tid = e.target.id;
  //         var tpid = e.target.parent ? e.target.parent.id : '';
  //         if (tid === 'top-u-men-1' || tid === 'top-u-men-2') return;
  //         if (tpid === 'top-u-men-1' || tpid === 'top-u-men-2') return;
  //         menu_element.removeClass(target_class);
  //     });
  //     return function () {
  //         menu_element.toggleClass(target_class);
  //     }
  // }());
  // function toggleMenu() {
  //     if ($('body').hasClass('overlay-open')) {
  //         $('body').removeClass('overlay-open');
  //         $('.overlay').fadeIn();
  //     } else {
  //         $('body').addClass('overlay-open');
  //         $('.overlay').fadeOut();
  //     }
  // }
  // $('.bars').on("click", function () {
  //     toggleMenu();
  // });
  // $(".ml-menu li a").on('click', function () {
  //     $('body').removeClass('overlay-open');
  //     $('.overlay').fadeOut();
  // });
 this.dasboard=JSON.parse(localStorage.getItem('dasboard'));
  }
  signOut(){
     this.securityService.signout().subscribe((res:any)=>{
       if (res.StatusCode==1) {
         alert("logout successfully.");
         localStorage.clear();
         location.replace('/login');
       }
     })
  }
  LoadProfile(){

  }

  
}
