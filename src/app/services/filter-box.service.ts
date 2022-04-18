import { Injectable } from "@angular/core";

export interface FilterBoxData {
    name: string, 
    checked: boolean
}

@Injectable({
    providedIn: "root",
})
export class FilterBoxService {
    constructor() {}

    /** Проверка на отрисовку блока фильтра */
    isRenderCard(filterData: FilterBoxData[], id: number) {
        return filterData[id] ? filterData[id].checked : false;
    }
}