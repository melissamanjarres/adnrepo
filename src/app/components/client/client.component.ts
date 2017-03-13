import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Client} from "../../classes/client";
import {AppService} from "../../services/app.service";
import {Breadcrumb} from "../../classes/breadcrumb";
import {Router} from "@angular/router";
import {ConfirmationService} from "primeng/components/common/api";
import * as _ from 'lodash';

@Component({
    selector: 'master',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss'],
    providers: [ClientService, ConfirmationService]
})
export class ClientComponent implements OnInit {
    datasource: Client[];
    clients: Client[];
    totalRecords: number;
    appService: AppService;
    router: Router;
    confirmationService: ConfirmationService;

    constructor(confirmationService: ConfirmationService, router: Router, appService: AppService, private clientService: ClientService) {
        this.appService = appService;
        this.confirmationService = confirmationService;

        this.router = router;
        appService.breadcrumbs = [];
        appService.breadcrumbs.push(new Breadcrumb('Maestro de clientes', 'client'));
    }

    ngOnInit() {
        this.clientService.get().then(clients => {
            this.datasource = clients;
            this.totalRecords = this.datasource.length;
            this.clients = this.datasource;
            //this.clients = this.datasource.slice(0, 10);
        });
    }

    /*onRowSelect(client) {
        this.router.navigate(['/client', client.id])
    }*/

    onRowSelect(event) {
        //console.log(event.data);
        this.router.navigate(['/client', event.data.id])
    }
    
    delete(client){
        this.confirmationService.confirm({
            message: '¿Seguro quieres borrar este registro?',
            accept: () => {
                _.remove(this.clients, client);
            }
        });
    }
}
