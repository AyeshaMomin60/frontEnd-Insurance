(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\AYMOMIN\Training software\Workspace\STS\InsuranceAngular\frontend-insurance\frontend-insurance\src\main.ts */"zUnb");


/***/ }),

/***/ "0McF":
/*!*****************************************!*\
  !*** ./src/app/authentication.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_authguard_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/authguard-service.service */ "Vwsi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthenticationGuard {
    constructor(Authguardservice, router) {
        this.Authguardservice = Authguardservice;
        this.router = router;
    }
    canActivate() {
        if (!this.Authguardservice.isUserLoggedIn()) {
            this.router.navigateByUrl("/user-login");
        }
        return this.Authguardservice.isUserLoggedIn();
    }
}
AuthenticationGuard.ɵfac = function AuthenticationGuard_Factory(t) { return new (t || AuthenticationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_authguard_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthenticationGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationGuard, factory: AuthenticationGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "4KtJ":
/*!*************************************************************************!*\
  !*** ./src/app/user/view-enroll-policy/view-enroll-policy.component.ts ***!
  \*************************************************************************/
/*! exports provided: ViewEnrollPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEnrollPolicyComponent", function() { return ViewEnrollPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "VGjC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _policy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../policy.service */ "KT0b");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_service_notifacation_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/notifacation-service.service */ "tAUr");
/* harmony import */ var src_app_service_user_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/user-authentication.service */ "fVcs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ViewEnrollPolicyComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, p_r1.value), " ");
} }
const _c0 = function () { return ["/user-list-policy"]; };
class ViewEnrollPolicyComponent {
    constructor(userService, router, policyService, http, route, notifyService, authService) {
        this.userService = userService;
        this.router = router;
        this.policyService = policyService;
        this.http = http;
        this.route = route;
        this.notifyService = notifyService;
        this.authService = authService;
    }
    ngOnInit() {
        this.userId = +this.authService.getUserId();
        console.log(this.userId);
        this.reloadData(this.userId);
    }
    reloadData(userId) {
        //console.log(this.userId);
        // this.userService.getUserByUserId(userId).subscribe(
        //   (res:any)=>{
        //   console.log(res)
        //   this.user=res;
        //   },
        //   error=>{
        //      console.log(error);
        //   });
        console.log;
        this.policyService.policyByUserId(userId).subscribe((res) => {
            this.notifyService.showSuccessWithTimeout("Policy Added Successfully", "Notification", "2000");
            console.log(res);
            this.allPolicy = res;
        }, error => {
            console.log(error);
            this.notifyService.showErrorWithTimeout("Policy Already Present", "Notification", "2000");
        });
    }
}
ViewEnrollPolicyComponent.ɵfac = function ViewEnrollPolicyComponent_Factory(t) { return new (t || ViewEnrollPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_policy_service__WEBPACK_IMPORTED_MODULE_3__["PolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_notifacation_service_service__WEBPACK_IMPORTED_MODULE_5__["NotifacationServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_authentication_service__WEBPACK_IMPORTED_MODULE_6__["UserAuthenticationService"])); };
ViewEnrollPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewEnrollPolicyComponent, selectors: [["app-view-enroll-policy"]], decls: 5, vars: 5, consts: [[4, "ngFor", "ngForOf"], [1, "btn", "btn-info", "text-uppercase", 3, "routerLink"], ["id", "myTable", 1, "table"]], template: function ViewEnrollPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewEnrollPolicyComponent_div_0_Template, 8, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n\u00A0\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.allPolicy));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"]], styles: ["table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]{\n    border: 0px solid black;\n    width:40%;\n    align-items: center;\n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctZW5yb2xsLXBvbGljeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxtQkFBbUI7O0VBRXJCIiwiZmlsZSI6InZpZXctZW5yb2xsLXBvbGljeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUsIHRoLCB0ZCAsdHJ7XG4gICAgYm9yZGVyOiAwcHggc29saWQgYmxhY2s7XG4gICAgd2lkdGg6NDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gIH0iXX0= */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, consts: [["id", "img"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#img[_ngcontent-%COMP%]{\n    height: 650 px;  \n    background-image: url(\"/assets/images/bg-image.jpg\");  \n    background-size:100%;  \n    background-size:cover;  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOzs7O0dBSUc7QUFDSDtJQUNJLGNBQWM7SUFDZCxvREFBb0Q7SUFDcEQsb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLyogI2ltZ3tcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgd2lkdGg6YXV0bztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL2JnLWltYWdlLmpwZ1wiKTtcbn0gKi9cbiNpbWd7XG4gICAgaGVpZ2h0OiA2NTAgcHg7ICBcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZy1pbWFnZS5qcGdcIik7ICBcbiAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJTsgIFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjsgIFxufVxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "H6R5":
/*!**************************************************************************!*\
  !*** ./src/app/admin/admin-registration/admin-registration.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRegistrationComponent", function() { return AdminRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AdminRegistrationComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminRegistrationComponent.ɵfac = function AdminRegistrationComponent_Factory(t) { return new (t || AdminRegistrationComponent)(); };
AdminRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminRegistrationComponent, selectors: [["app-admin-registration"]], decls: 2, vars: 0, template: function AdminRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-registration works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "IipO":
/*!*********************************************************!*\
  !*** ./src/app/user/user-login/user-login.component.ts ***!
  \*********************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "VGjC");
/* harmony import */ var src_app_service_user_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/user-authentication.service */ "fVcs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_notifacation_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/notifacation-service.service */ "tAUr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function UserLoginComponent_div_19_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserLoginComponent_div_19_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email must be in required format");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserLoginComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserLoginComponent_div_19_small_1_Template, 2, 0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserLoginComponent_div_19_small_2_Template, 2, 0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.pattern);
} }
function UserLoginComponent_small_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/user-registration"]; };
//import { exception } from 'node:console';
class UserLoginComponent {
    constructor(userService, authService, router, notifyService, formBuilder) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.notifyService = notifyService;
        this.formBuilder = formBuilder;
        this.isLoggedin = false;
        this.customer = {
            email: '',
            password: ''
        };
        this.errormsg = '';
    }
    ngOnInit() {
        localStorage.setItem('SeesionUser', this.authService.getUserId());
        this.userForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
        });
    }
    get email() {
        return this.userForm.get('email');
    }
    get password() {
        return this.userForm.get('password');
    }
    getUserByEmail() {
        let user = {
            email: this.customer.email,
            password: this.customer.password
        };
        this.userService.getUserByEmail(user.email, user.password).subscribe(response => {
            console.log(response);
            this.customerUser = response;
            //this.router.navigate(['/user-list-policy']);
            if (this.customerUser.password == user.password) {
                this.userService.getUserId(user.email).subscribe((user) => {
                    this.userInfo = user;
                    if (this.userInfo.role == "User") {
                        console.log(this.userInfo);
                        this.notifyService.showSuccessWithTimeout("User Logged in Successfully", "Notification", "2000");
                        this.successMsg = " login successfully";
                        this.authService.removeUserId();
                        this.authService.setUserId(this.userInfo.userId);
                        this.authService.removeUserName();
                        this.authService.setUserName(this.userInfo.name);
                        //alert("Login Successfull");
                        this.router.navigate(['/user-list-policy']);
                    }
                    else if (this.userInfo.role == "Admin") {
                        console.log(this.userInfo);
                        this.notifyService.showSuccessWithTimeout("Admin Logged in Successfully", "Notification", "2000");
                        this.authService.removeUserId();
                        this.authService.setUserId(this.userInfo.userId);
                        this.authService.removeUserName();
                        this.authService.setUserName(this.userInfo.name);
                        this.router.navigate(["/list-policy"]);
                    }
                    else if (this.userInfo.role == "SUPER-ADMIN") {
                        this.notifyService.showSuccessWithTimeout("Super Admin Logged in Successfully", "Notification", "2000");
                        console.log(this.userInfo);
                        this.authService.removeUserId();
                        this.authService.setUserId(this.userInfo.userId);
                        this.authService.removeUserName();
                        this.authService.setUserName(this.userInfo.name);
                        this.router.navigate(["/view-all-user"]);
                    }
                    else {
                        this.notifyService.showErrorWithTimeout("Login Failed", "Notification", 2000);
                        this.errormsg = "contact administrator";
                        //alert("Invalid Details")
                    }
                });
            }
            //  else {
            //   this.notifyService.showErrorWithTimeout("Login Failed","Notification",2000);
            //   this.errormsg = "contact administrator";
            //   //alert("Invalid Details")
            //  }
        }, err => {
            if (err.status == 404) {
                this.errormsg = "invalid Email or Password-";
            }
        });
    }
}
UserLoginComponent.ɵfac = function UserLoginComponent_Factory(t) { return new (t || UserLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_user_authentication_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_notifacation_service_service__WEBPACK_IMPORTED_MODULE_5__["NotifacationServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
UserLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserLoginComponent, selectors: [["app-user-login"]], decls: 42, vars: 13, consts: [[1, "d-flex", "align-items-center", "min-vh-100", "py-3", "py-md-0"], [1, "container"], [1, "card", "login-card"], [1, "row", "no-gutters"], [1, "col-md-7"], [1, "card-body"], [1, "brand-wrapper"], [1, "login-card-description"], [3, "submit"], ["custForm", "ngForm"], [1, "form-group"], ["for", "email", 1, "sr-only"], ["type", "email", "pattern", "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$", "name", "email", "id", "email", "placeholder", "Email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [4, "ngIf"], [1, "form-group", "mb-4"], ["for", "password", 1, "sr-only"], ["type", "password", "pattern", "[a-zA-Z]{3,}", "name", "password", "id", "password", "placeholder", "*******", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["name", "login", "id", "login", "type", "submit", "value", "Login", 1, "btn", "btn-block", "login-btn", "mb-4", 3, "disabled"], [1, "small", "text-danger"], ["href", "#!", 1, "forgot-password-link"], [1, "login-card-footer-text"], [1, "text-reset", 3, "routerLink"], [1, "login-card-footer-nav"], ["href", "#!"], [1, "text-danger"]], template: function UserLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Welcome to Insurance Appliocation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sign into your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function UserLoginComponent_Template_form_submit_12_listener() { return ctx.getUserByEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserLoginComponent_Template_input_ngModelChange_17_listener($event) { return ctx.customer.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, UserLoginComponent_div_19_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserLoginComponent_Template_input_ngModelChange_23_listener($event) { return ctx.customer.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, UserLoginComponent_small_25_Template, 2, 0, "small", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Register here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "nav", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Terms of use.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", _r3.invalid && _r3.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.successMsg, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.errormsg, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%] {\n    font-family: \"Karla\", sans-serif;\n    background-color: #d0d0ce;\n    min-height: 100vh; }\n  \n  .brand-wrapper[_ngcontent-%COMP%] {\n    margin-bottom: 19px; }\n  \n  .brand-wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n      height: 37px; }\n  \n  .login-card[_ngcontent-%COMP%] {\n    border: 0;\n    border-radius: 27.5px;\n    box-shadow: 0 10px 30px 0 rgba(172, 168, 168, 0.43);\n    overflow: hidden; }\n  \n  .login-card-img[_ngcontent-%COMP%] {\n      border-radius: 0;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      object-fit: cover; }\n  \n  .login-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n      padding: 85px 60px 60px; }\n  \n  @media (max-width: 422px) {\n        .login-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n          padding: 35px 24px; } }\n  \n  .login-card-description[_ngcontent-%COMP%] {\n      font-size: 25px;\n      color: #000;\n      font-weight: normal;\n      margin-bottom: 23px; }\n  \n  .login-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n      max-width: 326px; }\n  \n  .login-card[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n      border: 1px solid #d5dae2;\n      padding: 15px 25px;\n      margin-bottom: 20px;\n      min-height: 45px;\n      font-size: 13px;\n      line-height: 15;\n      font-weight: normal; }\n  \n  .login-card[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n        color: #919aa3; }\n  \n  .login-card[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n      padding: 13px 20px 12px;\n      background-color: #000;\n      border-radius: 4px;\n      font-size: 17px;\n      font-weight: bold;\n      line-height: 20px;\n      color: #fff;\n      margin-bottom: 24px; }\n  \n  .login-card[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:hover {\n        border: 1px solid #000;\n        background-color: transparent;\n        color: #000; }\n  \n  .login-card[_ngcontent-%COMP%]   .forgot-password-link[_ngcontent-%COMP%] {\n      font-size: 14px;\n      color: #919aa3;\n      margin-bottom: 12px; }\n  \n  .login-card-footer-text[_ngcontent-%COMP%] {\n      font-size: 16px;\n      color: #0d2366;\n      margin-bottom: 60px; }\n  \n  @media (max-width: 767px) {\n        .login-card-footer-text[_ngcontent-%COMP%] {\n          margin-bottom: 24px; } }\n  \n  .login-card-footer-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      font-size: 14px;\n      color: #919aa3; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdDQUFnQztJQUNoQyx5QkFBeUI7SUFDekIsaUJBQWlCLEVBQUU7O0VBRXJCO0lBQ0UsbUJBQW1CLEVBQUU7O0VBQ3JCO01BQ0UsWUFBWSxFQUFFOztFQUVsQjtJQUNFLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsbURBQW1EO0lBQ25ELGdCQUFnQixFQUFFOztFQUNsQjtNQUNFLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsV0FBVztNQUNYLFlBQVk7TUFFVCxpQkFBaUIsRUFBRTs7RUFDeEI7TUFDRSx1QkFBdUIsRUFBRTs7RUFDekI7UUFDRTtVQUNFLGtCQUFrQixFQUFFLEVBQUU7O0VBQzVCO01BQ0UsZUFBZTtNQUNmLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIsbUJBQW1CLEVBQUU7O0VBQ3ZCO01BQ0UsZ0JBQWdCLEVBQUU7O0VBQ3BCO01BQ0UseUJBQXlCO01BQ3pCLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixlQUFlO01BQ2YsbUJBQW1CLEVBQUU7O0VBU3JCO1FBQ0UsY0FBYyxFQUFFOztFQUNwQjtNQUNFLHVCQUF1QjtNQUN2QixzQkFBc0I7TUFDdEIsa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsaUJBQWlCO01BQ2pCLFdBQVc7TUFDWCxtQkFBbUIsRUFBRTs7RUFDckI7UUFDRSxzQkFBc0I7UUFDdEIsNkJBQTZCO1FBQzdCLFdBQVcsRUFBRTs7RUFDakI7TUFDRSxlQUFlO01BQ2YsY0FBYztNQUNkLG1CQUFtQixFQUFFOztFQUN2QjtNQUNFLGVBQWU7TUFDZixjQUFjO01BQ2QsbUJBQW1CLEVBQUU7O0VBQ3JCO1FBQ0U7VUFDRSxtQkFBbUIsRUFBRSxFQUFFOztFQUM3QjtNQUNFLGVBQWU7TUFDZixjQUFjLEVBQUUiLCJmaWxlIjoidXNlci1sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFwiS2FybGFcIiwgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBkMGNlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoOyB9XG4gIFxuICAuYnJhbmQtd3JhcHBlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTlweDsgfVxuICAgIC5icmFuZC13cmFwcGVyIC5sb2dvIHtcbiAgICAgIGhlaWdodDogMzdweDsgfVxuICBcbiAgLmxvZ2luLWNhcmQge1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAyNy41cHg7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDE3MiwgMTY4LCAxNjgsIDAuNDMpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgICAubG9naW4tY2FyZC1pbWcge1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjsgfVxuICAgIC5sb2dpbi1jYXJkIC5jYXJkLWJvZHkge1xuICAgICAgcGFkZGluZzogODVweCA2MHB4IDYwcHg7IH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjJweCkge1xuICAgICAgICAubG9naW4tY2FyZCAuY2FyZC1ib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAzNXB4IDI0cHg7IH0gfVxuICAgIC5sb2dpbi1jYXJkLWRlc2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIzcHg7IH1cbiAgICAubG9naW4tY2FyZCBmb3JtIHtcbiAgICAgIG1heC13aWR0aDogMzI2cHg7IH1cbiAgICAubG9naW4tY2FyZCAuZm9ybS1jb250cm9sIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNWRhZTI7XG4gICAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgbWluLWhlaWdodDogNDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cbiAgICAgIC5sb2dpbi1jYXJkIC5mb3JtLWNvbnRyb2w6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogIzkxOWFhMzsgfVxuICAgICAgLmxvZ2luLWNhcmQgLmZvcm0tY29udHJvbDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjOTE5YWEzOyB9XG4gICAgICAubG9naW4tY2FyZCAuZm9ybS1jb250cm9sOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjOTE5YWEzOyB9XG4gICAgICAubG9naW4tY2FyZCAuZm9ybS1jb250cm9sOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogIzkxOWFhMzsgfVxuICAgICAgLmxvZ2luLWNhcmQgLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogIzkxOWFhMzsgfVxuICAgIC5sb2dpbi1jYXJkIC5sb2dpbi1idG4ge1xuICAgICAgcGFkZGluZzogMTNweCAyMHB4IDEycHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsgfVxuICAgICAgLmxvZ2luLWNhcmQgLmxvZ2luLWJ0bjpob3ZlciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogIzAwMDsgfVxuICAgIC5sb2dpbi1jYXJkIC5mb3Jnb3QtcGFzc3dvcmQtbGluayB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzkxOWFhMztcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7IH1cbiAgICAubG9naW4tY2FyZC1mb290ZXItdGV4dCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogIzBkMjM2NjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7IH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAubG9naW4tY2FyZC1mb290ZXItdGV4dCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsgfSB9XG4gICAgLmxvZ2luLWNhcmQtZm9vdGVyLW5hdiBhIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjOTE5YWEzOyB9Il19 */"] });


/***/ }),

/***/ "Iyt7":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-login/admin-login.component.ts ***!
  \************************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_user_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/user-authentication.service */ "fVcs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AdminLoginComponent_small_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile Number is mandatory ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminLoginComponent_small_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Put a valid Mobile Mumber ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminLoginComponent_small_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is mandetory ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminLoginComponent_small_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password should be 4 digits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminLoginComponent_small_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password should be numeric ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AdminLoginComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.admin = {
            mobile: '',
            password: ''
        };
        this.errorMsg = "";
    }
    ngOnInit() {
        this.errorMsg = "";
    }
    onSubmit(adminForm) {
        if (adminForm.mobile === "9876543210" && adminForm.password === "1234") {
            this.authService.removeUserId();
            this.authService.setUserId(1);
            this.authService.removeUserName();
            this.authService.setUserName("Admin");
            this.router.navigate(["list-policy"]);
            console.log("Login succesfull");
        }
        else {
            this.errorMsg = "Invalid Employee Id/ password";
            console.log("Login not succesfull");
        }
    }
}
AdminLoginComponent.ɵfac = function AdminLoginComponent_Factory(t) { return new (t || AdminLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_authentication_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthenticationService"])); };
AdminLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminLoginComponent, selectors: [["app-admin-login"]], decls: 42, vars: 9, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-6", "login-section-wrapper"], [1, "brand-wrapper"], [1, "login-wrapper", "my-auto"], [1, "login-title"], [3, "ngSubmit"], ["adminForm", "ngForm"], [1, "text-danger", "small"], [1, "form-group"], ["for", "mobile"], ["type", "mobile", "name", "mobile", "id", "mobile", "placeholder", "000-000-000-0", "required", "", "pattern", "[7-9]{1}[0-9]{9}", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mobile", "ngModel"], ["class", "small text-danger", 4, "ngIf"], [1, "form-group", "mb-4"], ["for", "password"], ["type", "password", "name", "password", "id", "password", "placeholder", "4 digits passcode", "required", "", "minlength", "3", "pattern", "[0-9]{4}", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["name", "login", "id", "login", "type", "submit", "value", "Login", 1, "btn", "btn-block", "login-btn", 3, "disabled"], ["href", "#!", 1, "forgot-password-link"], [1, "login-card-footer-text"], ["routerLink", "admin-registeration", 1, "text-reset"], [1, "login-card-footer-nav"], ["href", "#!"], [1, "col-sm-6", "px-0", "d-none", "d-sm-block"], [1, "small", "text-danger"]], template: function AdminLoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome to Admin Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminLoginComponent_Template_form_ngSubmit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx.onSubmit(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminLoginComponent_Template_input_ngModelChange_17_listener($event) { return ctx.admin.mobile = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AdminLoginComponent_small_19_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AdminLoginComponent_small_20_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminLoginComponent_Template_input_ngModelChange_24_listener($event) { return ctx.admin.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AdminLoginComponent_small_26_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AdminLoginComponent_small_27_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AdminLoginComponent_small_28_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Register here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nav", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Terms of use.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.admin.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.dirty && (_r1.errors == null ? null : _r1.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.dirty && (_r1.errors == null ? null : _r1.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.admin.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.dirty && (_r4.errors == null ? null : _r4.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%] {\n    font-family: \"Karla\", sans-serif;\n    background-color: #fff;\n    min-height: 100vh; }\n    \n    .brand-wrapper[_ngcontent-%COMP%] {\n    padding-top: 7px;\n    padding-bottom: 8px; }\n    \n    .brand-wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n      height: 25px; }\n    \n    .login-section-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    padding: 68px 100px;\n    background-color: #fff; }\n    \n    @media (max-width: 991px) {\n      .login-section-wrapper[_ngcontent-%COMP%] {\n        padding-left: 50px;\n        padding-right: 50px; } }\n    \n    @media (max-width: 575px) {\n      .login-section-wrapper[_ngcontent-%COMP%] {\n        padding-top: 20px;\n        padding-bottom: 20px;\n        min-height: 100vh; } }\n    \n    .login-wrapper[_ngcontent-%COMP%] {\n    width: 300px;\n    max-width: 100%;\n    padding-top: 24px;\n    padding-bottom: 24px; }\n    \n    @media (max-width: 575px) {\n      .login-wrapper[_ngcontent-%COMP%] {\n        width: 100%; } }\n    \n    .login-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n      font-size: 14px;\n      font-weight: bold;\n      color: #b0adad; }\n    \n    .login-wrapper[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n      border: none;\n      border-bottom: 1px solid #e7e7e7;\n      border-radius: 0;\n      padding: 9px 5px;\n      min-height: 40px;\n      font-size: 18px;\n      font-weight: normal; }\n    \n    .login-wrapper[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n        color: #b0adad; }\n    \n    .login-wrapper[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n      padding: 13px 20px;\n      background-color: #fdbb28;\n      border-radius: 0;\n      font-size: 20px;\n      font-weight: bold;\n      color: #fff;\n      margin-bottom: 14px; }\n    \n    .login-wrapper[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:hover {\n        border: 1px solid #fdbb28;\n        background-color: #fff;\n        color: #fdbb28; }\n    \n    .login-wrapper[_ngcontent-%COMP%]   a.forgot-password-link[_ngcontent-%COMP%] {\n      color: #080808;\n      font-size: 14px;\n      text-decoration: underline;\n      display: inline-block;\n      margin-bottom: 54px; }\n    \n    @media (max-width: 575px) {\n        .login-wrapper[_ngcontent-%COMP%]   a.forgot-password-link[_ngcontent-%COMP%] {\n          margin-bottom: 16px; } }\n    \n    .login-wrapper-footer-text[_ngcontent-%COMP%] {\n      font-size: 16px;\n      color: #000;\n      margin-bottom: 0; }\n    \n    .login-title[_ngcontent-%COMP%] {\n    font-size: 30px;\n    color: #000;\n    font-weight: bold;\n    margin-bottom: 25px; }\n    \n    .login-img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100vh;\n    object-fit: cover;\n    object-position: left; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLGlCQUFpQixFQUFFOztJQUVuQjtJQUNBLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBRTs7SUFDckI7TUFDRSxZQUFZLEVBQUU7O0lBRWhCO0lBRUEsYUFBYTtJQUdMLHNCQUFzQjtJQUM5QixtQkFBbUI7SUFDbkIsc0JBQXNCLEVBQUU7O0lBQ3hCO01BQ0U7UUFDRSxrQkFBa0I7UUFDbEIsbUJBQW1CLEVBQUUsRUFBRTs7SUFDM0I7TUFDRTtRQUNFLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsaUJBQWlCLEVBQUUsRUFBRTs7SUFFekI7SUFDQSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0IsRUFBRTs7SUFDdEI7TUFDRTtRQUNFLFdBQVcsRUFBRSxFQUFFOztJQUNuQjtNQUNFLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsY0FBYyxFQUFFOztJQUNsQjtNQUNFLFlBQVk7TUFDWixnQ0FBZ0M7TUFDaEMsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLG1CQUFtQixFQUFFOztJQVNyQjtRQUNFLGNBQWMsRUFBRTs7SUFDcEI7TUFDRSxrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLFdBQVc7TUFDWCxtQkFBbUIsRUFBRTs7SUFDckI7UUFDRSx5QkFBeUI7UUFDekIsc0JBQXNCO1FBQ3RCLGNBQWMsRUFBRTs7SUFDcEI7TUFDRSxjQUFjO01BQ2QsZUFBZTtNQUNmLDBCQUEwQjtNQUMxQixxQkFBcUI7TUFDckIsbUJBQW1CLEVBQUU7O0lBQ3JCO1FBQ0U7VUFDRSxtQkFBbUIsRUFBRSxFQUFFOztJQUM3QjtNQUNFLGVBQWU7TUFDZixXQUFXO01BQ1gsZ0JBQWdCLEVBQUU7O0lBRXBCO0lBQ0EsZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUJBQW1CLEVBQUU7O0lBRXJCO0lBQ0EsV0FBVztJQUNYLGFBQWE7SUFFVixpQkFBaUI7SUFFakIscUJBQXFCLEVBQUUiLCJmaWxlIjoiYWRtaW4tbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBcIkthcmxhXCIsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgfVxuICAgIFxuICAgIC5icmFuZC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7IH1cbiAgICAuYnJhbmQtd3JhcHBlciAubG9nbyB7XG4gICAgICBoZWlnaHQ6IDI1cHg7IH1cbiAgICBcbiAgICAubG9naW4tc2VjdGlvbi13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDY4cHggMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgLmxvZ2luLXNlY3Rpb24td3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDsgfSB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgICAubG9naW4tc2VjdGlvbi13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDsgfSB9XG4gICAgXG4gICAgLmxvZ2luLXdyYXBwZXIge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDI0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7IH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICAgIC5sb2dpbi13cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7IH0gfVxuICAgIC5sb2dpbi13cmFwcGVyIGxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICNiMGFkYWQ7IH1cbiAgICAubG9naW4td3JhcHBlciAuZm9ybS1jb250cm9sIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlN2U3O1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIHBhZGRpbmc6IDlweCA1cHg7XG4gICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxuICAgICAgLmxvZ2luLXdyYXBwZXIgLmZvcm0tY29udHJvbDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjYjBhZGFkOyB9XG4gICAgICAubG9naW4td3JhcHBlciAuZm9ybS1jb250cm9sOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICNiMGFkYWQ7IH1cbiAgICAgIC5sb2dpbi13cmFwcGVyIC5mb3JtLWNvbnRyb2w6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICNiMGFkYWQ7IH1cbiAgICAgIC5sb2dpbi13cmFwcGVyIC5mb3JtLWNvbnRyb2w6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjYjBhZGFkOyB9XG4gICAgICAubG9naW4td3JhcHBlciAuZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjYjBhZGFkOyB9XG4gICAgLmxvZ2luLXdyYXBwZXIgLmxvZ2luLWJ0biB7XG4gICAgICBwYWRkaW5nOiAxM3B4IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiYjI4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNHB4OyB9XG4gICAgICAubG9naW4td3JhcHBlciAubG9naW4tYnRuOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZkYmIyODtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgY29sb3I6ICNmZGJiMjg7IH1cbiAgICAubG9naW4td3JhcHBlciBhLmZvcmdvdC1wYXNzd29yZC1saW5rIHtcbiAgICAgIGNvbG9yOiAjMDgwODA4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1NHB4OyB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICAgICAgLmxvZ2luLXdyYXBwZXIgYS5mb3Jnb3QtcGFzc3dvcmQtbGluayB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDsgfSB9XG4gICAgLmxvZ2luLXdyYXBwZXItZm9vdGVyLXRleHQge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwOyB9XG4gICAgXG4gICAgLmxvZ2luLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxuICAgIFxuICAgIC5sb2dpbi1pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgLW8tb2JqZWN0LXBvc2l0aW9uOiBsZWZ0O1xuICAgICAgIG9iamVjdC1wb3NpdGlvbjogbGVmdDsgfSJdfQ== */"] });


/***/ }),

