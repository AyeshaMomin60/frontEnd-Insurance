import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminRegistrationComponent } from './admin/admin-registration/admin-registration.component';
import { ListPolicyComponent } from './admin/policy/list-policy/list-policy.component';
import { EditPolicyComponent } from './admin/policy/edit-policy/edit-policy.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { UserShowPolicyComponent } from './user/user-show-policy/user-show-policy.component';
import { CreatePolicyComponent } from './admin/policy/create-policy/create-policy.component';
import { ViewEnrollPolicyComponent } from './user/view-enroll-policy/view-enroll-policy.component';
import { ViewAllUserComponent } from './user/view-all-user/view-all-user.component';
import { ShowUserBasedOnPolicyComponent } from './admin/show-user-based-on-policy/show-user-based-on-policy.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthenticationGuard } from './authentication.guard';




export const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'user-registration',component:UserRegistrationComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'admin-registeration',component:AdminRegistrationComponent},
  {path:'list-policy',component:ListPolicyComponent,canActivate:[AuthenticationGuard]},
  {path:'edit-policy/:planId',component:EditPolicyComponent,canActivate:[AuthenticationGuard]},
  {path:'user-list-policy',component:UserShowPolicyComponent,canActivate:[AuthenticationGuard]},
  {path:'create-policy',component:CreatePolicyComponent,canActivate:[AuthenticationGuard]},
  {path:'view-enroll-policy',component:ViewEnrollPolicyComponent,canActivate:[AuthenticationGuard]},
  {path:'view-all-user',component:ViewAllUserComponent,canActivate:[AuthenticationGuard]},
  {path:'show-user-details/:planId',component:ShowUserBasedOnPolicyComponent,canActivate:[AuthenticationGuard]},
  {path:'show-Details',component:ShowUserBasedOnPolicyComponent,canActivate:[AuthenticationGuard]}


];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    Ng2SearchPipeModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  
  ],
 exports: [RouterModule]
  
})
export class AppRoutingModule { }
