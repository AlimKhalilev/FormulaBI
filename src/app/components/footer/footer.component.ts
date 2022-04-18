import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/services/app.service";
 
@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
  })
export class FooterComponent {
    appService: any;

    constructor(appService: AppService) {
        this.appService = appService;
    }

    ngOnInit() {
        // console.log("init footer");
    }
}