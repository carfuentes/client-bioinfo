import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { SessionService } from './session.service'

@Injectable()
export class UserInfoService {

  BASE_URL: string = 'http://localhost:3000/api'

  constructor(private session: SessionService, private http: Http) { }

  private requestOptions(): RequestOptions {
    let headers = new Headers({ 'Authorization': `JWT ${this.session.token}` });
    return new RequestOptions({ headers: headers });
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  // getProfile() {
  //   return this.http.get(`${this.BASE_URL}/profile`, this.requestOptions())
  //   .map((response)=>  {
  //     return response.json()
  //   })
  //   .catch(this.handleError)
  // }

  getUserProfile(id) {
    return this.http.get(`${this.BASE_URL}/user/${id}`, this.requestOptions())
                    .map(res => res.json())
                    .catch(this.handleError)
  }



}


