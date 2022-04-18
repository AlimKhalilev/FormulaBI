import { Component, OnInit } from "@angular/core";
import { FormService } from "src/app/services/form.service";
import { ModalService } from "src/app/services/modal.service";
 
@Component({
    selector: "modal-success",
    templateUrl: "./modal-success.component.html",
  })
export class ModalSuccessComponent {

    constructor(public formService: FormService, public modalService: ModalService) {}

    ngOnInit() {}
}