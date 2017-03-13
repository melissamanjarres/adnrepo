import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Client} from "../../classes/client";
import {AppService} from "../../services/app.service";
import {Breadcrumb} from "../../classes/breadcrumb";
import {Router} from "@angular/router";
import {ConfirmationService} from "primeng/components/common/api";
import * as _ from 'lodash';

@Component({
    selector: 'master-thirdparty',
    templateUrl: './thirdparty.component.html',
    styleUrls: ['./thirdparty.component.scss'],
    providers: [ClientService, ConfirmationService]
})
export class ThirdpartyComponent implements OnInit {

    constructor(private appService: AppService) {
        appService.breadcrumbs = [];
        appService.breadcrumbs.push(new Breadcrumb('Maestro de terceros', 'thirdparty'));
    }

    ngOnInit() {
    }
}
