import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PolicyAuthenticationService {

  constructor(private router: Router) { }

  getUserId(){
    let policy = sessionStorage.getItem('policyId')
    return policy;
  }
setUserName(name:string){​​​​​​​​
  sessionStorage.setItem('policyName',name);
  console.log(name);
  return true;
   }​​​​​​​​
  getPolicyName() {​​​​​​​​
  let user = sessionStorage.getItem('name')
  console.log(user);
  return user;
  
   }​​​​​​​​
}

