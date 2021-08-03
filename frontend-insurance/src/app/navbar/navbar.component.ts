import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserAuthenticationService } from '../service/user-authentication.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
sessionValue:any;
  isLoggedIn=false;
  userName:any;
  userId: any;
  isSuperAdmin=false;
 
  constructor(
    public authService :UserAuthenticationService,
    private router: Router
  ) 
  {​​​​​​​​ 
     this.isLoggedIn=false;
     this.userName="";
  }​​​​​​​​
  ngOnInit(): void {​​​​​​​​
   this.userName=this.authService.getUserName();
   if(this.authService.getUserName()=="Ayesha"){
    this.isSuperAdmin=true;
    }
   console.log(this.userName);
  }​​​​​​​​
  
  logout(): void {
    this.router.navigate(['/user-login']);
    this.authService.removeUserId();
    this.authService.removeUserName();
    this.isLoggedIn=false;
  }

  superAdmin(){
    if(this.authService.getUserName()=='Ayesha'){
      this.isSuperAdmin=true;
      }
  }

}
