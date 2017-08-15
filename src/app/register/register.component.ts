import { Component, OnInit } from '@angular/core';
import { UserService } from '../services';

import { CreatedUser } from '../customClasses';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public createdUser: CreatedUser = new CreatedUser();
  public registrationError: boolean = false;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {}

  registerUser(createdUser: CreatedUser): void {
    this.userService.registration(createdUser).then((response) => {
      this.registrationError = false;
      console.log('response', response);
      // todo: go to next page
    }, (error) => {
      this.registrationError = true;
    });
  }

}
