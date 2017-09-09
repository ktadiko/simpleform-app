import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form } from '../form'
import { InputFormComponent } from './input-form.component';
import { HttpModule } from '@angular/http'

import { DataService } from '../services/data.service';
import { 
  MdButtonModule, 
  MdInputModule, 
  MdToolbarModule,
  MdCardModule
} from '@angular/material';

describe('InputFormComponent', () => {
  let component: InputFormComponent;
  let fixture: ComponentFixture<InputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
                BrowserAnimationsModule,
                HttpModule,
                MdButtonModule, 
                MdInputModule, 
                MdToolbarModule,
                MdCardModule
               ],
      declarations: [ InputFormComponent ],
      providers: [DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a submit button', () => {
    const fixture = TestBed.createComponent(InputFormComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Submit');
  });
});
