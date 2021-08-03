import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotifacationServiceService {


  constructor(private toastr: ToastrService) { }
  showSuccessWithTimeout(message, title, timespan){
    this.toastr.success(message, title ,{
      timeOut : timespan
    })
  }
 
  showErrorWithTimeout(message, title, timespan){
    this.toastr.error(message, title ,{
      timeOut : timespan
    })
  }
}

