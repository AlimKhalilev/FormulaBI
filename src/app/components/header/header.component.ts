import { Component, OnInit, Renderer2 } from "@angular/core";
import { AppService } from "src/app/services/app.service";
 
@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
  })
export class HeaderComponent {
    appService: any;

    constructor(appService: AppService, private renderer: Renderer2) {
        this.appService = appService;
    }

    ngOnInit() {
        // console.log("init header");
    }

    onBurgerClick() {
        this.appService.burgerMenuOpened = !this.appService.burgerMenuOpened;
        if (this.appService.burgerMenuOpened) {
            this.renderer.addClass(document.querySelector("app-root"), 'hideScroll');
        }
        else {
            this.renderer.removeClass(document.querySelector("app-root"), 'hideScroll');
        }
    }
}