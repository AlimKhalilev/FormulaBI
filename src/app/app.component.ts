import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
    @ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>;
    title = 'formulabi';

    ngAfterViewInit() {
        this.videoRef.nativeElement.muted = true;
        this.videoRef.nativeElement.play();
    }
}
