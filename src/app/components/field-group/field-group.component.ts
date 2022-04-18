import { Component, Input, OnInit } from "@angular/core";
import { AbstractControl, FormGroup } from "@angular/forms";
import { InputFieldData } from "src/app/services/form.service";
 
@Component({
    selector: "field-group",
    templateUrl: "./field-group.component.html",
  })
export class FieldGroupComponent {
    @Input() formGroupData!: InputFieldData[];
    @Input() formGroup!: FormGroup;

    constructor() {}

    ngOnInit() {}

    isControlInvalid(field: AbstractControl | null) {
        return field?.touched && field?.invalid; 
    }
}