import { Component, OnInit } from "@angular/core";
import { FormService } from "src/app/services/form.service";
import { ModalService } from "src/app/services/modal.service";
 
@Component({
    selector: "modal-password-restore",
    templateUrl: "./modal-password-restore.component.html",
  })
export class ModalPasswordRestoreComponent {

    constructor(public formService: FormService, public modalService: ModalService) {}

    ngOnInit() {}
}