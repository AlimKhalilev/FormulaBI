import { Injectable } from "@angular/core";

export interface FeaturesSlideData {
    name: string, 
    icon: string,
    link: string,
    content: string
}

export interface FeaturesCardData {
    name: string,
    rowClass: string,
    fillIcon: string,
    tabActive: boolean,
    tabContent: string,
    tabIndex: number,
    slideData: FeaturesSlideData[]
}

@Injectable({
    providedIn: "root",
})
export class FeaturesService {
    constructor() {}

    /** данные карточек преимуществ с главной страницы */
    homeFeaturesCardData: FeaturesCardData[] = [
        {
            name: "Цифровые концепции", 
            rowClass: "features__card--red", 
            fillIcon: "#CA0E1A",
            tabActive: false,
            tabContent: "",
            tabIndex: -1,
            slideData: [
                { 
                    name: "Цифровые платформы", 
                    icon: "digital-observe-1",
                    link: "#",
                    content: `Content data 0 - 1`
                },
                { 
                    name: "Функциональные решения", 
                    icon: "digital-observe-2",
                    link: "#",
                    content: `
                        Многолетний и уникальный опыт  в области создания корпоративных цифровых экосистем с применением технологий импортозамещения 
                        позволяет формировать  и расширять пул готовых функциональных и сервисных решений, с возможностью их кастомизации под любые 
                        запросы бизнес-среды.
                        <br><br>
                        Функциональные решения мы разделяем на общеуправленческие, входящие в комплекс решений «Управление деятельностью», и 
                        специализированные – отраслевые, ориентированные на конкретную профессиональную область, решения для государственных структур.
                    `
                },
                { 
                    name: "Корпоративные информационные системы", 
                    icon: "digital-observe-3",
                    link: "#",
                    content: `Content data 0 - 2`
                },
                { 
                    name: "Цифровые экосистемы", 
                    icon: "digital-observe-4",
                    link: "#",
                    content: `Content data 0 - 3`
                },
            ]
        },
        {
            name: "Предметные области", 
            rowClass: "features__card--darkBodyText",
            fillIcon: "#CA0E1A", 
            tabActive: false,
            tabContent: "",
            tabIndex: -1,
            slideData: [
                { 
                    name: "Управление организацией", 
                    icon: "subject-areas-1",
                    link: "#",
                    content: `Content data 1 - 0`
                },
                { 
                    name: "Корпоративное управление", 
                    icon: "subject-areas-2",
                    link: "#",
                    content: `Content data 1 - 1`
                },
                { 
                    name: "Управление имуществом и активами", 
                    icon: "subject-areas-3",
                    link: "#",
                    content: `Content data 1 - 2`
                },
                { 
                    name: "Энергетика", 
                    icon: "subject-areas-4",
                    link: "#",
                    content: `Content data 1 - 3`
                },
                { 
                    name: "Управление ИТ-ресурсами", 
                    icon: "subject-areas-5",
                    link: "#",
                    content: `Content data 1 - 4`
                },
            ]
        },
        {
            name: "Центры знаний", 
            rowClass: "features__card--gray",
            fillIcon: "#CA0E1A",
            tabActive: false,
            tabContent: "",
            tabIndex: -1,
            slideData: [
                { 
                    name: "Импортозамещение", 
                    icon: "knowledge-centers-1",
                    link: "#",
                    content: `Content data 2 - 0`
                },
                { 
                    name: "Аудит и реинжиниринг унаследованных систем", 
                    icon: "knowledge-centers-2",
                    link: "#",
                    content: `Content data 2 - 1`
                },
                { 
                    name: "Проектно-процессное проектирование", 
                    icon: "knowledge-centers-3",
                    link: "#",
                    content: `Content data 2 - 2`
                },
                { 
                    name: "Центр обучения", 
                    icon: "knowledge-centers-4",
                    link: "#",
                    content: `Content data 2 - 3`
                },
            ]
        },
    ];

    /** данные карточек преимуществ с страницы 'о компании' */
    aboutFeaturesCardData: FeaturesCardData[] = [
        {
            name: "Документация", 
            rowClass: "", 
            fillIcon: "#CA0E1A",
            tabActive: false,
            tabContent: "",
            tabIndex: -1,
            slideData: [
                { 
                    name: "Лицензии", 
                    icon: "about-documentation-1",
                    link: "#",
                    content: `Content data 0 - 0`
                },
                { 
                    name: "Эксплуатационная документация ПО", 
                    icon: "about-documentation-2",
                    link: "#",
                    content: `Content data 0 - 1`
                },
                { 
                    name: "Документы по импортозамещению", 
                    icon: "about-documentation-3",
                    link: "#",
                    content: `Content data 0 - 2`
                },
                { 
                    name: "Словарь понятий", 
                    icon: "about-documentation-4",
                    link: "#",
                    content: `Content data 0 - 3`
                },
            ]
        },
    ];
}