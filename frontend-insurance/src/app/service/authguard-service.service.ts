import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {
  constructor() {  
  }  
  // gettoken(){  
  //    return !!localStorage.getItem("SeesionUser");  
  //    }  

     isUserLoggedIn() {
      let user = sessionStorage.getItem('userId')
      console.log(!(user === null))
      return !(user === null)
    }
  
}
