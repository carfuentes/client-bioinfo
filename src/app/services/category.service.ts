import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Rx';
import { SessionService } from './session.service';


@Injectable()
export class CategoryService {
  
  BASE_URL: string = 'http://localhost:3000/api/categories';

  constructor(private http: Http, private session: SessionService) {}
  
  private requestOptions(): RequestOptions {
    let headers = new Headers({ 'Authorization': `JWT ${this.session.token}` });
    return new RequestOptions({ headers: headers });
  }


  handleError(e) {
    return Observable.throw(e.json().message);
  }

   getTreeCategories() {
    return this.http.get(`${this.BASE_URL}`, this.requestOptions())
                    .map(res => res.json)
                    .catch(this.handleError)
  }


}
