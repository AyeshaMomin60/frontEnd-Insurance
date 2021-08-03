import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { planEnrollment } from 'src/app/user/planEnrollment';
import { Policy } from './Policy';
import { UpdatePolicy } from './UpdatePolicy';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  allPolicy : any= [];
  plan:Policy;

  private baseUrl = 'http://localhost:8001/backend-insurance/api';

  constructor(private http: HttpClient) { }


showAllPlans(){
    
    return this.http.get(`${this.baseUrl}/showAllPlans`);
  }

  getPolicy(planId:number){
    console.log(planId)
    return this.http.get(`${this.baseUrl}/viewPlanById/`+planId);
}

  createPolicy(policy: any){
   console.log(policy);
    return this.http.post(`${this.baseUrl}/CreatePlan`, policy);
  }


  // public deletePlan(planId:number) {
  //   return this.http.put(`${this.baseUrl}/DeletePlan/`+planId);
  //    }

     deletePlan(id: number): Observable<any>{
      return this.http.put(`${this.baseUrl}/DeletePlan/${id}`,{ responseType: 'text'});
    }


  updatePolicy(policy:UpdatePolicy):Observable<object>
  {
   // console.log(policy);
       return this.http.put(`${this.baseUrl}/updatePlan`,policy);
      }

      findUserByPolicy(planId){
        return this.http.get(`${this.baseUrl}/ShowPlanTakenByUser/`+planId)
      }

//   showAllPlans(){
    
//     return this.http.get("http://localhost:8080/api/showAllPlans");
//   }

//   getPolicy(planId:number){
//     console.log(planId)
//     return this.http.get(`http://localhost:8080/api/viewPlanById/`+planId);
// }

//   createPolicy(policy: any){
//    console.log(policy);
//     return this.http.post("http://localhost:8080/api/CreatePlan", policy);
//   }

//   // deletePlan(planId:number):Observable<any>{
   
//   //    return this.http.delete("http://localhost:8080/api/DeletePlan/${planId}", { responseType: 'text' });
//   //   }


//   public deletePlan(planId:number) {
//     return this.http.delete(`http://localhost:8080/api/DeletePlan/`+planId);
//      }


//   updatePolicy(policy:UpdatePolicy):Observable<object>
//   {
//    // console.log(policy);
//        return this.http.put("http://localhost:8080/api/updatePlan",policy);
//       }

  
}