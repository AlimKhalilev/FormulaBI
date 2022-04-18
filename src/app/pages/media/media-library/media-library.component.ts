import { Component, OnInit } from "@angular/core";
import { MediaLibraryService } from 'src/app/services/media-library.service';
import { FilterBoxData, FilterBoxService } from "src/app/services/filter-box.service";
import { ArticlesCardData } from "src/app/services/media-articles.service";
 
@Component({
    selector: "media-library",
    templateUrl: "./media-library.component.html",
})
export class MediaLibraryComponent {
    cardData: ArticlesCardData[];
    filterData: FilterBoxData[];
    isRenderCard: any;

    constructor(mediaLibraryService: MediaLibraryService, filterBoxService: FilterBoxService) {
        this.cardData = mediaLibraryService.libraryCardData;
        this.filterData = mediaLibraryService.libraryFilterData;
        this.isRenderCard = filterBoxService.isRenderCard;
    }

    ngOnInit() {
        // console.log("init demo");
    }

}