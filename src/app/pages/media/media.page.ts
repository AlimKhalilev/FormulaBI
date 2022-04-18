import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Intersection } from 'src/app/modules/intersection';
import { AppService } from 'src/app/services/app.service';

enum MediaTabsPage {
    EMPTY,
    NEWS,
    EVENTS,
    QUESTIONS,
    ARTICLES,
    GALLERY,
    LIBRARY
}

@Component({
    selector: "app-media",
    templateUrl: "./media.page.html",
})
export class MediaPage implements AfterViewInit {

    @ViewChildren('dataAnim') animRefList!: QueryList<any>;

    routeId: number;
    mediaTabsPageId = MediaTabsPage;
    activeTabId: number = 1;
    mediaTabsData: string[] = ["Новости", "Мероприятия", "Вопросы", "Статьи", "Фотогалерея", "Инфотека"];

    constructor(
        private activateRoute: ActivatedRoute, 
        private router: Router,
        private appService: AppService
    ) {
        this.routeId = Number(activateRoute.snapshot.params['id']);
        this.appService.mediaPageId = this.routeId;
    }

    ngAfterViewInit() {
        if (!this.appService.isMediaPageVisited) { // если страницу еще не посещали
            Intersection.initAnimEvents(this.animRefList.toArray()); // закидываем в слушатель прокрутки массив элементов анимаций по refElement
            this.appService.isMediaPageVisited = true;
        }
    }

    ngOnInit() {
        this.activeTabId = this.routeId;
    }

    changeRadio(e: Event) {
        this.appService.mediaPageId = this.activeTabId;
        this.router.navigate(['/media/' + this.activeTabId]);
    }

}