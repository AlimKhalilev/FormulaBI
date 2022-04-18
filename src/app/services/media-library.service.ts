import { Injectable } from "@angular/core";
import { FilterBoxData } from "./filter-box.service";
import { ArticlesCardData } from "./media-articles.service";

@Injectable({
    providedIn: "root",
})
export class MediaLibraryService {

    libraryFilterData: FilterBoxData[] = [
        { name: "Тема 1", checked: true },
        { name: "Тема 2", checked: false },
        { name: "Тема 3", checked: false }
    ];

    libraryCardData: ArticlesCardData[] = [
        { 
            category: "Тип публикации (Тема 1)", 
            title: "Заголовок",
            linkStr: "CorpPort",
            link: "#link",
            filterId: 0
        },
        { 
            category: "Тип публикации (Тема 2)", 
            title: "Заголовок",
            linkStr: "CorpPort",
            link: "#link",
            filterId: 1
        },
        { 
            category: "Тип публикации (Тема 3)", 
            title: "Заголовок",
            linkStr: "CorpPort",
            link: "#link",
            filterId: 2
        },
    ];

    constructor() {}

}