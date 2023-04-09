import { Component } from '@angular/core';
import { User } from 'src/app/SharedClasses/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userModel = new User('','','','','');
  userStorage:any;

  Login(){
    this.userStorage = localStorage.getItem(this.userModel.username);
    if(this.userStorage != null) {
      alert(`Welcome ${this.userModel.username}`);
    }
  }
}
