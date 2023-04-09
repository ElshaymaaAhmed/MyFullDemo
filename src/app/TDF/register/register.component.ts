import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { User } from 'src/app/SharedClasses/User';
import { EnrollService } from 'src/app/services/enroll.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  SocialMedia=["Facebook","Twitter","Google"];
  userModel = new User('','','','','');
 
  constructor(private enrollService:EnrollService) {}

  submitData(){

    this.enrollService.enroll(this.userModel).subscribe({
      next:data=>console.log(data),
      error:error=>console.log(error)
    });

    localStorage.setItem(this.userModel.username,JSON.stringify(this.userModel));
  }
}
