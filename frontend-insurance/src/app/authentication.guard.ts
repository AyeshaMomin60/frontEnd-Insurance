import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from './service/authguard-service.service';

 
@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private Authguardservice: AuthguardServiceService,
     private router: Router) {}  
canActivate(): boolean {  
    if (!this.Authguardservice.isUserLoggedIn()) {  
        this.router.navigateByUrl("/user-login");  
    }  
    return this.Authguardservice.isUserLoggedIn();  
}  
  
}