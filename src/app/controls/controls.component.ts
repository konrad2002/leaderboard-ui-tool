import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Entry} from "../core/model/entry.model";

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {
  @Input() leaders: Entry[] = [];
  @Output() modify = new EventEmitter<void>();

  onModify() {
    this.modify.emit();
  }


}
