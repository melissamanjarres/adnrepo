import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Client} from "../../classes/client";
import {AppService} from "../../services/app.service";
import {Location} from "@angular/common";
import {LocalStorageService} from "ng2-webstorage";
import {ActivatedRoute} from "@angular/router";
import {Breadcrumb} from "../../classes/breadcrumb";
import {SGApi} from "../../swagger/co/stackpointer/adn/api/SGApi";
import {Pais} from "../../swagger/co/stackpointer/adn/model/Pais";

@Component({
    selector: 'app-selection3',
    templateUrl: './selection3.component.html',
    styleUrls: ['./selection3.component.scss'],
    providers: [SGApi]
})
export class Selection3Component implements OnInit {
    appService: AppService
    datasource: Pais[];
    items2: Pais[];
    totalRecords: number;
    actions: number;
    id: string;
    items: Array<Object> = [];




    constructor(private api: SGApi,private route: ActivatedRoute, private localSt: LocalStorageService, private _location: Location, appService: AppService) {
       this.appService = appService;

        //Bill Items
        

        this.api.paisesListarGet('1', '1', '').subscribe(res => {
            this.datasource = res.recursos;
            this.totalRecords = this.datasource.length;
            this.items2 = this.datasource; });

        appService.breadcrumbs = [];
        appService.breadcrumbs.push(new Breadcrumb('Demo Form', 'demoform'));
        appService.breadcrumbs.push(new Breadcrumb('Seleccionar artículo', 'selection2'));
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id']; // (+) converts string 'id' to a number
            //this.client = clients[this.id - 1];
        });
    }

    onRowSelect(event) {
        this.localSt.store(this.id, JSON.stringify(event.data));

        //this.localSt.store(this.appService.lastTargetId, this.appService.lastSelectedObject[this.appService.lastField]);
        //this.appService.router.navigateByUrl('/demoform');
        this._location.back();
    }

}
