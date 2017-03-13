import {Component, Input, OnInit, ViewChild, Host, Output, EventEmitter} from '@angular/core';
import {MegamenuService} from "../../services/megamenu.service";
import {AppService} from "../../services/app.service";
import {NotificationComponent} from "../notification/notification.component";
import * as _ from 'lodash';

@Component({
    selector: 'megamenu',
    templateUrl: './megamenu.component.html',
    styleUrls: ['./megamenu.component.scss'],
    providers: [MegamenuService, NotificationComponent]
})
export class MegamenuComponent implements OnInit{

    @Input() name;
    @Input() title;
    @Output() notificate = new EventEmitter();
    appService: AppService;
    megamenuService: MegamenuService;
    menuOptions;

    ngOnInit(): void {
        this.menuOptions = this.megamenuService.get(this.name);
    }

    constructor(appService: AppService, megamenuService: MegamenuService) {
        this.appService = appService;
        this.megamenuService = megamenuService;
    }

    goto(event, title, link) {

        if (title == 'Mensaje de éxito') {
            this.notificate.emit({title: 'Mensaje de éxito', type: 'success'});
        } else if (title == 'Mensaje de información') {
            this.notificate.emit({title: 'Mensaje de información', type: 'info'});
        } else if (title == 'Mensaje de error') {
            this.notificate.emit({title: 'Mensaje de error', type: 'error'});
        } else if (title == 'Mensaje de alerta') {
            this.notificate.emit({title: 'Mensaje de alerta', type: 'warning'});
        } else {
            this.appService.recents.push({'title': title, 'link': link});
            this.appService.recents = _.uniqBy(_.reverse(this.appService.recents), 'title');
            this.appService.router.navigateByUrl('/' + link);
            this.appService.searchStr = '';
        }

        this.appService.menuMouseLeave();

    }

}