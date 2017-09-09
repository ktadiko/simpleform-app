import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { DbViewComponent } from './db-view/db-view.component';
import { DataService } from './services/data.service';

import { FlexLayoutModule } from "@angular/flex-layout";

// Angular Material Directives
import { 
  MdButtonModule, 
  MdInputModule, 
  MdToolbarModule,
  MdCardModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    DbViewComponent
  ],
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
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
