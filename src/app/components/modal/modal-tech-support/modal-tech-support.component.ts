import { Component, OnInit } from "@angular/core";
import { FormService } from "src/app/services/form.service";
import { ModalService } from "src/app/services/modal.service";
 
@Component({
    selector: "modal-tech-support",
    templateUrl: "./modal-tech-support.component.html",
  })
export class ModalTechSupportComponent {

    constructor(public formService: FormService, public modalService: ModalService) {}

    ngOnInit() {}
}