import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-rf',
  templateUrl: './login-rf.component.html',
  styleUrls: ['./login-rf.component.scss']
})
export class LoginRFComponent {

  userStorage:any;

  constructor(private fb:FormBuilder) {}
  
  LoginForm = this.fb.group({

    userName:['',[Validators.required,Validators.minLength(5)]],
    password:['',[Validators.required]]
  });

  get userName()
  {
    return this.LoginForm.get('userName');
  }
  get password()
  {
    return this.LoginForm.get('userName');
  }
  Login(){
    this.userStorage = localStorage.getItem("");
    if(this.userStorage != null) {
      alert(`Welcome ${this.userName?.value}`);
    }
  }
}
