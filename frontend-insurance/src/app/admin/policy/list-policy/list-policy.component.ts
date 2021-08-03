import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PolicyService } from '../policy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Policy } from '../Policy';
import { NotifacationServiceService } from 'src/app/service/notifacation-service.service';
import { planEnrollment } from 'src/app/user/planEnrollment';
import { UserAuthenticationService } from 'src/app/service/user-authentication.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-list-policy',
  templateUrl: './list-policy.component.html',
  styleUrls: ['./list-policy.component.css']
})
export class ListPolicyComponent implements OnInit {

  allPolicy: any = [];
  Policies:Policy[];
  //users: User[];
  allUser: any;
  successMsg : any;
  planId:number;
  Name: string;
  Cost: number;
  deductable:number;
  details:string;
  data: any;
  searchText:'';
  userInfo: planEnrollment={
    plan: {         
      planId: 0
    },
    user: {
      userId: 0
    }
  
  }

  constructor(
      private policyService: PolicyService,
      private router: Router,
      private userService: UserService,
      private route: ActivatedRoute,
      private authService:UserAuthenticationService,
      private notifyService:NotifacationServiceService,
      private http: HttpClient) { }


  ngOnInit(): void {
    this.reloadData();
  
  
  }
  deletePolicy(planId:number){
    console.log()
    this.policyService.deletePlan(planId)
    .subscribe(
      data => {
        console.log(data);
        this.notifyService.showSuccessWithTimeout("Policy Deleted Successfully","Notification","2000");
        this.reloadData();
        //this.allPolicy;
      },
      error=>{
        console.log(error)
        this.notifyService.showErrorWithTimeout("Policy is not Deleted","Notification","2000");
      }
     // error => console.log(error));
    )}

    addPolicy(planId:number){
       
      this.userInfo.user.userId =+this.authService.getUserId();
      this.userInfo.plan.planId=planId;
      console.log(this.userInfo.user.userId);
      console.log(this.userInfo.plan.planId);
      console.log(this.userInfo);
   this.userService.enrollment(this.userInfo).subscribe(
     (repsonse:any) => {
       console.log(repsonse);
       this.notifyService.showSuccessWithTimeout("Policy Enroll Successfully","Notification","2000");
       this.allUser = repsonse;
       //alert("Policy Enroll Successfully");
     },
     error=>{
       console.log(error)
       this.notifyService.showErrorWithTimeout("User Already taken Policy","Notification","2000")
     }
   );
   }
 


  reloadData(){
    // this.policies = this.policyService.getPolicyList();
    this.policyService.showAllPlans().subscribe(
      res=>
      this.allPolicy=res);
  }
  
}