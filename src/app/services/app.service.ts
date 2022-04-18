import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class AppService {
    constructor() {}
    mediaPageId: number = 1; // сохраняем state текущей медиа странички при роуте на другую страницу
    burgerMenuOpened: boolean = false;  // флаг открытого/закрытого бургерного меню

    isHomePageVisited: boolean = false; // флаг посещения главной страницы (для стопа анимации при редиректе)
    isMediaPageVisited: boolean = false; // флаг посещения страницы "Медиа" (для стопа анимации при редиректе)
    isAboutPageVisited: boolean = false; // флаг посещения страницы "О компании" (для стопа анимации при редиректе)
    isSolutionsPageVisited: boolean = false; // флаг посещения страницы "Решения" (для стопа анимации при редиректе)
    isContactsPageVisited: boolean = false; // флаг посещения страницы "Контакты" (для стопа анимации при редиректе)
    isClientsPageVisited: boolean = false; // флаг посещения страницы "Клиентам" (для стопа анимации при редиректе)
    isTemplatePageVisited: boolean = false; // флаг посещения страницы "Template" (для стопа анимации при редиректе)
}