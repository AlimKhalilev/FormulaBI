import { Component, Input } from "@angular/core";
import { FilterBoxData } from "src/app/services/filter-box.service";

@Component({
    selector: "filter-box",
    templateUrl: "./filter-box.component.html",
})
export class FilterBoxComponent {
    @Input() filterData!: FilterBoxData[];

    constructor() { }

    ngOnInit() { }

    changeFilter(i: number, e: Event) {
        //console.log(i, (e.target as HTMLInputElement).checked);
    }

    resetFilterForm() {
        this.filterData.forEach((elem, i) => {
            elem.checked = false;
        });
    }
}