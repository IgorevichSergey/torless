import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';

import { CreatedUser } from '../../customClasses';

@Injectable()
export class RegistrationService {
  private _host: string;
  // private _headers: Headers = new Headers();

  constructor(
    private http: Http
  ) {
    this._host = environment.host;
    // this._headers.append('Content-Type', 'application/x-www-form-urlencoded');
  }

  public registerUser(createdUser: CreatedUser): Promise<any> {
    return new Promise((resolve, reject) => {
      let data = JSON.stringify({tag: 'registration', user: createdUser.user, company: createdUser.company});

      // {"tag":"registration", "user":{"us_name":"test name", "us_last_name":"test last name", "us_position":"test position", "us_phone":"122234234", "us_passport_id":"121121121", "us_email":"email@mailinator.com", "us_pass":"123qweqwe"}, "company": {"comapny_name":"test company name", "comapny_vat_number":"123123123", "comapny_address":"test company address", "comapny_city":"test city", "comapny_zip_code":"12345"}}
      this.http.post(this._host, {data: data}).subscribe((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
  }


// {"tag":"registration", "user":{"us_name":"test_name", "us_last_name":"test_last_name", "us_position":"test_position", "us_phone":"123-456-789", "us_passport_id":"qw1212", "us_email":"qwqwqw@mailinator.com", "us_pass":"qwerty123"}, "company": {"comapny_name":"test_company_name", "comapny_vat_number":"123", "comapny_address":"test_company_address", "comapny_city":"test_city", "comapny_zip_code":"12345"}}
}
