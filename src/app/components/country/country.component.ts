import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Client} from "../../classes/client";
import {AppService} from "../../services/app.service";
import {Breadcrumb} from "../../classes/breadcrumb";
import {Router} from "@angular/router";
import {ConfirmationService} from "primeng/components/common/api";
import * as _ from 'lodash';
import {SGApi} from "../../swagger/co/stackpointer/adn/api/SGApi";
import {Pais} from "../../swagger/co/stackpointer/adn/model/Pais";

@Component({
  selector: 'master-country',
  templateUrl: './country.component.html',
  providers: [ClientService, ConfirmationService, SGApi]
})
export class CountryComponent implements OnInit {

    datasource: Pais[];
    items: Pais[];
    totalRecords: number;
    appService: AppService;
    router: Router;
    confirmationService: ConfirmationService;

    constructor(private api: SGApi, confirmationService: ConfirmationService, router: Router, appService: AppService, private clientService: ClientService) {
        this.appService = appService;
        this.confirmationService = confirmationService;

        this.router = router;
        appService.breadcrumbs = [];
        appService.breadcrumbs.push(new Breadcrumb('Maestro de paises', 'country'));
    }

    ngOnInit() {
        this.api.paisesListarGet('1', '1', '').subscribe(res => {
            this.datasource = res.recursos;
            this.totalRecords = this.datasource.length;
            this.items = this.datasource;
        });

    }


    onRowSelect(event) {
        this.router.navigate(['/country', event.data.id])
    }

    delete(item) {
        this.confirmationService.confirm({
            message: '¿Seguro quieres borrar este registro?',
            accept: () => {
                this.api.paisesIdDelete('1', '1', item.id+"").subscribe(res => {});
            }
        });
    }

}