/***/ "K7id":
/*!**************************************!*\
  !*** ./src/app/Pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FilterPipe {
    /**
     * Transform
     *
     * @param {any[]} items
     * @param {string} searchText
     * @returns {any[]}
     */
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();
        return items.filter(it => {
            return it.toLocaleLowerCase().includes(searchText);
        });
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "appFilter", type: FilterPipe, pure: true });


/***/ }),

/***/ "KPVg":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/show-user-based-on-policy/show-user-based-on-policy.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ShowUserBasedOnPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowUserBasedOnPolicyComponent", function() { return ShowUserBasedOnPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/user/user.service */ "VGjC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _policy_policy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../policy/policy.service */ "OhRI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_service_user_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/user-authentication.service */ "fVcs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ShowUserBasedOnPolicyComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "user ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0", user_r1.userId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", user_r1.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", user_r1.mobile, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0", user_r1.role, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", user_r1.status, "");
} }
const _c0 = function () { return ["/list-policy"]; };
class ShowUserBasedOnPolicyComponent {
    constructor(userService, router, policyService, http, route, authService) {
        this.userService = userService;
        this.router = router;
        this.policyService = policyService;
        this.http = http;
        this.route = route;
        this.authService = authService;
    }
    ngOnInit() {
        this.planId = +this.route.snapshot.paramMap.get('planId');
        console.log(this.planId);
        this.policyService.findUserByPolicy(this.planId).subscribe((res) => {
            console.log(res);
            this.AllUserDetails = res;
        }, error => {
            console.log(error);
        });
    }
}
ShowUserBasedOnPolicyComponent.ɵfac = function ShowUserBasedOnPolicyComponent_Factory(t) { return new (t || ShowUserBasedOnPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_policy_policy_service__WEBPACK_IMPORTED_MODULE_3__["PolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_authentication_service__WEBPACK_IMPORTED_MODULE_5__["UserAuthenticationService"])); };
ShowUserBasedOnPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowUserBasedOnPolicyComponent, selectors: [["app-show-user-based-on-policy"]], decls: 8, vars: 3, consts: [[1, "mx-5", "mt-4"], [1, "col-xs-12", "col-sm-6", "col-md-12", "form-outline"], [1, "btn", "btn-info", "text-uppercase", 3, "routerLink"], ["class", "container", 4, "ngFor", "ngForOf"], [1, "container"], [1, "table", "table-dark"]], template: function ShowUserBasedOnPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "User Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ShowUserBasedOnPolicyComponent_div_7_Template, 24, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.AllUserDetails);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93LXVzZXItYmFzZWQtb24tcG9saWN5LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "KT0b":
/*!****************************************!*\
  !*** ./src/app/user/policy.service.ts ***!
  \****************************************/
/*! exports provided: PolicyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyService", function() { return PolicyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class PolicyService {
    constructor(http) {
        this.http = http;
        this.allPolicy = [];
        this.baseUrl = 'http://localhost:8001/backend-insurance/api';
    }
    showAllPlans() {
        return this.http.get(`${this.baseUrl}/showAllPlans`);
    }
    getPolicyList(name) {
        return this.http.get(`${this.baseUrl}/viewPlanByName/${name}`);
    }
    getPlanByPlanId(planId) {
        return this.http.get(`${this.baseUrl}/viewPlanById/${planId}`);
    }
    getPolicy(planId) {
        console.log(planId);
        return this.http.get(`${this.baseUrl}/viewPlanById/` + planId);
    }
    policyByUserId(userId) {
        return this.http.get(`${this.baseUrl}/UserTakenPlan/${userId}`);
    }
}
PolicyService.ɵfac = function PolicyService_Factory(t) { return new (t || PolicyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PolicyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PolicyService, factory: PolicyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OhRI":
/*!************************************************!*\
  !*** ./src/app/admin/policy/policy.service.ts ***!
  \************************************************/
/*! exports provided: PolicyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyService", function() { return PolicyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class PolicyService {
    constructor(http) {
        this.http = http;
        this.allPolicy = [];
        this.baseUrl = 'http://localhost:8001/backend-insurance/api';
    }
    showAllPlans() {
        return this.http.get(`${this.baseUrl}/showAllPlans`);
    }
    getPolicy(planId) {
        console.log(planId);
        return this.http.get(`${this.baseUrl}/viewPlanById/` + planId);
    }
    createPolicy(policy) {
        console.log(policy);
        return this.http.post(`${this.baseUrl}/CreatePlan`, policy);
    }
    // public deletePlan(planId:number) {
    //   return this.http.put(`${this.baseUrl}/DeletePlan/`+planId);
    //    }
    deletePlan(id) {
        return this.http.put(`${this.baseUrl}/DeletePlan/${id}`, { responseType: 'text' });
    }
    updatePolicy(policy) {
        // console.log(policy);
        return this.http.put(`${this.baseUrl}/updatePlan`, policy);
    }
    findUserByPolicy(planId) {
        return this.http.get(`${this.baseUrl}/ShowPlanTakenByUser/` + planId);
    }
}
PolicyService.ɵfac = function PolicyService_Factory(t) { return new (t || PolicyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PolicyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PolicyService, factory: PolicyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'insurance';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["id", "img"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["#img[_ngcontent-%COMP%]{\r\n        height: 1000 px;  \r\n\t    background-image: url(\"/assets/images/1.jpg\");  \r\n\t    background-size:100%;  \r\n\t      \r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7O0tBRUU7UUFDRyxlQUFlO0tBQ2xCLDZDQUE2QztLQUM3QyxvQkFBb0I7O0lBRXJCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogI2ltZ3tcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIHdpZHRoOmF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL2JnLWltYWdlLmpwZ1wiKTtcclxufSAqL1xyXG5cclxuICAgICAjaW1ne1xyXG4gICAgICAgIGhlaWdodDogMTAwMCBweDsgIFxyXG5cdCAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy8xLmpwZ1wiKTsgIFxyXG5cdCAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJTsgIFxyXG5cdCAgICAgIFxyXG4gICAgfSJdfQ== */"] });


/***/ }),

/***/ "VGjC":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class UserService {
    constructor(http) {
        this.http = http;
        this.allCustomer = [];
        this.baseUrl = 'http://localhost:8001/backend-insurance/api';
    }
    addUser(user) {
        console.log(user);
        return this.http.post(`${this.baseUrl}/addUser`, user);
    }
    enrollment(user) {
        console.log(user);
        return this.http.post(`${this.baseUrl}/EnrollIntoPlane`, user);
    }
    getUserByEmail(email, password) {
        console.log(email);
        console.log(password);
        return this.http.get(`${this.baseUrl}/user/login/${email}/${password}`);
    }
    //   getUserId(email:string):Observable<any>{
    //     return this.http.get(`${this.baseUrl}/viewUserbyEmail/${email}`);
    // }
    getUserId(email) {
        return this.http.get(`${this.baseUrl}/userDetails/${email}/`);
    }
    getUserByUserId(userId) {
        return this.http.get(`${this.baseUrl}/UserByUserId/` + userId);
    }
    showAllUser() {
        return this.http.get(`${this.baseUrl}/ListOfUser`);
    }
    updateUser(user) {
        return this.http.put(`${this.baseUrl}/updateUser`, user);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Vwsi":
/*!******************************************************!*\
  !*** ./src/app/service/authguard-service.service.ts ***!
  \******************************************************/
/*! exports provided: AuthguardServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardServiceService", function() { return AuthguardServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AuthguardServiceService {
    constructor() {
    }
    // gettoken(){  
    //    return !!localStorage.getItem("SeesionUser");  
    //    }  
    isUserLoggedIn() {
        let user = sessionStorage.getItem('userId');
        console.log(!(user === null));
        return !(user === null);
    }
}
AuthguardServiceService.ɵfac = function AuthguardServiceService_Factory(t) { return new (t || AuthguardServiceService)(); };
AuthguardServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthguardServiceService, factory: AuthguardServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "XxJk":
/*!*******************************************************************!*\
  !*** ./src/app/admin/policy/list-policy/list-policy.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPolicyComponent", function() { return ListPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _policy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../policy.service */ "OhRI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user/user.service */ "VGjC");
/* harmony import */ var src_app_service_user_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/user-authentication.service */ "fVcs");
/* harmony import */ var src_app_service_notifacation_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/notifacation-service.service */ "tAUr");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");










const _c0 = function (a1) { return ["/edit-policy", a1]; };
const _c1 = function (a1) { return ["/show-user-details", a1]; };
function ListPolicyComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Plan Id:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cost: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Details:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Deductible: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListPolicyComponent_div_5_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const policy_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deletePolicy(policy_r1.planId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "View User Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListPolicyComponent_div_5_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const policy_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.addPolicy(policy_r1.planId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Enroll into Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const policy_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policy_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policy_r1.planId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 7, policy_r1.cost, "IND"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policy_r1.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 10, policy_r1.deductible, "IND"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, policy_r1.planId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, policy_r1.planId));
} }
const _c2 = function () { return ["/create-policy"]; };
class ListPolicyComponent {
    constructor(policyService, router, userService, route, authService, notifyService, http) {
        this.policyService = policyService;
        this.router = router;
        this.userService = userService;
        this.route = route;
        this.authService = authService;
        this.notifyService = notifyService;
        this.http = http;
        this.allPolicy = [];
        this.userInfo = {
            plan: {
                planId: 0
            },
            user: {
                userId: 0
            }
        };
    }
    ngOnInit() {
        this.reloadData();
    }
    deletePolicy(planId) {
        console.log();
        this.policyService.deletePlan(planId)
            .subscribe(data => {
            console.log(data);
            this.notifyService.showSuccessWithTimeout("Policy Deleted Successfully", "Notification", "2000");
            this.reloadData();
            //this.allPolicy;
        }, error => {
            console.log(error);
            this.notifyService.showErrorWithTimeout("Policy is not Deleted", "Notification", "2000");
        }
        // error => console.log(error));
        );
    }
    addPolicy(planId) {
        this.userInfo.user.userId = +this.authService.getUserId();
        this.userInfo.plan.planId = planId;
        console.log(this.userInfo.user.userId);
        console.log(this.userInfo.plan.planId);
        console.log(this.userInfo);
        this.userService.enrollment(this.userInfo).subscribe((repsonse) => {
            console.log(repsonse);
            this.notifyService.showSuccessWithTimeout("Policy Enroll Successfully", "Notification", "2000");
            this.allUser = repsonse;
            //alert("Policy Enroll Successfully");
        }, error => {
            console.log(error);
            this.notifyService.showErrorWithTimeout("User Already taken Policy", "Notification", "2000");
        });
    }
    reloadData() {
        // this.policies = this.policyService.getPolicyList();
        this.policyService.showAllPlans().subscribe(res => this.allPolicy = res);
    }
}
ListPolicyComponent.ɵfac = function ListPolicyComponent_Factory(t) { return new (t || ListPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_policy_service__WEBPACK_IMPORTED_MODULE_1__["PolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_authentication_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_notifacation_service_service__WEBPACK_IMPORTED_MODULE_5__["NotifacationServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
ListPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListPolicyComponent, selectors: [["app-list-policy"]], decls: 12, vars: 7, consts: [[1, "mx-5", "mt-4"], [1, "col-xs-12", "col-sm-6", "col-md-12", "form-outline"], ["type", "text", "name", "search", "autocomplete", "off", "placeholder", "Search Policy here", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "container", 4, "ngFor", "ngForOf"], [1, "btn", "btn-info", "text-uppercase", 3, "routerLink"], [1, "container"], [1, "table", "table-dark"], [1, "btn", "btn-info", "text-uppercase", 3, "click"]], template: function ListPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListPolicyComponent_Template_input_ngModelChange_2_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListPolicyComponent_div_5_Template, 36, 17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Create Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, ctx.allPolicy, ctx.searchText));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"]], styles: ["table[_ngcontent-%COMP%]{\n  border: 3px solid black;\n    width:48%;\n    align-items: center;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n    border: 3px solid black;\n    width:40%;\n    align-items: center;\n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtcG9saWN5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7SUFDckIsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsbUJBQW1COztFQUVyQiIsImZpbGUiOiJsaXN0LXBvbGljeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOjQ4JTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG50aCwgdGQge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOjQwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuICB9Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _admin_admin_registration_admin_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin-registration/admin-registration.component */ "H6R5");
/* harmony import */ var _user_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user-registration/user-registration.component */ "nAVN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin-login/admin-login.component */ "Iyt7");
/* harmony import */ var _admin_policy_edit_policy_edit_policy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/policy/edit-policy/edit-policy.component */ "fcuE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/user-login/user-login.component */ "IipO");
/* harmony import */ var _user_user_show_policy_user_show_policy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/user-show-policy/user-show-policy.component */ "cQED");
/* harmony import */ var _admin_policy_list_policy_list_policy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/policy/list-policy/list-policy.component */ "XxJk");
/* harmony import */ var _admin_policy_create_policy_create_policy_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/policy/create-policy/create-policy.component */ "iVPf");
/* harmony import */ var _Pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Pipes/filter.pipe */ "K7id");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _user_view_enroll_policy_view_enroll_policy_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/view-enroll-policy/view-enroll-policy.component */ "4KtJ");
/* harmony import */ var _user_view_all_user_view_all_user_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/view-all-user/view-all-user.component */ "fsS8");
/* harmony import */ var _admin_show_user_based_on_policy_show_user_based_on_policy_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/show-user-based-on-policy/show-user-based-on-policy.component */ "KPVg");
/* harmony import */ var _service_authguard_service_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/authguard-service.service */ "Vwsi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "fXoL");

























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ providers: [
        _service_authguard_service_service__WEBPACK_IMPORTED_MODULE_21__["AuthguardServiceService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_17__["Ng2SearchPipeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["routes"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _user_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_6__["UserRegistrationComponent"],
        _admin_admin_registration_admin_registration_component__WEBPACK_IMPORTED_MODULE_5__["AdminRegistrationComponent"],
        _user_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_12__["UserLoginComponent"],
        _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_9__["AdminLoginComponent"],
        _admin_policy_edit_policy_edit_policy_component__WEBPACK_IMPORTED_MODULE_10__["EditPolicyComponent"],
        _admin_policy_list_policy_list_policy_component__WEBPACK_IMPORTED_MODULE_14__["ListPolicyComponent"],
        _user_user_show_policy_user_show_policy_component__WEBPACK_IMPORTED_MODULE_13__["UserShowPolicyComponent"],
        _admin_policy_create_policy_create_policy_component__WEBPACK_IMPORTED_MODULE_15__["CreatePolicyComponent"],
        _Pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_16__["FilterPipe"],
        _user_view_enroll_policy_view_enroll_policy_component__WEBPACK_IMPORTED_MODULE_18__["ViewEnrollPolicyComponent"],
        _user_view_all_user_view_all_user_component__WEBPACK_IMPORTED_MODULE_19__["ViewAllUserComponent"],
        _admin_show_user_based_on_policy_show_user_based_on_policy_component__WEBPACK_IMPORTED_MODULE_20__["ShowUserBasedOnPolicyComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_17__["Ng2SearchPipeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]] }); })();


