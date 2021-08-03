import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  allUser: any;
  successMsg : any;
  //roleList: any = ['User', 'Admin']

  user: User={
    userId:90,
    name:'',
    mobile:'',
    email:'',
    password:'',
    status: '',
    role:''
  }
 
  
  constructor(private UserService: UserService,
    private router: Router) {}

  ngOnInit(): void {

    this.successMsg = '';
  }
 
  addUser(){
    let user = {
      userId: this.user.userId,
      name: this.user.name,
      mobile: this.user.mobile,
      password: this.user.password,
      email:this.user.email

    }
   
  this.UserService.addUser(user).subscribe(
    (repsonse) => {
      console.log(repsonse);  
      this.successMsg = this.successMsg + " You have successfully registered with login email" +user.email+ "password:" +user.password;
      this.allUser = repsonse;
      this.router.navigate(['/user-login'])
    }
  );
  }

}
