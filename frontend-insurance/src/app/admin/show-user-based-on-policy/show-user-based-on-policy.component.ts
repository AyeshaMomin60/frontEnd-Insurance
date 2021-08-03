import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthenticationService } from 'src/app/service/user-authentication.service';
import { UserService } from 'src/app/user/user.service';
import { PolicyService } from '../policy/policy.service';

@Component({
  selector: 'app-show-user-based-on-policy',
  templateUrl: './show-user-based-on-policy.component.html',
  styleUrls: ['./show-user-based-on-policy.component.css']
})
export class ShowUserBasedOnPolicyComponent implements OnInit {

  planId:number;
  AllUserDetails:any[];
  constructor(private userService: UserService, 
    private router: Router,
    private policyService:PolicyService,
    private http: HttpClient,
    private route: ActivatedRoute,
   private authService:UserAuthenticationService) { }

  ngOnInit(): void {
    this.planId=+this.route.snapshot.paramMap.get('planId');
    console.log(this.planId);
    this.policyService.findUserByPolicy(this.planId).subscribe(
      (res:any)=>{
      console.log(res)
      this.AllUserDetails=res;
      
      },
      error=>{
         console.log(error);
      });
     
    }
  
  // userDetails(planId:number){

  //  this.policyService.findUserByPolicy(this.planId).subscribe(
  //   (res:any)=>{
  //   console.log(res)
  //   this.AllUserDetails=res;
    
  //   },
  //   error=>{
  //      console.log(error);
  //   });
   
  // }

}
