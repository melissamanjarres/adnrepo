import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Client} from "../../classes/client";
import {AppService} from "../../services/app.service";
import {Breadcrumb} from "../../classes/breadcrumb";
import {Router} from "@angular/router";
import {ConfirmationService} from "primeng/components/common/api";
import * as _ from 'lodash';
import {SGApi} from "../../swagger/co/stackpointer/adn/api/SGApi";
import {Departamento} from "../../swagger/co/stackpointer/adn/model/Departamento";

@Component({
    selector: 'master-department',
    templateUrl: './department.component.html',
    styleUrls: ['./department.component.scss'],
    providers: [ClientService, ConfirmationService, SGApi]
})
export class DepartmentComponent implements OnInit {
    datasource: Departamento[];
    items: Departamento[];
    totalRecords: number;
    appService: AppService;
    router: Router;
    confirmationService: ConfirmationService;

    constructor(private api: SGApi, confirmationService: ConfirmationService, router: Router, appService: AppService, private clientService: ClientService) {
        this.appService = appService;
        this.confirmationService = confirmationService;

        this.router = router;
        appService.breadcrumbs = [];
        appService.breadcrumbs.push(new Breadcrumb('Maestro de departamentos', 'deparment'));
    }

    ngOnInit() {
        this.api.departamentosListarGet('1', '1', '').subscribe(res => {
            this.datasource = res.recursos;
            this.totalRecords = this.datasource.length;
            this.items = this.datasource;
        });

    }

    /*onRowSelect(client) {
     this.router.navigate(['/client', client.id])
     }*/

    onRowSelect(event) {
        this.router.navigate(['/department', event.data.id])
    }

    delete(item) {
        this.confirmationService.confirm({
            message: '¿Seguro quieres borrar este registro?',
            accept: () => {
                this.api.departamentosIdDelete('1', '1', item.id+"").subscribe(res => {});
            }
        });
    }
}
