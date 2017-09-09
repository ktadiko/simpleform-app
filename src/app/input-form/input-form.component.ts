import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form } from '../form'

import { DataService } from '../services/data.service';

@Component({
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
  	this.registerForm = this.formBuilder.group({
  		firstName: ['', Validators.required],
  		lastName:  ['', Validators.required],
  		company:   ['',  Validators.required],
  		address:   ''
  	})
  }

  onSubmit() {
      this.dataService.postForm(new Form(
      this.registerForm.value['firstName'],
      this.registerForm.value['lastName'],
      this.registerForm.value['address'],
      this.registerForm.value['company']));
  }

}
