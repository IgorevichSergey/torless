import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';

import { CreatedCafeteria, CreatedMainCategoryClass, CreatedMainProduct } from '../../customClasses';

@Injectable()
export class ProductService {
  private _host: string;
  private _headers: Headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(
    private http: Http
  ) {
    this._host = environment.host;
  }

  public createMainProduct(createdMainProduct: CreatedMainProduct): Promise<any> {
    const token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({tag: 'create_main_product', token: token, pr_caf_id: createdMainProduct.pr_caf_id, pr_cat_id:  createdMainProduct.pr_cat_id, product: createdMainProduct.product, extra_categories: createdMainProduct.extra_categories});

    return this._setRequest(data);

  }

  public getProductsForCategory(cafeteriaId: number, categoryId: number): Promise<any> {
    const token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({ tag: 'get_products_for_category', token: token, gcp_caf_id: cafeteriaId, gcp_cat_id: categoryId});

    return this._setRequest(data);

  }

  public getMainProduct(productId: number): Promise<any> {
    const token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({tag: 'get_product_by_id', token: token, prod_id: productId});

    return this._setRequest(data);
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
