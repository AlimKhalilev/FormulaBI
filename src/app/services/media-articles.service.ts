import { Injectable } from "@angular/core";
import { FilterBoxData } from "./filter-box.service";

export interface ArticlesCardData {
    date?: string, 
    category?: string,
    title: string,
    linkStr: string,
    link: string,
    filterId: number
}

@Injectable({
    providedIn: "root",
})
export class MediaArticlesService {

    articlesFilterData: FilterBoxData[] = [
        { name: "Импортозамещение", checked: true },
        { name: "Корпоративное управление", checked: false },
        { name: "Управление энергосбытовой деятельностью", checked: false }
    ];

    articlesCardData: ArticlesCardData[] = [
        { 
            date: "27 марта 2022", 
            title: "27 января 2022 г. состоялась Мастер-сессия компании Шерп Софт (Импортозамещение)",
            linkStr: "CorpPort",
            link: "#link",
            filterId: 0
        },
        { 
            date: "28 марта 2022", 
            title: "28 января 2022 г. состоялась Мастер-сессия компании Шерп Софт (Управление энергосбытовой деятельностью)",
            linkStr: "CorpPort",
            link: "#link",
            filterId: 1
        },
        { 
            date: "29 марта 2022", 
            title: "29 января 2022 г. состоялась Мастер-сессия компании Шерп Софт (Корпоративное управление)",
            linkStr: "CorpPort",
            link: "#link",
            filterId: 2
        },
    ];

    constructor() {}

}