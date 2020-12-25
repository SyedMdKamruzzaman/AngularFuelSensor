import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { ResponseMessage } from 'src/app/models/response-message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private secuirityService:SecurityService) { }

  ngOnInit() {
  }

user:any={userID:"",password:""};
  signin(){
  this.secuirityService.signin(this.user).subscribe((res:ResponseMessage)=>{        
    let obj=res.ResponseObj;        
    localStorage.setItem('token',obj)
    if (res.StatusCode==1) {  
      
      location.replace('');
    }else{
      alert(res.Message);
    }
   
  })
  }
}
