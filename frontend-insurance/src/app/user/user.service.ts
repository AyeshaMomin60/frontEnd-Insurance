import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  allCustomer: any=[];
  private baseUrl = 'http://localhost:8001/backend-insurance/api';
  
  constructor(private http: HttpClient) { } 

  addUser(user: any)
  {
    console.log(user);
    return this.http.post(`${this.baseUrl}/addUser`, user);
  }
  
 enrollment(user: any)
  {
  console.log(user);
  return this.http.post(`${this.baseUrl}/EnrollIntoPlane`,user);
   }
 
  getUserByEmail(email:any,password:any){
    console.log(email);
    console.log(password);
    return this.http.get(`${this.baseUrl}/user/login/${email}/${password}`);
    
  }

//   getUserId(email:string):Observable<any>{
//     return this.http.get(`${this.baseUrl}/viewUserbyEmail/${email}`);
// }
getUserId(email:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/userDetails/${email}/`);
}

  getUserByUserId(userId:number){
  return this.http.get(`${this.baseUrl}/UserByUserId/`+userId);
}

showAllUser(){
  return this.http.get(`${this.baseUrl}/ListOfUser`);
}
updateUser(user:any){
  return this.http.put(`${this.baseUrl}/updateUser`, user);

}

  




  // addUser(user: any)
  //   {
  //   console.log(user);
  //   return this.http.post("http://localhost:8080/api/addUser", user);
  // }
//   enrollment(user: any)
//   {
//   console.log(user);
//   return this.http.post(`http://localhost:8080/api/EnrollIntoPlane`,user);
//    }
 
//   getUserByMobile(email:any,password:any){
//     console.log(email);
//     console.log(password);
//     return this.http.get(`http://localhost:8080/api/user/login/${email}/${password}`);
    
//   }

//   getUserId(email:string):Observable<any>{
//     return this.http.get(`http://localhost:8080/api/viewUserbyEmail/${email}`);
// }

// getUserByUserId(userId:number){
//   return this.http.get(`http://localhost:8080/api/UserByUserId/`+userId);
// }

  // addCart(cart : any){
  //   return this.http.post("", cart);
  // }
}