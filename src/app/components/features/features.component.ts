import { FeaturesCardData, FeaturesService } from './../../services/features.service';
import { Component, Input, OnInit } from "@angular/core";
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);
 
@Component({
    selector: "app-features",
    templateUrl: "./features.component.html",
  })
export class FeaturesComponent {
    @Input() cardsData!: FeaturesCardData[];

    constructor() {}

    onTabTogglerClick(rowIndex: number, colIndex: number) {
        if (this.cardsData[rowIndex].tabActive === false) { // переключение табов
            this.cardsData[rowIndex].tabActive = true;
        }
        else {
            if (this.cardsData[rowIndex].tabIndex === colIndex) {
                this.cardsData[rowIndex].tabActive = false;
            }
        }

        this.cardsData[rowIndex].tabContent = this.cardsData[rowIndex].slideData[colIndex].content;
        this.cardsData[rowIndex].tabIndex = colIndex;
    }

    ngOnInit() {}
}