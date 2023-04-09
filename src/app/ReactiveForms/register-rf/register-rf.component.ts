import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ForbiddenNameValidator } from 'src/app/validations/username.validators';
import { ConfirmPasswordValidator } from 'src/app/validations/confirmPassword.validators';

@Component({
  selector: 'app-register-rf',
  templateUrl: './register-rf.component.html',
  styleUrls: ['./register-rf.component.scss']
})
export class RegisterRFComponent {

  userStorage:any;

  constructor(private fb:FormBuilder) {}

  RegistrationForm = this.fb.group({

    userName:['',[Validators.required,Validators.minLength(5),ForbiddenNameValidator(/admin/)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]]
  },{validator:[ConfirmPasswordValidator]});

  get userName()
  {
    return this.RegistrationForm.get('userName');
  }
  get password(){
    return this.RegistrationForm.get('password');
  }
  get email()
  {
    return this.RegistrationForm.get('email');
  }

  submitData()
  {
    localStorage.setItem(this.userName?.value,JSON.stringify(
      this.RegistrationForm.value));
  }
}
