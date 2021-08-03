import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AdminRegistrationComponent } from './admin/admin-registration/admin-registration.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { EditPolicyComponent } from './admin/policy/edit-policy/edit-policy.component';
import { RouterModule } from '@angular/router';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserShowPolicyComponent } from './user/user-show-policy/user-show-policy.component';
import { ListPolicyComponent } from './admin/policy/list-policy/list-policy.component';
import { CreatePolicyComponent } from './admin/policy/create-policy/create-policy.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ViewEnrollPolicyComponent } from './user/view-enroll-policy/view-enroll-policy.component';
import { ViewAllUserComponent } from './user/view-all-user/view-all-user.component';
import { ShowUserBasedOnPolicyComponent } from './admin/show-user-based-on-policy/show-user-based-on-policy.component';
import { AuthguardServiceService } from './service/authguard-service.service';
import {routes} from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserRegistrationComponent,
    AdminRegistrationComponent,
    UserLoginComponent,
    AdminLoginComponent,
    EditPolicyComponent,
    ListPolicyComponent,
    UserShowPolicyComponent,
    CreatePolicyComponent,
    FilterPipe,
    ViewEnrollPolicyComponent,
    ViewAllUserComponent,
    ShowUserBasedOnPolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot(routes)
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    AuthguardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
