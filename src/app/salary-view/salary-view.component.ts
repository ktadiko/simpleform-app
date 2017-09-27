import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form } from '../form'

import { DataService } from '../services/data.service';

@Component({
  selector: 'salary-view',
  templateUrl: './salary-view.component.html',
  styleUrls: ['./salary-view.component.css']
})
export class SalaryViewComponent implements OnInit {
  
  salaryForm:FormGroup;
  totalCost:Number = 0;

  constructor(private formBuilder: FormBuilder, private dataService: DataService) { 
  	this.salaryForm = this.formBuilder.group({
  		company: ['', Validators.required]
  	})

  	this.dataService.totalCostSource.subscribe(
  		cost => {
  			console.log(cost);
  			this.totalCost = cost;
  		});
  }

  onSubmit() {
      this.dataService.getTotalCosts(this.salaryForm.value['company']);
  }

  ngOnInit() {
  }

}
