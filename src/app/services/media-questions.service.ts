import { Injectable } from "@angular/core";
import { AccordionData } from "./accordion.service";
import { FilterBoxData } from "./filter-box.service";

export interface ArticlesCardData {
    date: string, 
    title: string,
    link: string,
    filterId: number
}

@Injectable({
    providedIn: "root",
})
export class MediaQuestionsService {

    accordionFilterData: FilterBoxData[] = [
        { name: "Общие вопросы", checked: true },
        { name: "Выбор решения", checked: false }
    ];

    accordionData: AccordionData[] = [
        {
            filterId: 0,
            isOpened: true,
            title: "У нас уже есть целый ряд программ для автоматизации. Чтобы создать общую экосистему – нам нужно заново всё переделывать?",
            content: `
                <p>Не нужно. Наша методика позволяет не делать экосистему с нуля, а взять уже имеющиеся у вас программы и встроить их в общую систему. Это позволит:</p>
                <br>
                <ul class="baseList">
                    <li>сохранить и бережно перенести все имеющиеся данные;</li>
                    <li>унифицировать интерфейс;</li>
                    <li>исправить ошибки старых программ и модернизировать прежний функционал.</li>
                </ul>
            `
        },
        {
            filterId: 0,
            isOpened: false,
            title: "У нас в компании уже автоматизированы основные процессы, зачем нам нужна цифровая экосистема?",
            content: `
                <p>Не нужно. Наша методика позволяет не делать экосистему с нуля, а взять уже имеющиеся у вас программы и встроить их в общую систему. Это позволит:</p>
                <br>
                <ul class="baseList">
                    <li>сохранить и бережно перенести все имеющиеся данные;</li>
                    <li>унифицировать интерфейс;</li>
                    <li>исправить ошибки старых программ и модернизировать прежний функционал.</li>
                </ul>
            `
        },
        {
            filterId: 1,
            isOpened: false,
            title: "Заголовок для выбора решений",
            content: `
                <p>Подробный текст выбора решения</p>
            `
        }
    ];

    constructor() {}

}