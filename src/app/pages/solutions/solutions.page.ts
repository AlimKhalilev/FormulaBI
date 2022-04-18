import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Intersection } from 'src/app/modules/intersection';
import { AccordionData } from 'src/app/services/accordion.service';
import { AppService } from 'src/app/services/app.service';
import { FeaturesCardData, FeaturesService } from 'src/app/services/features.service';
import { FilterTabData, FilterTabService } from 'src/app/services/filter-tab.service';
import { SolutionsService } from 'src/app/services/solutions.service';

@Component({
    selector: "app-solutions",
    templateUrl: "./solutions.page.html",
})
export class SolutionsPage implements AfterViewInit {
    accordionData: AccordionData[];
    filterData: FilterTabData[];
    accordionModel: string;
    isRenderCard: any;

    @ViewChildren('dataAnim') animRefList!: QueryList<any>;

    constructor(private solutionsService: SolutionsService, private appService: AppService, private filterTabService: FilterTabService) {
        this.accordionData = solutionsService.accordionData;
        this.filterData = solutionsService.accordionFilterData;
        this.accordionModel = solutionsService.accordionModel;
        this.isRenderCard = filterTabService.isRenderCard;
    }

    ngAfterViewInit() {
        if (!this.appService.isSolutionsPageVisited) { // если страницу еще не посещали
            Intersection.initAnimEvents(this.animRefList.toArray()); // закидываем в слушатель прокрутки массив элементов анимаций по refElement
            this.appService.isSolutionsPageVisited = true;
        }
    }

    ngOnInit() {

    }

    filterChosen(value: string) { // получаем emit из фильтра tabFilter
        this.accordionModel = value;
        this.solutionsService.accordionModel = this.accordionModel;
    }

}