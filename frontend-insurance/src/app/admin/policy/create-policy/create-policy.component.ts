import { Component, OnInit } from '@angular/core';
import { Policy } from '../Policy';
import { PolicyService } from '../policy.service';
import { Router } from '@angular/router';
import { UserAuthenticationService } from 'src/app/service/user-authentication.service';
import { NotifacationServiceService } from 'src/app/service/notifacation-service.service';


@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.css']
})
export class CreatePolicyComponent implements OnInit {

  allUser: any;
  successMsg : any;

  policy:Policy={
    planId:0,
    name:'',
    cost:0,
    deductible:0,
    details:''
  }
 
  
  constructor(private UserService: PolicyService,
    private userAuth:UserAuthenticationService,
    private notifyService:NotifacationServiceService,
    private router: Router) {}

  ngOnInit(): void {

    this.successMsg = '';
  }
 
  createPolicy(){
    let policy = {
      planId: this.policy.planId,
      name: this.policy.name,
      cost: this.policy.cost,
      deductible: this.policy.deductible,
      details:this.policy.details

    }
   
  this.UserService.createPolicy(policy).subscribe(
    (repsonse) => {
      console.log(repsonse);
      this.notifyService.showSuccessWithTimeout("New Policy Created Successfully","Notification","2000");
      //alert("Policy Created Successfully!!");
      this.allUser = repsonse;
      this.successMsg = " Policy Created Successfully. ";
      this.router.navigate(["/list-policy"]);
    },
    error=>{
      console.log(error)
      this.notifyService.showErrorWithTimeout("Policy is not Created","Notification","2000")
    }
  );
  }

}
