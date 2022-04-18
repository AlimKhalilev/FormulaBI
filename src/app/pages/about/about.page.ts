import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Intersection } from 'src/app/modules/intersection';
import { AppService } from 'src/app/services/app.service';
import { FeaturesCardData, FeaturesService } from 'src/app/services/features.service';

@Component({
    selector: "app-about",
    templateUrl: "./about.page.html",
})
export class AboutPage implements AfterViewInit {
    aboutFeaturesCardData: FeaturesCardData[];

    @ViewChildren('dataAnim') animRefList!: QueryList<any>;

    constructor(featuresService: FeaturesService, private appService: AppService) {
        this.aboutFeaturesCardData = featuresService.aboutFeaturesCardData;
    }

    ngAfterViewInit() {
        if (!this.appService.isAboutPageVisited) { // если страницу еще не посещали
            Intersection.initAnimEvents(this.animRefList.toArray()); // закидываем в слушатель прокрутки массив элементов анимаций по refElement
            this.appService.isAboutPageVisited = true;
        }
    }

    ngOnInit() {
        
    }

}