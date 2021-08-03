import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NumberValueAccessor, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifacationServiceService } from 'src/app/service/notifacation-service.service';
import { Policy } from '../Policy';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-edit-policy',
  templateUrl: './edit-policy.component.html',
  styleUrls: ['./edit-policy.component.css']
})
export class EditPolicyComponent implements OnInit {
  submitted: false;
  planId:number;
  policy:Policy;
  policyForm:FormGroup;
  
  
  
  constructor(private route: ActivatedRoute, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder:FormBuilder,
    private notifyService:NotifacationServiceService,
     private  policyService:PolicyService) { }
 
  ngOnInit(): void {
    // console.log(+this.route.snapshot.params['planId']);
    this.planId=+this.activatedRoute.snapshot.paramMap.get('planId');
    console.log(this.planId);
    this.policyService.getPolicy(+this.route.snapshot.params['planId']).subscribe(
      (policyInfo:Policy)=>{
        this.policy = policyInfo;
        console.log(policyInfo);
        this.policyForm.get('name').setValue(this.policy.name);
        this.policyForm.get('cost').setValue(this.policy.cost);
        this.policyForm.get('deductible').setValue(this.policy.deductible);
        this.policyForm.get('details').setValue(this.policy.details);
        
      }
    )
 
    this.policyForm = this.formBuilder.group({
      name:['', [Validators.required, Validators.minLength(3)]],
      cost:['', [Validators.required]],
    deductible:['', [Validators.required]],
      details:['',[Validators.required]],
    });
  }
 
  get policyName(){
    return this.policyForm.get('policyName')
  }
 
  get cost(){
    return this.policyForm.get('cost')
  }
 
  get deductible(){
    return this.policyForm.get('deductible')
  }
 
  get details(){
    return this.policyForm.get('details')
  }
 
  update(){
    console.log(this.policyForm.value)
    this.policyForm.value.planId = this.route.snapshot.params['planId']
    this.policyService.updatePolicy(this.policyForm.value).subscribe(
      response =>{
        this.notifyService.showSuccessWithTimeout("Policy Updated Successfully","Notification","2000");
        console.log('Success!', response),
        //alert("Updated Successfully!")
        this.router.navigate(['/list-policy']);
      },
      error=>{
        console.log(error)
        this.notifyService.showErrorWithTimeout("Policy is not Updated","Notification","2000")
      }
      
    );
  }
}
