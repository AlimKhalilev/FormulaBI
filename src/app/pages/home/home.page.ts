import { AfterViewInit } from '@angular/core';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import SwiperCore from 'swiper';
import { Intersection } from 'src/app/modules/intersection';
import { FeaturesCardData, FeaturesService } from 'src/app/services/features.service';
import { AppService } from 'src/app/services/app.service';
 
@Component({
    selector: "app-home",
    templateUrl: "./home.page.html",
  })
export class HomePage implements AfterViewInit {

    @ViewChildren('dataAnim') animRefList!: QueryList<any>;
    
    screenWidth: number = 0;
    keyPointsCardDataHalf: any[] = []; // Массив разделенных по колонкам слайдера для десктопа
    homeFeaturesCardData: FeaturesCardData[];

    keyPointsCardData: any[] = [
        "./assets/img/key-points/keyPoint-1.png",
        "./assets/img/key-points/keyPoint-2.png",
        "./assets/img/key-points/keyPoint-3.png",
        "./assets/img/key-points/keyPoint-4.png",
        "./assets/img/key-points/keyPoint-5.png",
        "./assets/img/key-points/keyPoint-6.png",
        "./assets/img/key-points/keyPoint-7.png",
        "./assets/img/key-points/keyPoint-8.png",
    ];

    partnersCardData: any[] = [
        {
            img: "./assets/img/partners/partner-1.svg",
            imgHover: "./assets/img/partners/partner-1-hover.svg",
            title: `Российский разработчик современной технологической платформы Sherp, 
                    на базе которой мы создаем наши информационные системы и приложения, что позволяет нам:`,
            text: `
                <ul class="baseList">
                    <li>принципиально упростить и ускорить разработку;</li>
                    <li>осуществлять интеграцию с уже существующими в компаниях программами и быструю миграцию данных;</li>
                    <li>производить реинжиниринг унаследованных IT-систем.</li>
                </ul>`,
            link: "#"
        },
        {
            img: "./assets/img/partners/partner-2.svg",
            imgHover: "./assets/img/partners/partner-2-hover.svg",
            title: `Ассоциация Национальное объединение корпоративных секретарей (НОКС) – профессиональное сообщество специалистов 
                    корпоративного управления.`,
            text: `НОКС выступил методологическим партнером Formula BI при создании и развитии информационной системы «Корпоративный секретарь».`,
            link: "#"
        },
        {
            img: "./assets/img/partners/partner-3.svg",
            imgHover: "./assets/img/partners/partner-3-hover.svg",
            title: `Сетевое издание, Информационно-деловой портал для профессионалов в сфере корпоративного управления.`,
            text: `Здесь вы найдете актуальные новости и публикации, лучшие российские и зарубежные практики, изменения в законодательстве, 
                    издания в области корпоративного управления и корпоративной социальной ответственности, информацию о мероприятиях и 
                    образовательных программах.`,
            link: "#"
        },
    ];

    constructor(featuresService: FeaturesService, private appService: AppService) {
        this.homeFeaturesCardData = featuresService.homeFeaturesCardData;
    }

    ngAfterViewInit() {
        if (!this.appService.isHomePageVisited) { // если страницу еще не посещали
            Intersection.initAnimEvents(this.animRefList.toArray()); // закидываем в слушатель прокрутки массив элементов анимаций по refElement
            this.appService.isHomePageVisited = true;
        }
    }

    ngOnInit() {
        this.screenWidth = window.innerWidth;
        //console.log(this.screenWidth);
        
        this.keyPointsCardDataHalf = this.divideKeyPointsCard(); // создаем новый разделенный массив слайдов для десктопа
        //console.log(this.keyPointsCardDataHalf);
    }

    divideKeyPointsCard() {
        let newArr = [];
        let cardDataLen = Math.ceil(this.keyPointsCardData.length / 2);
        for (let i = 0; i < cardDataLen; i++) {
            let secondElem = this.keyPointsCardData[cardDataLen + i];
            if (secondElem !== undefined) {
                newArr.push([this.keyPointsCardData[i], secondElem]);
            }
            else {
                newArr.push([this.keyPointsCardData[i]]);
            }
        }
        return newArr;
    }
}