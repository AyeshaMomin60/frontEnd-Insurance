import { Component, OnInit } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthenticationService } from 'src/app/service/user-authentication.service';
import { Admin } from './Admin';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin: Admin={
    mobile:'',
    password:''
  }
  errorMsg:any="";
  constructor(private router: Router,
    private authService:UserAuthenticationService) { }

  ngOnInit(): void {
    this.errorMsg="";
  }
  onSubmit(adminForm: any){
    if(adminForm.mobile==="9876543210" && adminForm.password==="1234"){
      this.authService.removeUserId();
                this.authService.setUserId(1);
                this.authService.removeUserName();
                this.authService.setUserName("Admin");
      
      
      this.router.navigate(["list-policy"]);
      console.log("Login succesfull");
      
    }
    else{
      this.errorMsg="Invalid Employee Id/ password";
      console.log("Login not succesfull");
    }
  }
}
