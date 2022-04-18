import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Intersection } from 'src/app/modules/intersection';
import { AppService } from 'src/app/services/app.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
    selector: "app-clients",
    templateUrl: "./clients.page.html",
})
export class ClientsPage implements AfterViewInit {
    @ViewChildren('dataAnim') animRefList!: QueryList<any>;

    constructor(private appService: AppService, public modalService: ModalService) { }

    ngAfterViewInit() {
        if (!this.appService.isClientsPageVisited) { // если страницу еще не посещали
            Intersection.initAnimEvents(this.animRefList.toArray()); // закидываем в слушатель прокрутки массив элементов анимаций по refElement
            this.appService.isClientsPageVisited = true;
        }
    }

    ngOnInit() {

    }

}