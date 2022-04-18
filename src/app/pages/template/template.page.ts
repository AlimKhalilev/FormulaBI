import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Intersection } from 'src/app/modules/intersection';
import { AppService } from 'src/app/services/app.service';

@Component({
    selector: "app-template",
    templateUrl: "./template.page.html",
})
export class TemplatePage implements AfterViewInit {

    @ViewChildren('dataAnim') animRefList!: QueryList<any>;

    constructor(private appService: AppService) {
    }

    ngAfterViewInit() {
        if (!this.appService.isTemplatePageVisited) { // если страницу еще не посещали
            Intersection.initAnimEvents(this.animRefList.toArray()); // закидываем в слушатель прокрутки массив элементов анимаций по refElement
            this.appService.isTemplatePageVisited = true;
        }
    }

    ngOnInit() {
        
    }

}