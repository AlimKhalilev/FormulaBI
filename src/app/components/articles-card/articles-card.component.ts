import { Component, Input, OnInit } from "@angular/core";
import { ArticlesCardData } from "src/app/services/media-articles.service";
 
@Component({
    selector: "articles-card",
    templateUrl: "./articles-card.component.html",
  })
export class ArticlesCardComponent {
    @Input() cardData!: ArticlesCardData;
    
    constructor() {

    }

    ngOnInit() {

    }
}