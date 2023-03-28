import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsComponent } from './controls.component';
import { AddEntryFormComponent } from './add-entry-form/add-entry-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EntryListComponent } from './entry-list/entry-list.component';



@NgModule({
    declarations: [
        ControlsComponent,
        AddEntryFormComponent,
        EntryListComponent
    ],
    exports: [
        ControlsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class ControlsModule { }
