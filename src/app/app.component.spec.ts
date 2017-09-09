import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InputFormComponent } from './input-form/input-form.component';
import { DbViewComponent } from './db-view/db-view.component';
import { DataService } from './services/data.service';

import { FlexLayoutModule } from "@angular/flex-layout";

import { 
  MdButtonModule, 
  MdInputModule, 
  MdToolbarModule,
  MdCardModule
} from '@angular/material';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
                BrowserModule,
                BrowserAnimationsModule,
                HttpModule,
                FormsModule,
                ReactiveFormsModule,
                FlexLayoutModule,
                MdButtonModule, 
                MdInputModule, 
                MdToolbarModule,
                MdCardModule
               ],
      declarations: [
        AppComponent,
        InputFormComponent,
        DbViewComponent
      ],
      providers: [DataService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render a toolbar with Simple Form Submission', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-toolbar').textContent).toContain('Simple Form Submission');
  }));
});
