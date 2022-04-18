import { Injectable } from "@angular/core";

export interface FilterTabData {
    icon: string,
    name: string,
    model: string,
}

@Injectable({
    providedIn: "root",
})
export class FilterTabService {
    constructor() {}

    /** Проверка на отрисовку блока радио фильтра (filterTab) */
    isRenderCard(model: string, modelId: string) {
        return model === modelId;
    }
}