/***/ }),

/***/ "cQED":
/*!*********************************************************************!*\
  !*** ./src/app/user/user-show-policy/user-show-policy.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserShowPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserShowPolicyComponent", function() { return UserShowPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "VGjC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _policy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../policy.service */ "KT0b");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_service_notifacation_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/notifacation-service.service */ "tAUr");
/* harmony import */ var src_app_service_user_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/user-authentication.service */ "fVcs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");










function UserShowPolicyComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Plan Id:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cost: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Details:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Deductible: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserShowPolicyComponent_div_8_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const policy_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.addPolicy(policy_r1.planId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Enroll into Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const policy_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policy_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policy_r1.planId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 5, policy_r1.cost, "IND"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](policy_r1.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 8, policy_r1.deductible, "IND"), "");
} }
const _c0 = function () { return ["/view-enroll-policy"]; };
//import { NotifacationServiceService } from 'src/app/service/notifacation-service.service';
class UserShowPolicyComponent {
    constructor(userService, router, policyService, http, route, notifyService, authService) {
        this.userService = userService;
        this.router = router;
        this.policyService = policyService;
        this.http = http;
        this.route = route;
        this.notifyService = notifyService;
        this.authService = authService;
        this.allPolicy = [];
        this.searchText = '';
        this.userInfo = {
            plan: {
                planId: 0
            },
            user: {
                userId: 0
            }
        };
    }
    ngOnInit() {
        this.reloadData();
        //this.planId=this.route.snapshot.params["planId"];
        //console.log(this.planId);
    }
    addPolicy(planId) {
        this.userInfo.user.userId = +this.authService.getUserId();
        this.userInfo.plan.planId = planId;
        console.log(this.userInfo.user.userId);
        console.log(this.userInfo.plan.planId);
        console.log(this.userInfo);
        this.userService.enrollment(this.userInfo).subscribe((repsonse) => {
            console.log(repsonse);
            this.notifyService.showSuccessWithTimeout("Policy Enroll Successfully", "Notification", "2000");
            this.allUser = repsonse;
            //alert("Policy Enroll Successfully");
        }, error => {
            console.log(error);
            this.notifyService.showErrorWithTimeout("User Already taken Policy", "Notification", "2000");
        });
    }
    reloadData() {
        this.policyService.showAllPlans().subscribe(res => this.allPolicy = res, error => {
            console.log(error);
        });
    }
}
UserShowPolicyComponent.ɵfac = function UserShowPolicyComponent_Factory(t) { return new (t || UserShowPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_policy_service__WEBPACK_IMPORTED_MODULE_3__["PolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_notifacation_service_service__WEBPACK_IMPORTED_MODULE_5__["NotifacationServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_authentication_service__WEBPACK_IMPORTED_MODULE_6__["UserAuthenticationService"])); };
UserShowPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserShowPolicyComponent, selectors: [["app-user-show-policy"]], decls: 12, vars: 7, consts: [[1, "mx-5", "mt-4"], [1, "col-xs-12", "col-sm-6", "col-md-12", "form-outline"], ["type", "text", "name", "search", "autocomplete", "off", "placeholder", "Search Policy here", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-info", "text-uppercase", 3, "routerLink"], ["class", "container", 4, "ngFor", "ngForOf"], [1, "container"], ["id", "myTable", 1, "table", "table-dark"], [1, "btn", "btn-info", "text-uppercase", 3, "click"]], template: function UserShowPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserShowPolicyComponent_Template_input_ngModelChange_2_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "View Enroll Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserShowPolicyComponent_div_8_Template, 27, 11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 3, ctx.allPolicy, ctx.searchText));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"]], styles: ["table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n    border: 3px solid black;\n    width:40%;\n    align-items: center;\n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItc2hvdy1wb2xpY3kuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxtQkFBbUI7O0VBRXJCIiwiZmlsZSI6InVzZXItc2hvdy1wb2xpY3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG50YWJsZSwgdGgsIHRkIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDo0MCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "fVcs":
/*!********************************************************!*\
  !*** ./src/app/service/user-authentication.service.ts ***!
  \********************************************************/
