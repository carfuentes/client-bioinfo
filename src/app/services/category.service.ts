import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Rx';
import { SessionService } from './session.service';


@Injectable()
export class CategoryService {
  
  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http, private session: SessionService) {}
  
  private requestOptions(): RequestOptions {
    let headers = new Headers({ 'Authorization': `JWT ${this.session.token}` });
    return new RequestOptions({ headers: headers });
  }


  handleError(e) {
    return Observable.throw(e.json().message);
  }

   getTreeCategories() {
    return this.http.get(`${this.BASE_URL}/categories`)
                    .map(res => res.json())
                    .catch(this.handleError)
  }

   getParentCategories() {
    return this.http.get(`${this.BASE_URL}/categories/parents`)
                    .map(res => res.json())
                    .catch(this.handleError)
  }

   getLeavesCategories() {
    return this.http.get(`${this.BASE_URL}/categories/leaves`)
                    .map(res => res.json())
                    .catch(this.handleError)
  }

  getWorkflowsCategories(catname) {
    return this.http.get(`${this.BASE_URL}/categories/${catname}/workflows`)
                    .map(res => res.json())
                    .catch(this.handleError)
  }

  getAdminCategories() {
    return this.http.get(`${this.BASE_URL}/admin/categories`, this.requestOptions())
                    .map(res => res.json())
                    .catch(this.handleError)
  }

  createAcategory(body) {
    return this.http.post(`${this.BASE_URL}/categories`, body, this.requestOptions())
                    .map(res => res.json())
                    .catch(this.handleError)

  }

  categoryWithRegex(catname,regex) {
    return this.http.get(`${this.BASE_URL}/categories/${catname}/${regex}/workflows`, this.requestOptions())
                    .map(res => res.json())
                    .catch(this.handleError)


  }


}
