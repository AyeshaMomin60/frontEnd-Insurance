import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PolicyService } from '../policy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthenticationService } from 'src/app/service/user-authentication.service';
import { UserService } from '../user.service';
import { planEnrollment } from '../planEnrollment';
import { Enroll } from '../enroll';
import { NotifacationServiceService } from 'src/app/service/notifacation-service.service';
//import { NotifacationServiceService } from 'src/app/service/notifacation-service.service';
@Component({
  selector: 'app-user-show-policy',
  templateUrl: './user-show-policy.component.html',
  styleUrls: ['./user-show-policy.component.css']
})
export class UserShowPolicyComponent implements OnInit {

  // policies : Observable<Policy[]>
  policies:any;
  allPolicy: any = [];
  planId:number;
  name: string;
  Cost: number;
  deductable:number;
  details:string;
  data: any;
  searchText='';
  userId:number;
  
  allUser:Enroll;


  userInfo: planEnrollment={
    plan: {         
      planId: 0
    },
    user: {
      userId: 0
    }
  
  }
 
  constructor(private userService: UserService, 
    private router: Router,
    private policyService:PolicyService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private notifyService:NotifacationServiceService,
   private authService:UserAuthenticationService) { }


    ngOnInit(): void {
      this.reloadData();
     //this.planId=this.route.snapshot.params["planId"];
     //console.log(this.planId);

      }
    
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
        this.policyService.showAllPlans().subscribe(
          res=>
          this.allPolicy=res,
          error=>{
             console.log(error);
          });

      }
      
 
}

