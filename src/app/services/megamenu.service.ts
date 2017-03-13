import {Injectable, Host} from '@angular/core';
import {Router} from "@angular/router";
import {AppService} from "./app.service";
import {AdnComponent} from "../adn.component";

@Injectable()
export class MegamenuService {
    router: Router;
    appService: AppService;

    constructor(appService: AppService, router: Router) {
        this.router =  router;
        this.appService = appService;
    }

    get(menuname: string): Object {
        return this.appService.options[menuname]['columns'];
    }
}