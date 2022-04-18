import { Injectable } from "@angular/core";

export interface AccordionData {
    filterId?: number,
    filterModel?: string,
    isOpened: boolean,
    title: string, 
    content: string
}

@Injectable({
    providedIn: "root",
})
export class AccordionService {

    constructor() {}

}