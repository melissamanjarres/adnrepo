import {Component, AfterViewInit, ElementRef, ViewChild, Injectable} from '@angular/core';
import {AppService} from "./services/app.service";

declare var Ultima: any;

@Component({
    selector: 'adn-root',
    template: '<router-outlet></router-outlet>'
})
@Injectable()
export class AdnComponent implements AfterViewInit{
    appService:AppService;

    constructor(appService:AppService, private el: ElementRef){
        this.appService = appService;
    }

    ngAfterViewInit() {
        Ultima.init(this.el.nativeElement);
    }

}