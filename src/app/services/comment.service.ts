import { Injectable } from '@angular/core';


import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Rx';
import { SessionService } from './session.service'


@Injectable()
export class CommentService {

  BASE_URL: string = 'http://localhost:3000/api';
  BASE_PUBLIC: string = 'http://localhost:3000';
  commentList;

  constructor(private session: SessionService, private http: Http) { }

   private requestOptions(): RequestOptions {
    let headers = new Headers({ 'Authorization': `JWT ${this.session.token}` });
    return new RequestOptions({ headers: headers });
  }


  handleError(e) {
    return Observable.throw(e.json().message);
  }



  getWorkflowComments(id) {
    return this.http.get(`${this.BASE_PUBLIC}/workflows/${id}/comments`)
    .map((response)=>  {
      return response.json()
    })
  }

  createAComment(id,body) {
    return this.http.post(`${this.BASE_URL}/workflows/${id}/comments`, body, this.requestOptions())
                    .map(res => res.json())
                    .catch(this.handleError)
  }



}