/*! exports provided: UserAuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthenticationService", function() { return UserAuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class UserAuthenticationService {
    constructor(router) {
        this.router = router;
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('userId');
        //console.log(!(user === null))
        return !(user === null);
    }
    setUserId(userId) {
        sessionStorage.setItem('userId', userId);
        console.log(userId);
        return true;
    }
    getUserId() {
        let user = sessionStorage.getItem('userId');
        return user;
    }
    logOut() {
        this.router.navigate(['/home']);
        sessionStorage.removeItem('userId');
    }
    removeUserId() {
        sessionStorage.removeItem('userId');
    }
    setUserName(userName) {
        sessionStorage.setItem('userName', userName);
        console.log(userName);
        return true;
    }
    getUserName() {
        let user = sessionStorage.getItem('userName');
        console.log(user);
        return user;
    }
    removeUserName() {
        sessionStorage.removeItem('userName');
    }
}
UserAuthenticationService.ɵfac = function UserAuthenticationService_Factory(t) { return new (t || UserAuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
UserAuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserAuthenticationService, factory: UserAuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fcuE":
/*!*******************************************************************!*\
  !*** ./src/app/admin/policy/edit-policy/edit-policy.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPolicyComponent", function() { return EditPolicyComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_notifacation_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/notifacation-service.service */ "tAUr");
