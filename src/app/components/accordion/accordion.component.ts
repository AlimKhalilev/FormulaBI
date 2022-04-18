import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { AccordionData } from "src/app/services/accordion.service";
 
@Component({
    selector: "app-accordion",
    templateUrl: "./accordion.component.html",
  })
export class AccordionComponent implements AfterViewInit  {
    bodyRefHeight: any;
    bodyRefMargin: number = 32;
    @Input() accordionData!: AccordionData;
    @ViewChild('body') bodyRef!: ElementRef<HTMLDivElement>;

    constructor() {}
    
    ngAfterViewInit() {
        this.bodyRefHeight = this.bodyRef.nativeElement.clientHeight + this.bodyRefMargin;
        this.bodyRef.nativeElement.setAttribute("style", `--height: ${this.bodyRefHeight}px;`);
        this.bodyRef.nativeElement.classList.add("init");
    }

    ngOnInit() {}

    onAccordionClicked() {
        this.accordionData.isOpened = !this.accordionData.isOpened;
    }
}