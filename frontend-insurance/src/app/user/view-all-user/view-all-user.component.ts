import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifacationServiceService } from 'src/app/service/notifacation-service.service';

import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-all-user',
  templateUrl: './view-all-user.component.html',
  styleUrls: ['./view-all-user.component.css']
})
export class ViewAllUserComponent implements OnInit {


  allUser: any = [];
  userId: number;
  user: User;
  userForm: FormGroup;
  userInfo: User;
  roleList: any = ["User", "Admin", "Super-Admin"];
  statusList: any = ["Active", "InActive"];
  isSuperAdmin:boolean;

  constructor(private userService: UserService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    private notifyService:NotifacationServiceService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.reloadData();

  }


  get status() {
    console.log(this.userForm.get('status'))
    return this.userForm.get('status')
  }

  get role() {
    console.log(this.userForm.get('role'))
    return this.userForm.get('role')
  }

  update(user: User){
    console.log(user);

    this.userService.updateUser(user).subscribe( 
      response=> {
     

        this.notifyService.showSuccessWithTimeout("Updated Successfully","Notification","2000");
        console.log('Successfully Updated!', response),
         // alert("Updated Successfully!")
        this.router.navigate(['/view-all-user']);
      },
      error => {
        console.log(error),
        this.notifyService.showSuccessWithTimeout("Data is not Updated","Notification","2000");
          alert("data is not updated")
      }
    )
//return this.isSuperAdmin;

  }

  reloadData() {
    this.userService.showAllUser().subscribe(
      res =>
        this.allUser = res,
      error => {
        console.log(error);
      });


  }
}
