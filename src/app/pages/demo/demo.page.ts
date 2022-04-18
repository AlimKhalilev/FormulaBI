import { Component, OnInit } from "@angular/core";
import { AccordionData } from "src/app/services/accordion.service";
import { MediaQuestionsService } from 'src/app/services/media-questions.service';
 
@Component({
    selector: "app-demo",
    templateUrl: "./demo.page.html",
  })
export class DemoPage {
    accordionData: AccordionData[];

    constructor(mediaQuestionsService: MediaQuestionsService) {
        this.accordionData = mediaQuestionsService.accordionData;
    }

    ngOnInit() {
        // console.log("init demo");
    }
}