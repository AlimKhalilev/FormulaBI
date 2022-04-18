import { ElementRef } from "@angular/core";

export class Intersection {
    static observerOptions = {
        threshold: 0.5 // при каком объеме обхвата блока будет сработан слушатель
    };

    static animObserverCallback(entries: any[]) { // callback функция с настройками
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!entry.target.classList.contains(entry.target.dataset.animation)) {
                    entry.target.classList.add(entry.target.dataset.animation);
                }
            }
        });
    }

    static animObserver = new IntersectionObserver(this.animObserverCallback, this.observerOptions);

    static initAnimEvents(animList: ElementRef[]) {
        animList.forEach(item => {
            this.animObserver.observe(item.nativeElement); // закидываем слушателя на все необходимые элементы
            item.nativeElement.classList.add("slow");
            item.nativeElement.classList.add("animated");
        });
    }
}