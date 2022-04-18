import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { FormService } from "src/app/services/form.service";
import { ModalService } from "src/app/services/modal.service";
 
@Component({
    selector: "app-modal",
    templateUrl: "./modal.component.html",
  })
export class ModalComponent implements AfterViewInit {
    @ViewChildren('modalRef') modalRefList!: QueryList<any>;
    @ViewChild('overlayRef') overlay!: ElementRef;

    constructor(public modalService: ModalService) {}

    ngAfterViewInit(): void {
        this.modalService.modalList = this.modalRefList.toArray();
        this.modalService.overlay = this.overlay;
    }

    ngOnInit() {}
}