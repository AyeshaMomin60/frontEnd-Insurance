import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { NotifacationServiceService } from 'src/app/service/notifacation-service.service';

import { UserAuthenticationService } from 'src/app/service/user-authentication.service';
import { User } from '../User';
import { UserService } from '../user.service';
import { UserLogin } from '../userLogin';

//import { exception } from 'node:console';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  isLoggedin=false;
  customer: UserLogin={
    email:'',
    password:''
  }
  successMsg : any;
  userInfo:User;
  errormsg:any;
  customerUser: any;
  data:any;
  userForm: FormGroup;
  

  constructor(private userService: UserService,
    private authService:UserAuthenticationService,
    private router: Router,
    private notifyService:NotifacationServiceService,
    private formBuilder:FormBuilder) { 
    this.errormsg = '';
   
    
  }

  ngOnInit(): void {
    localStorage.setItem('SeesionUser',this.authService.getUserId())
    this.userForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
     
  })
  }

  get email() {
    return this.userForm.get('email')
}
get password() {
    return this.userForm.get('password')
}
  
  getUserByEmail(){
    let user = {
      email: this.customer.email,
      password: this.customer.password

    }
        this.userService.getUserByEmail(user.email,user.password).subscribe
      (
          response =>{
                console.log(response);
                this.customerUser = response;
                //this.router.navigate(['/user-list-policy']);
                if(this.customerUser.password == user.password)
                {
                  this.userService.getUserId(user.email).subscribe(
                    (user: User) =>
                    {
                      this.userInfo = user;
                      if(this.userInfo.role=="User")
                      {
                              console.log(this.userInfo);
                              this.notifyService.showSuccessWithTimeout("User Logged in Successfully","Notification","2000");
                              this.successMsg =" login successfully";
                              this.authService.removeUserId();
                              this.authService.setUserId(this.userInfo.userId);
                              this.authService.removeUserName();
                              this.authService.setUserName(this.userInfo.name);
                            //alert("Login Successfull");
                           
                              this.router.navigate(['/user-list-policy'])
                      }
                      else if(this.userInfo.role=="Admin")
                       {
                        console.log(this.userInfo);
                        this.notifyService.showSuccessWithTimeout("Admin Logged in Successfully","Notification","2000");
                        this.authService.removeUserId();
                        this.authService.setUserId(this.userInfo.userId);
                        this.authService.removeUserName();
                        this.authService.setUserName(this.userInfo.name);
                        this.router.navigate(["/list-policy"]);
                      }
                      else if(this.userInfo.role=="SUPER-ADMIN"){
                        this.notifyService.showSuccessWithTimeout("Super Admin Logged in Successfully","Notification","2000");
                        console.log(this.userInfo);
                        this.authService.removeUserId();
                        this.authService.setUserId(this.userInfo.userId);
                        this.authService.removeUserName();
                        this.authService.setUserName(this.userInfo.name);
                        this.router.navigate(["/view-all-user"]);
                      }
                      else {
                        this.notifyService.showErrorWithTimeout("Login Failed","Notification",2000);
                        this.errormsg = "contact administrator";
                        //alert("Invalid Details")
                       }
                }
              )
             }
            //  else {
            //   this.notifyService.showErrorWithTimeout("Login Failed","Notification",2000);
            //   this.errormsg = "contact administrator";
            //   //alert("Invalid Details")
            //  }
        }
        ,err => {
          if(err.status == 404) {
            this.errormsg = "invalid Email or Password-";
          } 
      }
        );

  }

  
}