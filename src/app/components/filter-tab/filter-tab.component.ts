import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FilterTabData } from "src/app/services/filter-tab.service";
import { SolutionsService } from "src/app/services/solutions.service";

@Component({
    selector: "filter-tab",
    templateUrl: "./filter-tab.component.html",
})
export class FilterTabComponent {
    @Input() filterData!: FilterTabData[];
    @Input() model!: string;
    @Output() valueChosen: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    choose(value: string) {
        this.valueChosen.emit(value);
    }
}