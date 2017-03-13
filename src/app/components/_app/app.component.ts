import {Component, ViewChild, ElementRef, Pipe, PipeTransform, OnInit, Injectable} from '@angular/core';
import {NotificationComponent} from "../notification/notification.component";
import {AppService} from "../../services/app.service";
import {Router} from "@angular/router";
import {MegamenuComponent} from "../megamenu/megamenu.component";
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Component({
    selector: 'app-screen',
    templateUrl: './app.component.html',
    styleUrls: ['../../styles/sass/main.scss'],
})
export class AppComponent implements OnInit {
    @ViewChild('search')
    search: ElementRef;
    @ViewChild(NotificationComponent) notificationComponent: NotificationComponent;
    @ViewChild(MegamenuComponent) megamenuComponent: MegamenuComponent;

    appService: AppService;
    router: Router;

    constructor(router:Router, appService:AppService){
        this.appService = appService;
        this.router = router;
    }

    ngOnInit() {
        let eventObservable = Observable.fromEvent(this.search.nativeElement, 'keyup')
        eventObservable.subscribe();
    }
}

@Pipe({
    name: 'searchPipe',
    pure: false
})
@Injectable()
export class SearchPipe implements PipeTransform {
    transform(data: any[], searchTerm: string): any[] {
        searchTerm = searchTerm.toLowerCase();
        return data.filter(item => {
            return item.title.toLowerCase().indexOf(searchTerm) !== -1
        });
    }
}