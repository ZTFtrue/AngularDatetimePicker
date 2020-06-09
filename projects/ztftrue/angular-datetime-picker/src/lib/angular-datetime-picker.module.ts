import { NgModule } from '@angular/core';
import { AngularDatetimePickerComponent } from './angular-datetime-picker.component';
import { ChildSelectComponent } from './child-select/child-select.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AngularDatetimePickerComponent,
    ChildSelectComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [AngularDatetimePickerComponent]
})
export class AngularDatetimePickerModule { }
