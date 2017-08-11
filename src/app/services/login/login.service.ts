import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';

import { LoginUser } from '../../customClasses';

@Injectable()
export class LoginService {
  private _host: string;

  constructor(
    private http: Http
  ) {
    this._host = environment.host;
  }


  public login(user: LoginUser): Promise<any> {
    return new Promise((resolve, reject) => {
      let data = JSON.stringify({'tag': 'login', 'us_log_email':user.us_log_email, 'us_log_pass':user.us_log_pass});
      this.http.post(this._host, data)
        .subscribe((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }

}
