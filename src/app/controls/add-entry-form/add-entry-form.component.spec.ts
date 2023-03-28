import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntryFormComponent } from './add-entry-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('AddEntryFormComponent', () => {
  let component: AddEntryFormComponent;
  let fixture: ComponentFixture<AddEntryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEntryFormComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