/* harmony import */ var _policy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../policy.service */ "OhRI");






const _c0 = function () { return ["/list-policy"]; };
class EditPolicyComponent {
    constructor(route, activatedRoute, router, formBuilder, notifyService, policyService) {
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.notifyService = notifyService;
        this.policyService = policyService;
    }
    ngOnInit() {
        // console.log(+this.route.snapshot.params['planId']);
        this.planId = +this.activatedRoute.snapshot.paramMap.get('planId');
        console.log(this.planId);
        this.policyService.getPolicy(+this.route.snapshot.params['planId']).subscribe((policyInfo) => {
            this.policy = policyInfo;
            console.log(policyInfo);
            this.policyForm.get('name').setValue(this.policy.name);
            this.policyForm.get('cost').setValue(this.policy.cost);
            this.policyForm.get('deductible').setValue(this.policy.deductible);
            this.policyForm.get('details').setValue(this.policy.details);
        });
        this.policyForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)]],
            cost: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            deductible: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            details: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
    }
    get policyName() {
        return this.policyForm.get('policyName');
    }
    get cost() {
        return this.policyForm.get('cost');
    }
    get deductible() {
        return this.policyForm.get('deductible');
    }
    get details() {
        return this.policyForm.get('details');
    }
    update() {
        console.log(this.policyForm.value);
        this.policyForm.value.planId = this.route.snapshot.params['planId'];
        this.policyService.updatePolicy(this.policyForm.value).subscribe(response => {
            this.notifyService.showSuccessWithTimeout("Policy Updated Successfully", "Notification", "2000");
            console.log('Success!', response),
                //alert("Updated Successfully!")
                this.router.navigate(['/list-policy']);
        }, error => {
            console.log(error);
            this.notifyService.showErrorWithTimeout("Policy is not Updated", "Notification", "2000");
        });
    }
}
EditPolicyComponent.ɵfac = function EditPolicyComponent_Factory(t) { return new (t || EditPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_notifacation_service_service__WEBPACK_IMPORTED_MODULE_3__["NotifacationServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_policy_service__WEBPACK_IMPORTED_MODULE_4__["PolicyService"])); };
EditPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditPolicyComponent, selectors: [["app-edit-policy"]], decls: 38, vars: 3, consts: [[1, "container"], [1, "row"], [1, "col-lg-7", "col-xl-7", "mx-auto"], [1, "col-lg-6", "col-xl-6", "mx-auto"], [1, "card-body"], [3, "formGroup", "submit"], [1, "form-label-group"], ["for", "Name"], ["type", "text", "id", "name", "name", "name", "formControlName", "name", 1, "form-control"], ["for", "cost"], ["type", "text", "id", "cost", "name", "mobile", "formControlName", "cost", "placeholder", "cost", "required", "", 1, "form-control"], ["for", "deductible"], ["type", "text", "id", "deductible", "name", "deductible", "formControlName", "deductible", "placeholder", "deductible amount", 1, "form-control"], ["type", "submit", 1, "btn", "btn-info", "text-uppercase"], [1, "d-block", "text-center", "mt-2", "small", 3, "routerLink"], [1, "my-4"]], template: function EditPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Update Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function EditPolicyComponent_Template_form_submit_12_listener() { return ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Policy Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Deductable Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "list-policy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "hr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.policyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXBvbGljeS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "fsS8":
/*!***************************************************************!*\
  !*** ./src/app/user/view-all-user/view-all-user.component.ts ***!
  \***************************************************************/
/*! exports provided: ViewAllUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAllUserComponent", function() { return ViewAllUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "VGjC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_service_notifacation_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/notifacation-service.service */ "tAUr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ViewAllUserComponent_tr_20_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", role_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r4);
} }
function ViewAllUserComponent_tr_20_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", status_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](status_r5);
} }
function ViewAllUserComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewAllUserComponent_tr_20_Template_select_ngModelChange_10_listener($event) { const user_r1 = ctx.$implicit; return user_r1.role = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ViewAllUserComponent_tr_20_option_11_Template, 2, 2, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewAllUserComponent_tr_20_Template_select_ngModelChange_13_listener($event) { const user_r1 = ctx.$implicit; return user_r1.status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ViewAllUserComponent_tr_20_option_14_Template, 2, 2, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewAllUserComponent_tr_20_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const user_r1 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.update(user_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1.mobile, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", user_r1.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.roleList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", user_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.statusList);
} }
class ViewAllUserComponent {
    constructor(userService, router, http, route, notifyService, formBuilder) {
        this.userService = userService;
        this.router = router;
        this.http = http;
        this.route = route;
        this.notifyService = notifyService;
        this.formBuilder = formBuilder;
        this.allUser = [];
        this.roleList = ["User", "Admin", "Super-Admin"];
        this.statusList = ["Active", "InActive"];
    }
    ngOnInit() {
        this.reloadData();
    }
    get status() {
        console.log(this.userForm.get('status'));
        return this.userForm.get('status');
    }
    get role() {
        console.log(this.userForm.get('role'));
        return this.userForm.get('role');
    }
    update(user) {
        console.log(user);
        this.userService.updateUser(user).subscribe(response => {
            this.notifyService.showSuccessWithTimeout("Updated Successfully", "Notification", "2000");
            console.log('Successfully Updated!', response),
                // alert("Updated Successfully!")
                this.router.navigate(['/view-all-user']);
        }, error => {
            console.log(error),
                this.notifyService.showSuccessWithTimeout("Data is not Updated", "Notification", "2000");
            alert("data is not updated");
        });
        //return this.isSuperAdmin;
    }
    reloadData() {
        this.userService.showAllUser().subscribe(res => this.allUser = res, error => {
            console.log(error);
        });
    }
}
ViewAllUserComponent.ɵfac = function ViewAllUserComponent_Factory(t) { return new (t || ViewAllUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_notifacation_service_service__WEBPACK_IMPORTED_MODULE_4__["NotifacationServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"])); };
ViewAllUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewAllUserComponent, selectors: [["app-view-all-user"]], decls: 36, vars: 1, consts: [[1, "mx-5", "mt-4"], ["routerLink", "/list-policy", 1, "btn", "btn-info", "text-uppercase"], ["id", "myTable", 1, "table"], ["class", "container", 4, "ngFor", "ngForOf"], [1, "container"], [1, "form-control", "wp-70", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-info", "text-uppercase", 3, "click"], [3, "ngValue"]], template: function ViewAllUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "list-policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "User Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ViewAllUserComponent_tr_20_Template, 18, 8, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allUser);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"]], styles: ["table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]  {\r\n    border: 1px solid black;\r\n    border-collapse: collapse;\r\n    padding: 5px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctYWxsLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsWUFBWTtFQUNkIiwiZmlsZSI6InZpZXctYWxsLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLCB0aCAsIHRkICB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "iVPf":
/*!***********************************************************************!*\
  !*** ./src/app/admin/policy/create-policy/create-policy.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreatePolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePolicyComponent", function() { return CreatePolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _policy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../policy.service */ "OhRI");
