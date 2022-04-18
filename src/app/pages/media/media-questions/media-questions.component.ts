import { Component, OnInit } from "@angular/core";
import { AccordionData } from "src/app/services/accordion.service";
import { FilterBoxData, FilterBoxService } from "src/app/services/filter-box.service";
import { MediaQuestionsService } from "src/app/services/media-questions.service";
 
@Component({
    selector: "media-questions",
    templateUrl: "./media-questions.component.html",
})
export class MediaQuestionsComponent {
    accordionData: AccordionData[];
    filterData: FilterBoxData[];
    isRenderCard: any;

    constructor(mediaQuestionsService: MediaQuestionsService, filterBoxService: FilterBoxService) {
        this.accordionData = mediaQuestionsService.accordionData;
        this.filterData = mediaQuestionsService.accordionFilterData;
        this.isRenderCard = filterBoxService.isRenderCard;
    }

    ngOnInit() {
        // console.log("init demo");
    }
}