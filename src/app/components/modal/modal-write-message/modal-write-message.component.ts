import { Component, OnInit } from "@angular/core";
import { FormService } from "src/app/services/form.service";
import { ModalService } from "src/app/services/modal.service";
 
@Component({
    selector: "modal-write-message",
    templateUrl: "./modal-write-message.component.html",
  })
export class ModalWriteMessageComponent {

    constructor(public formService: FormService, public modalService: ModalService) {}

    ngOnInit() {}
}