/* harmony import */ var src_app_service_user_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/user-authentication.service */ "fVcs");
/* harmony import */ var src_app_service_notifacation_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/notifacation-service.service */ "tAUr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






const _c0 = function () { return ["/list-policy"]; };
class CreatePolicyComponent {
    constructor(UserService, userAuth, notifyService, router) {
        this.UserService = UserService;
        this.userAuth = userAuth;
        this.notifyService = notifyService;
        this.router = router;
        this.policy = {
            planId: 0,
            name: '',
            cost: 0,
            deductible: 0,
            details: ''
        };
    }
    ngOnInit() {
        this.successMsg = '';
    }
    createPolicy() {
        let policy = {
            planId: this.policy.planId,
            name: this.policy.name,
            cost: this.policy.cost,
            deductible: this.policy.deductible,
            details: this.policy.details
        };
        this.UserService.createPolicy(policy).subscribe((repsonse) => {
            console.log(repsonse);
            this.notifyService.showSuccessWithTimeout("New Policy Created Successfully", "Notification", "2000");
            //alert("Policy Created Successfully!!");
            this.allUser = repsonse;
            this.successMsg = " Policy Created Successfully. ";
            this.router.navigate(["/list-policy"]);
        }, error => {
            console.log(error);
            this.notifyService.showErrorWithTimeout("Policy is not Created", "Notification", "2000");
        });
    }
}
CreatePolicyComponent.ɵfac = function CreatePolicyComponent_Factory(t) { return new (t || CreatePolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_policy_service__WEBPACK_IMPORTED_MODULE_1__["PolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_authentication_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_notifacation_service_service__WEBPACK_IMPORTED_MODULE_3__["NotifacationServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
CreatePolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatePolicyComponent, selectors: [["app-create-policy"]], decls: 50, vars: 8, consts: [[1, "container"], [1, "row"], [1, "col-lg-7", "col-xl-7", "mx-auto"], [1, "col-lg-6", "col-xl-6", "mx-auto"], [1, "card", "card-signin", "flex-row", "my-5"], [1, "card-body"], [1, "form-signin", 3, "submit"], ["regForm", "ngForm"], [1, "form-label-group"], ["for", "Name"], ["type", "text", "id", "name", "name", "name", "placeholder", "name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Name", "ngModel"], ["for", "cost"], ["type", "text", "id", "mobile", "name", "mobile", "placeholder", "cost", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["cost", "ngModel"], ["for", "details"], ["type", "text", "id", "details", "name", "details", "placeholder", "details", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["details", "ngModel"], ["for", "deductible"], ["type", "text", "id", "deductible", "name", "deductible", "placeholder", "deductible amount", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["deductible", "ngModel"], ["type", "submit", 1, "btn", "btn-info", "text-uppercase", 3, "disabled"], [1, "d-block", "text-center", "mt-2", "small", 3, "routerLink"], [1, "my-4"]], template: function CreatePolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CreatePolicyComponent_Template_form_submit_11_listener() { return ctx.createPolicy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatePolicyComponent_Template_input_ngModelChange_18_listener($event) { return ctx.policy.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatePolicyComponent_Template_input_ngModelChange_25_listener($event) { return ctx.policy.cost = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatePolicyComponent_Template_input_ngModelChange_32_listener($event) { return ctx.policy.details = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "deductible ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatePolicyComponent_Template_input_ngModelChange_39_listener($event) { return ctx.policy.deductible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "list-policy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "hr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.policy.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.policy.cost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.policy.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.policy.deductible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.successMsg, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcG9saWN5LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_user_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/user-authentication.service */ "fVcs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NavbarComponent_ul_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "User Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_ul_10_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_ul_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_ul_10_li_1_Template, 3, 0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ul_10_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.authService.getUserName() == "Ayesha");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx_r1.userName, "");
} }
class NavbarComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isLoggedIn = false;
        this.isSuperAdmin = false;
        this.isLoggedIn = false;
        this.userName = "";
    }
    ngOnInit() {
        this.userName = this.authService.getUserName();
        if (this.authService.getUserName() == "Ayesha") {
            this.isSuperAdmin = true;
        }
        console.log(this.userName);
    }
    logout() {
        this.router.navigate(['/user-login']);
        this.authService.removeUserId();
        this.authService.removeUserName();
        this.isLoggedIn = false;
    }
    superAdmin() {
        if (this.authService.getUserName() == 'Ayesha') {
            this.isSuperAdmin = true;
        }
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_authentication_service__WEBPACK_IMPORTED_MODULE_1__["UserAuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 12, vars: 2, consts: [[1, "h1"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-primary"], [1, "navbar-brand"], ["class", "navbar-nav ml-auto", 4, "ngIf"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "active"], ["routerLink", "user-login", 1, "nav-link", "btn", "btn-primary"], ["class", "nav-item active", 4, "ngIf"], [1, "nav-link", "btn", "btn-primary"], [1, "nav-link", "btn", "btn-primary", 3, "click"], ["routerLink", "view-all-user", 1, "nav-link", "btn", "btn-primary"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Welcome to Insurance Policy Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Insurance Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavbarComponent_ul_9_Template, 4, 0, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavbarComponent_ul_10_Template, 8, 2, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "body");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.isUserLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isUserLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".nav-link[_ngcontent-%COMP%] {\n    cursor: pointer;\n    border-radius: 8px;\n    color: white;\n  }\n  .h1[_ngcontent-%COMP%]{\n      align-items: center;\n      color:crimson;\n\n  }\n  body[_ngcontent-%COMP%] {\n      background-color:darkturquoise;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7RUFDQTtNQUNJLG1CQUFtQjtNQUNuQixhQUFhOztFQUVqQjtFQUNBO01BQ0ksOEJBQThCO0lBQ2hDIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saW5rIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuaDF7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY29sb3I6Y3JpbXNvbjtcblxuICB9XG4gIGJvZHkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjpkYXJrdHVycXVvaXNlO1xuICAgIH1cblxuICAgICJdfQ== */"] });


/***/ }),

/***/ "nAVN":
/*!***********************************************************************!*\
  !*** ./src/app/user/user-registration/user-registration.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function() { return UserRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "VGjC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function UserRegistrationComponent_small_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name should not contain number and length should be greater then 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_small_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter valid Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_div_39_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_div_39_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be in required format");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserRegistrationComponent_div_39_small_1_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserRegistrationComponent_div_39_small_2_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors == null ? null : _r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors == null ? null : _r5.errors.pattern);
} }
function UserRegistrationComponent_div_47_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_div_47_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be in required format");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserRegistrationComponent_div_47_small_1_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserRegistrationComponent_div_47_small_2_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors == null ? null : _r7.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors == null ? null : _r7.errors.pattern);
} }
const _c0 = function () { return ["/user-login"]; };
class UserRegistrationComponent {
    constructor(UserService, router) {
        this.UserService = UserService;
        this.router = router;
        //roleList: any = ['User', 'Admin']
        this.user = {
            userId: 90,
            name: '',
            mobile: '',
            email: '',
            password: '',
            status: '',
            role: ''
        };
    }
    ngOnInit() {
        this.successMsg = '';
    }
    addUser() {
        let user = {
            userId: this.user.userId,
            name: this.user.name,
            mobile: this.user.mobile,
            password: this.user.password,
            email: this.user.email
        };
        this.UserService.addUser(user).subscribe((repsonse) => {
            console.log(repsonse);
            this.successMsg = this.successMsg + " You have successfully registered with login email" + user.email + "password:" + user.password;
            this.allUser = repsonse;
            this.router.navigate(['/user-login']);
        });
    }
}
UserRegistrationComponent.ɵfac = function UserRegistrationComponent_Factory(t) { return new (t || UserRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UserRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserRegistrationComponent, selectors: [["app-user-registration"]], decls: 54, vars: 14, consts: [[1, "container"], [1, "row"], [1, "col-lg-7", "col-xl-7", "mx-auto"], [1, "col-lg-6", "col-xl-6", "mx-auto"], [1, "card", "card-signin", "flex-row", "my-5"], [1, "card-body"], [1, "card-title", "text-center"], [1, "form-signin", 3, "submit"], ["regForm", "ngForm"], [1, "form-label-group"], ["for", "Name"], ["type", "text", "id", "name", "name", "name", "pattern", "[a-zA-Z][a-zA-Z ]{3,}", "placeholder", "Username", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Name", "ngModel"], ["class", "small text-danger", 4, "ngIf"], ["for", "mobile"], ["type", "text", "id", "mobile", "name", "mobile", "placeholder", "mobile Number", "pattern", "[7-9]{1}[0-9]{9}", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mobileNumber", "ngModel"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "pattern", "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$", "placeholder", "Email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [4, "ngIf"], ["for", "inputConfirmPassword"], ["type", "password", "id", "password", "pattern", "[a-zA-Z]{3,}", "name", "password", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block", "text-uppercase", 3, "disabled"], [1, "d-block", "text-center", "mt-2", "small", 3, "routerLink"], [1, "my-4"], [1, "small", "text-danger"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]], template: function UserRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Insurance Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function UserRegistrationComponent_Template_form_submit_14_listener() { return ctx.addUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_21_listener($event) { return ctx.user.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UserRegistrationComponent_small_23_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_29_listener($event) { return ctx.user.mobile = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, UserRegistrationComponent_small_31_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_37_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, UserRegistrationComponent_div_39_Template, 3, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_45_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, UserRegistrationComponent_div_47_Template, 3, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "hr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r5.invalid && _r5.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && _r5.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.invalid && _r7.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.successMsg, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["[_ngcontent-%COMP%]:root {\n    --input-padding-x: 1.5rem;\n    --input-padding-y: .75rem;\n  }\n  \n  body[_ngcontent-%COMP%] {\n    background:white;\n    \n    \n  }\n  \n  .card-signin[_ngcontent-%COMP%] {\n    border: 0;\n    border-radius: 1rem;\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\n    overflow: hidden;\n  }\n  \n  .card-signin[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n    font-weight: 300;\n    font-size: 1.5rem;\n  }\n  \n  .card-signin[_ngcontent-%COMP%]   .card-img-left[_ngcontent-%COMP%] {\n    width: 45%;\n    \n    background: scroll center url('https://thumbs.dreamstime.com/b/online-shopping-website-laptop-screen-female-hands-typing-51465695.jpg');\n    background-size: cover;\n  }\n  \n  .card-signin[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n  \n  .form-signin[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n  .form-signin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 80%;\n    border-radius: 5rem;\n    letter-spacing: .1rem;\n    font-weight: bold;\n    padding: 1rem;\n    transition: all 0.2s;\n  }\n  \n  .form-label-group[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 1rem;\n  }\n  \n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    height: auto;\n    border-radius: 2rem;\n  }\n  \n  .form-label-group[_ngcontent-%COMP%] > input[_ngcontent-%COMP%], .form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] {\n    padding: var(--input-padding-y) var(--input-padding-x);\n  }\n  \n  .form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    width: 100%;\n    margin-bottom: 0;\n    \n    line-height: 1.5;\n    color: #495057;\n    border: 1px solid transparent;\n    border-radius: .25rem;\n    transition: all .1s ease-in-out;\n  }\n  \n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n    color: transparent;\n  }\n  \n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) {\n    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\n    padding-bottom: calc(var(--input-padding-y) / 3);\n  }\n  \n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) ~ label[_ngcontent-%COMP%] {\n    padding-top: calc(var(--input-padding-y) / 3);\n    padding-bottom: calc(var(--input-padding-y) / 3);\n    font-size: 12px;\n    color: #777;\n  }\n  \n  .btn-google[_ngcontent-%COMP%] {\n    color: white;\n    background-color: #ea4335;\n  }\n  \n  .btn-facebook[_ngcontent-%COMP%] {\n    color: white;\n    background-color: #3b5998;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsNkRBQTZEO0lBQzdELDZJQUE2STtFQUMvSTs7RUFFQTtJQUNFLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsOENBQThDO0lBQzlDLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsVUFBVTtJQUNWLCtEQUErRDtJQUMvRCx1SUFBdUk7SUFDdkksc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjs7RUFFQTs7SUFFRSxzREFBc0Q7RUFDeEQ7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLCtCQUErQjtFQUNqQzs7RUFrQkE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSw0RUFBNEU7SUFDNUUsZ0RBQWdEO0VBQ2xEOztFQUVBO0lBQ0UsNkNBQTZDO0lBQzdDLGdEQUFnRDtJQUNoRCxlQUFlO0lBQ2YsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLFlBQVk7SUFDWix5QkFBeUI7RUFDM0IiLCJmaWxlIjoidXNlci1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBcbjpyb290IHtcbiAgICAtLWlucHV0LXBhZGRpbmcteDogMS41cmVtO1xuICAgIC0taW5wdXQtcGFkZGluZy15OiAuNzVyZW07XG4gIH1cbiAgXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQ6d2hpdGU7XG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA2MkU2LCAjMzNBRUZGKTsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9wLmtpbmRwbmcuY29tL3BpY2Mvcy8xOTAtMTkwMzk2M190cmFuc3BhcmVudC10ZWNobm9sb2d5LWJhY2tncm91bmQtcG5nLWdlbmVyYWwtc3VwcGx5LXBuZy1kb3dubG9hZC5wbmcnKTsgICovXG4gIH1cbiAgXG4gIC5jYXJkLXNpZ25pbiB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAuY2FyZC1zaWduaW4gLmNhcmQtdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICBcbiAgLmNhcmQtc2lnbmluIC5jYXJkLWltZy1sZWZ0IHtcbiAgICB3aWR0aDogNDUlO1xuICAgIC8qIExpbmsgdG8geW91ciBiYWNrZ3JvdW5kIGltYWdlIHVzaW5nIGluIHRoZSBwcm9wZXJ0eSBiZWxvdyEgKi9cbiAgICBiYWNrZ3JvdW5kOiBzY3JvbGwgY2VudGVyIHVybCgnaHR0cHM6Ly90aHVtYnMuZHJlYW1zdGltZS5jb20vYi9vbmxpbmUtc2hvcHBpbmctd2Vic2l0ZS1sYXB0b3Atc2NyZWVuLWZlbWFsZS1oYW5kcy10eXBpbmctNTE0NjU2OTUuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuICBcbiAgLmNhcmQtc2lnbmluIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gIH1cbiAgXG4gIC5mb3JtLXNpZ25pbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5mb3JtLXNpZ25pbiAuYnRuIHtcbiAgICBmb250LXNpemU6IDgwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB9XG4gIFxuICAuZm9ybS1sYWJlbC1ncm91cCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgfVxuICBcbiAgLmZvcm0tbGFiZWwtZ3JvdXA+aW5wdXQsXG4gIC5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIHZhcigtLWlucHV0LXBhZGRpbmcteCk7XG4gIH1cbiAgXG4gIC5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xuICB9XG4gIFxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIFxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIFxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIFxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xuICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgKyB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpICogKDIgLyAzKSk7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xuICB9XG4gIFxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKX5sYWJlbCB7XG4gICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM3Nzc7XG4gIH1cbiAgXG4gIC5idG4tZ29vZ2xlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhNDMzNTtcbiAgfVxuICBcbiAgLmJ0bi1mYWNlYm9vayB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG4gIH1cbiJdfQ== */"] });


/***/ }),

/***/ "tAUr":
/*!*********************************************************!*\
  !*** ./src/app/service/notifacation-service.service.ts ***!
  \*********************************************************/
/*! exports provided: NotifacationServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifacationServiceService", function() { return NotifacationServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");


class NotifacationServiceService {
    constructor(toastr) {
        this.toastr = toastr;
    }
    showSuccessWithTimeout(message, title, timespan) {
        this.toastr.success(message, title, {
            timeOut: timespan
        });
    }
    showErrorWithTimeout(message, title, timespan) {
        this.toastr.error(message, title, {
            timeOut: timespan
        });
    }
}
NotifacationServiceService.ɵfac = function NotifacationServiceService_Factory(t) { return new (t || NotifacationServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
NotifacationServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotifacationServiceService, factory: NotifacationServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/admin-login/admin-login.component */ "Iyt7");
/* harmony import */ var _admin_admin_registration_admin_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin-registration/admin-registration.component */ "H6R5");
/* harmony import */ var _admin_policy_list_policy_list_policy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/policy/list-policy/list-policy.component */ "XxJk");
/* harmony import */ var _admin_policy_edit_policy_edit_policy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/policy/edit-policy/edit-policy.component */ "fcuE");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _user_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user-login/user-login.component */ "IipO");
/* harmony import */ var _user_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user-registration/user-registration.component */ "nAVN");
/* harmony import */ var _user_user_show_policy_user_show_policy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user-show-policy/user-show-policy.component */ "cQED");
/* harmony import */ var _admin_policy_create_policy_create_policy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/policy/create-policy/create-policy.component */ "iVPf");
/* harmony import */ var _user_view_enroll_policy_view_enroll_policy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/view-enroll-policy/view-enroll-policy.component */ "4KtJ");
/* harmony import */ var _user_view_all_user_view_all_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/view-all-user/view-all-user.component */ "fsS8");
/* harmony import */ var _admin_show_user_based_on_policy_show_user_based_on_policy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/show-user-based-on-policy/show-user-based-on-policy.component */ "KPVg");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _authentication_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./authentication.guard */ "0McF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");























