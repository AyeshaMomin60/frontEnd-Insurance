import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  allPolicy: any = [];

  private baseUrl = 'http://localhost:8001/backend-insurance/api';
  constructor(private http: HttpClient) { }


  showAllPlans() {
    return this.http.get(`${this.baseUrl}/showAllPlans`);
  }

  getPolicyList(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/viewPlanByName/${name}`);
  }
  getPlanByPlanId(planId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/viewPlanById/${planId}`);
  }
  getPolicy(planId: number) {
    console.log(planId)
    return this.http.get(`${this.baseUrl}/viewPlanById/` + planId);
  }

  policyByUserId(userId: number) {
    return this.http.get(`${this.baseUrl}/UserTakenPlan/${userId}`);

  }








  //   showAllPlans(){
  //     return this.http.get("http://localhost:8080/api/showAllPlans");
  //   }

  //   getPolicyList(name:string):Observable<any>{
  //     return this.http.get(`http://localhost:8080/api/viewPlanByName/${name}`);
  //   }
  //   getPlanByPlanId(planId:number):Observable<any>{
  //     return this.http.get(`http://localhost:8080/api/viewPlanById/${planId}`);
  //   }
  //   getPolicy(planId:number){
  //     console.log(planId)
  //     return this.http.get(`http://localhost:8080/api/viewPlanById/`+planId);
  // }

  // policyByUserId(userId:number){
  //   return this.http.get(`http://localhost:8080/api/UserTakenPlan/${userId}`);

  // }

}