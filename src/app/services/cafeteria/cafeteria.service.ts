import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';

import { CreatedCafeteria, UpdatedCafeteria, CreatedMainProduct } from '../../customClasses';

@Injectable()
export class CafeteriaService {
  private _host: string;
  private _headers: Headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(
    private http: Http
  ) {
    this._host = environment.host;
  }

  public createCafeteria(createdCafeteria: CreatedCafeteria): Promise<any> {
    const token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({tag: 'create_cafeteria', 'token': token, cafeteria: createdCafeteria.cafeteria, work_time: createdCafeteria.work_time});

    return this._setRequest(data).then((response) => {
      return response;
    }, (error) => {
      return error;
    });

  }


  // todo token not used?
  public getUserCafeterias(): Promise<any> {
    const token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({tag: 'get_user_cafeterias', token: token});

    return this._setRequest(data).then((response) => {
      return response;
    }, (error) => {
      return error;
    });

  }

  public getCafeteriaById(cafeteriaId: number): Promise<any> {
    const token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({tag: 'get_cafeteria_by_id', token: token, g_caf_id: cafeteriaId});

    return this._setRequest(data).then((response) => {
      return response;
    }, (error) => {
      return error;
    });

  }

  public updateCafeteria(updatedCafeteria: UpdatedCafeteria): Promise<any> {
    const token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({tag: 'update_cafeteria', token: token, cafeteria: updatedCafeteria.cafeteria, work_time: updatedCafeteria.work_time});

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