const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'user-login', component: _user_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_6__["UserLoginComponent"] },
    { path: 'user-registration', component: _user_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_7__["UserRegistrationComponent"] },
    { path: 'admin-login', component: _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_1__["AdminLoginComponent"] },
    { path: 'admin-registeration', component: _admin_admin_registration_admin_registration_component__WEBPACK_IMPORTED_MODULE_2__["AdminRegistrationComponent"] },
    { path: 'list-policy', component: _admin_policy_list_policy_list_policy_component__WEBPACK_IMPORTED_MODULE_3__["ListPolicyComponent"], canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_19__["AuthenticationGuard"]] },
    { path: 'edit-policy/:planId', component: _admin_policy_edit_policy_edit_policy_component__WEBPACK_IMPORTED_MODULE_4__["EditPolicyComponent"], canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_19__["AuthenticationGuard"]] },
    { path: 'user-list-policy', component: _user_user_show_policy_user_show_policy_component__WEBPACK_IMPORTED_MODULE_8__["UserShowPolicyComponent"], canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_19__["AuthenticationGuard"]] },
    { path: 'create-policy', component: _admin_policy_create_policy_create_policy_component__WEBPACK_IMPORTED_MODULE_9__["CreatePolicyComponent"], canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_19__["AuthenticationGuard"]] },
    { path: 'view-enroll-policy', component: _user_view_enroll_policy_view_enroll_policy_component__WEBPACK_IMPORTED_MODULE_10__["ViewEnrollPolicyComponent"], canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_19__["AuthenticationGuard"]] },
    { path: 'view-all-user', component: _user_view_all_user_view_all_user_component__WEBPACK_IMPORTED_MODULE_11__["ViewAllUserComponent"], canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_19__["AuthenticationGuard"]] },
    { path: 'show-user-details/:planId', component: _admin_show_user_based_on_policy_show_user_based_on_policy_component__WEBPACK_IMPORTED_MODULE_12__["ShowUserBasedOnPolicyComponent"], canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_19__["AuthenticationGuard"]] },
    { path: 'show-Details', component: _admin_show_user_based_on_policy_show_user_based_on_policy_component__WEBPACK_IMPORTED_MODULE_12__["ShowUserBasedOnPolicyComponent"], canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_19__["AuthenticationGuard"]] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes),
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_16__["Ng2SearchPipeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_18__["ToastrModule"].forRoot()
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_16__["Ng2SearchPipeModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_18__["ToastrModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map