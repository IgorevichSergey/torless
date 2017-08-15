import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/Rx';

import { LoginUser, CreatedUser, CreatedManagerUser } from '../../customClasses';

@Injectable()
export class UserService {
  private _host: string;
  private _headers: Headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(
    private http: Http
  ) {
    this._host = environment.host;
  }

  public login(user: LoginUser): Promise<any> {
    const data: string = JSON.stringify({'tag': 'login', 'us_log_email': user.us_log_email, 'us_log_pass': user.us_log_pass});

    return this._setRequest(data).then((response) => {
      localStorage.setItem('torless_token', response.data.token);
      return response;
    }, (error) => {
      return error;
    });
  }

  public registration(createdUser: CreatedUser): Promise<any> {
    const data: string = JSON.stringify({tag: 'registration', user: createdUser.user, company: createdUser.company});

    return this._setRequest(data).then((response) => {
      return response;
    }, (error) => {
      return error;
    });
  }

  public registerManagerUser(createdManagerUser: CreatedManagerUser): Promise<any> {
    const _token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({tag: 'register_manager_user', token: _token, manager_user: {mn_name: createdManagerUser.mn_name, mn_last_name: createdManagerUser.mn_last_name, mn_phone: createdManagerUser.mn_phone, mn_email: createdManagerUser.mn_email, mn_pass: createdManagerUser.mn_pass}});

    return this._setRequest(data).then((response) => {
      return response;
    }, (error) => {
      return error;
    });

  }

  public confirmUser(userKey: string): Promise<any> {
    const _token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({tag: 'confirm_user', token: _token, us_key: userKey});

    return this._setRequest(data).then((response) => {
      return response;
    }, (error) => {
      return error;
    });

  }

  public logout(): Promise<any> {
    const _token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({tag: 'logout', 'token': _token});

    return this._setRequest(data).then((response) => {
      localStorage.removeItem('torless_token');
      return response;
    }, (error) => {
      return error;
    });

  }

  public checkUserEmail(email: string): Promise<any> {
    const data: string = JSON.stringify({tag: 'check_email', 'ch_mail': email});

    return this._setRequest(data).then((response) => {
      return response;
    }, (error) => {
      return error;
    });

  }

  /////
  private _setRequest(data: string): Promise<any> {
    const body: URLSearchParams = new URLSearchParams();
    body.set('data', data);
    return new Promise((resolve, reject) => {
      this.http.post(this._host, body.toString(), { headers: this._headers })
        .map(response => response.json())
        .subscribe((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
  }



}
