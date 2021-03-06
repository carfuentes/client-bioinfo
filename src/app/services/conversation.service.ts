import { Injectable } from '@angular/core';



import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Rx';
import { SessionService } from './session.service'

@Injectable()
export class ConversationService {

  BASE_URL: string = 'http://localhost:3000/api';
  

  constructor(private session: SessionService, private http: Http) { }

   private requestOptions(): RequestOptions {
    let headers = new Headers({ 'Authorization': `JWT ${this.session.token}` });
    return new RequestOptions({ headers: headers });
  }


  handleError(e) {
    return Observable.throw(e.json().message);
  }



  startConversation(id, body) {
    return this.http.post(`${this.BASE_URL}/workflow/${id}/send`, body, this.requestOptions())
    .map((response)=>  {
      return response.json()
    })
  }

  replyConversation(id,body) {
    return this.http.post(`${this.BASE_URL}/conversations/${id}/reply`, body, this.requestOptions())
                    .map(res => res.json())
                    .catch(this.handleError)
  }

  getConversations() {
    return this.http.get(`${this.BASE_URL}/conversations`, this.requestOptions())
                    .map(res => res.json())
                    .catch(this.handleError)
  }

  getAdminConversations() {
    return this.http.get(`${this.BASE_URL}/admin/conversations`, this.requestOptions())
                    .map(res => res.json())
                    .catch(this.handleError)
  }

  getSingleConversation(id) {
    return this.http.get(`${this.BASE_URL}/conversations/${id}`, this.requestOptions())
                    .map(res => res.json())
                    .catch(this.handleError)
  }





}
