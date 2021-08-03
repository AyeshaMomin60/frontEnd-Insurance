import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  constructor(private router: Router) { }
 
  isUserLoggedIn() {
    let user = sessionStorage.getItem('userId')
    //console.log(!(user === null))
    return !(user === null)
  }
 
  setUserId(userId:any) {
    sessionStorage.setItem('userId', userId)
    console.log(userId)
    
    return true;
 
}

getUserId(){
  let user = sessionStorage.getItem('userId')
  return user;
}
 
logOut() {
  this.router.navigate(['/home']);
  sessionStorage.removeItem('userId')
  
}
 
removeUserId() {
  sessionStorage.removeItem('userId')
 
}

setUserName(userName:any){​​​​​​​​
sessionStorage.setItem('userName',userName)
console.log(userName)
return true;
 }​​​​​​​​
getUserName() {​​​​​​​​
let user = sessionStorage.getItem('userName')
console.log(user);
return user;

 }​​​​​​​​
removeUserName() {​​​​​​​​
sessionStorage.removeItem('userName')
 }​​​​​​​​


}
