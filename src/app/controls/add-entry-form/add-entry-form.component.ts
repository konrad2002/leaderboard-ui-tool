import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Entry} from "../../core/model/entry.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-entry-form',
  templateUrl: './add-entry-form.component.html',
  styleUrls: ['./add-entry-form.component.css']
})
export class AddEntryFormComponent {
  @Input() leaders: Entry[] = [];
  @Output() modify = new EventEmitter<void>();

  addForm: FormGroup;


  constructor(
    private fb: FormBuilder
  ) {
    this.addForm = this.fb.group(
      {
        "name": ['', null]
      }
    )
  }

  addEntry() {
    const name = this.addForm.value.name;
    this.leaders.push(
      new class implements Entry {
        name = name;
        points = 0;
      }
    )
    this.modify.emit();
  }
}
