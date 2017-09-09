import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { 
  MdButtonModule, 
  MdInputModule, 
  MdToolbarModule,
  MdCardModule
} from '@angular/material';

import { DbViewComponent } from './db-view.component';
import { DataService } from '../services/data.service';
import { HttpModule } from '@angular/http'

describe('DbViewComponent', () => {
  let component: DbViewComponent;
  let fixture: ComponentFixture<DbViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
                MdButtonModule, 
                MdInputModule, 
                MdToolbarModule,
                MdCardModule,
                HttpModule
               ],
      declarations: [ DbViewComponent ],
      providers: [DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have text "Values in Database"', () => {
    const fixture = TestBed.createComponent(DbViewComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-card-title').textContent).toContain('Values in Database');
  });
});
