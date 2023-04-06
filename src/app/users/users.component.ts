import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  constructor(private userService:UsersService) {}

  UsersList:any = [];
  errorMessage:any;

  ngOnInit(): void 
  {
    this.userService.GetAllUsers().subscribe({
      next:data=>this.UsersList = data,
      error:error=>this.errorMessage = error
    });
  }
}
