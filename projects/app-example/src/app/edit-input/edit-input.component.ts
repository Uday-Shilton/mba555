import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {EditOutput, ICandidateField} from "../shared/interfaces";

@Component({
  selector: 'app-edit-input',
  templateUrl: './edit-input.component.html',
  styleUrls: ['./edit-input.component.scss'],
})
export class EditInputComponent implements OnInit {
  @Input() data: any;
  @Input() fieldObj: ICandidateField;
  @Output() focusOut: EventEmitter<any> = new EventEmitter<string>();
 
  editMode = false;

  constructor() {}

  ngOnInit() {}

  isPasswordEditMode() {
      return this.editMode  && this.fieldObj  && this.fieldObj.type === "password";
  }

  isTextEditMode() {
      return this.editMode  && this.fieldObj  && this.fieldObj.type === "string";
  }

  isNumberEditMode() {
    return this.editMode && this.fieldObj  && this.fieldObj.type === "number";
  }

  isSelectEditMode() {
    return this.editMode && this.fieldObj  && (this.fieldObj.type === "select" || this.fieldObj.type === "option" || this.fieldObj.type === 'array');
  }

  getData() {
    if ((this.fieldObj.type === "select" || this.fieldObj.type === "option") && this.data && this.data.value) {
      return this.data.value;
    } else if (this.fieldObj.type === 'array') {
      if (this.data && this.data.length > 0) {
        return this.data[0].value;
      }
    }
    return this.data;
  }

  onFocusOut() {
    this.focusOut.emit({
      data: this.data,
      fieldObj: this.fieldObj});
  }
}