import { Form } from '../form';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const SERVER_URL = 'http://localhost:3000'

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  subject = new Subject<Form>();

  // Get all saved forms
  getAllForms(){
    return this.http.get(SERVER_URL + '/api/forms')
      .map(res => res.json());
  }

  // Get a form by Id
  getFormById(formId){
    return this.http.get(SERVER_URL + '/api/form/' + formId)
      .map(res => res.json() as Form);
  }

  // register a new form
  postForm(form: Form){
    // create a new form, get its id and call getFormById
    return this.http.post(SERVER_URL + '/api/form', form)
    .toPromise()
    .then(res => {
      this.getFormById(res.json().formId).subscribe(
        form => { 
          this.subject.next(form);
        }
      );
    });
  }

  // update a form
  updateForm(form: Form){
    return this.http.put(SERVER_URL + '/api/form', form)
      .map(res => res.json());
  }

  // delete a form
  deleteForm(formId){
    return this.http.delete(SERVER_URL + '/api/form/' + formId)
      .map(res => res.json());
  }

}
