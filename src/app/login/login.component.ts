import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';

import { LoginUser } from '../customClasses';

import { LoginService } from '../services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: LoginUser = new LoginUser();
  public loginError: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {}

  public login(user: LoginUser): void {
    this.loginService.login(user).then((data) => {
      this.loginError = false;
      console.log('data', data);
    }, (reject) => {
      this.loginError = true;
    });
  }

  public submitButtonDisabled(user: LoginUser): boolean {
    // validation can be added here
    return !user.us_log_email || !user.us_log_pass;
  }

  public goToRegistration() {
    this._goTo('/registration');
  }

  ////
  private _goTo(url: string, params?: NavigationExtras): void {
    this.router.navigateByUrl(url, params);
  }

}
