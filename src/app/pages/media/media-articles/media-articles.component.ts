import { Component, OnInit } from "@angular/core";
import { ArticlesCardData, MediaArticlesService } from 'src/app/services/media-articles.service';
import { FilterBoxData, FilterBoxService } from "src/app/services/filter-box.service";
 
@Component({
    selector: "media-articles",
    templateUrl: "./media-articles.component.html",
})
export class MediaArticlesComponent {
    cardData: ArticlesCardData[];
    filterData: FilterBoxData[];
    isRenderCard: any;

    constructor(mediaArticlesService: MediaArticlesService, filterBoxService: FilterBoxService) {
        this.cardData = mediaArticlesService.articlesCardData;
        this.filterData = mediaArticlesService.articlesFilterData;
        this.isRenderCard = filterBoxService.isRenderCard;
    }

    ngOnInit() {
        // console.log("init demo");
    }

}