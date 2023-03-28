import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Entry} from "../../core/model/entry.model";

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent {
  @Input() leaders: Entry[] = [];
  @Output() modify = new EventEmitter<void>();

  incEntry(entry: Entry) {
    entry.points++;
    this.modify.emit();
  }
  decEntry(entry: Entry) {
    entry.points--;
    this.modify.emit();
  }

  remEntry(entry: Entry) {
    const index = this.leaders.indexOf(entry);

    if (index >= 0) {
      this.leaders.splice(index, 1);
    }
    this.modify.emit();
  }
}
