import { Form } from '../form';
import { DataService } from '../services/data.service';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'db-view',
  templateUrl: './db-view.component.html',
  styleUrls: ['./db-view.component.css']
})
export class DbViewComponent implements OnInit {
  
  form:Form;
  constructor(private dataService:DataService) { 
  	this.dataService.subject.asObservable().subscribe(
  		form => {
  			this.form = form;
  		});
  }

  ngOnInit() {
  }

}
