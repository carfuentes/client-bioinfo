import { Injectable } from '@angular/core';
import { TreeviewItem } from 'ng2-dropdown-treeview';


import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Rx';
import { SessionService } from './session.service'

@Injectable()
export class WorkflowService {

  BASE_URL: string = 'http://localhost:3000/api';

  constructor(private session: SessionService, private http: Http) { }

   private requestOptions(): RequestOptions {
    let headers = new Headers({ 'Authorization': `JWT ${this.session.token}` });
    return new RequestOptions({ headers: headers });
  }


  handleError(e) {
    return Observable.throw(e.json().message);
  }

  getSingleWorkflow(id) {
    return this.http.get(`${this.BASE_URL}/workflows/${id}`, this.requestOptions())
    .map((response)=>  {
      return  response.json()
    })
  }

  getUserApprovedWorkFlows(id) {
    return this.http.get(`${this.BASE_URL}/workflows/user/${id}/approved`, this.requestOptions())
                    .map(res => res.json())
                    .catch(this.handleError)
  }

  getUserNotApprovedWorkFlows(id) {
    return this.http.get(`${this.BASE_URL}/workflows/user/${id}/notapproved`, this.requestOptions())
                    .map(res => res.json())
                    .catch(this.handleError)
  }

  getCategoryWorkFlows(catname) {
    return this.http.get(`${this.BASE_URL}/categories/${catname}/workflows`, this.requestOptions())
                    .map(res => res.json())
                    .catch(this.handleError)
  }

  createAWorkflow(body) {
    return this.http.post(`${this.BASE_URL}/workflows`, body, this.requestOptions())
                    .map(res => res.json())
                    .catch(this.handleError)
  }

  updateAWorkflow(id,body) {
     return this.http.put(`${this.BASE_URL}/workflows/${id}/update`, body, this.requestOptions())
                    .map(res => res.json())
                    .catch(this.handleError)
  
  }

  approveWorkflow(id) {
     return this.http.put(`${this.BASE_URL}/workflows/${id}/approve`, null, this.requestOptions())
                    .map(res => res.json())
                    .catch(this.handleError)
  
  }

  deleteWorkflow(id) {
     return this.http.delete(`${this.BASE_URL}/workflows/${id}`, this.requestOptions())
                    .map(res => res.json())
                    .catch(this.handleError)
  
  }

 

}
