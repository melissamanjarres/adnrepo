import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Client} from "../../classes/client";
import {AppService} from "../../services/app.service";
import {Location} from "@angular/common";
import {LocalStorageService} from "ng2-webstorage";
import {ActivatedRoute} from "@angular/router";
import {Breadcrumb} from "../../classes/breadcrumb";

@Component({
    selector: 'app-selection2',
    templateUrl: './selection2.component.html',
    styleUrls: ['./selection2.component.scss']
})
export class Selection2Component {
    appService: AppService
    billItems: Array<Object> = [];
    totalRecords: number;
    actions: number;

    constructor(private route: ActivatedRoute, private localSt: LocalStorageService, private _location: Location, appService: AppService) {
        this.appService = appService;

      //Bill Items
      this.billItems.push({'reference': '123', 'description': 'Bicicleta', 'price': 1200000});
      this.billItems.push({'reference': '456', 'description': 'Moto', 'price': 5500000});
      this.billItems.push({'reference': '842', 'description': 'Memoria RAM 2GB', 'price': 125000});
      this.billItems.push({'reference': '841', 'description': 'Memoria RAM 4GB', 'price': 198000});
      this.billItems.push({'reference': '125', 'description': 'Pantalla 21 Pulgadas', 'price': 575000});

        appService.breadcrumbs = [];
        appService.breadcrumbs.push(new Breadcrumb('Demo Form', 'demoform'));
        appService.breadcrumbs.push(new Breadcrumb('Seleccionar artículo', 'selection2'));
    }
    onRowSelect(event) {
        this.appService.lastSelectedObject = event.data;
        console.log(this.appService.lastField);

        for (var i = 0; i < this.appService.lastField.length; i++) {
            console.log("Model: " + this.appService.lastField[i] + " - Value: " + this.appService.lastSelectedObject[this.appService.lastField[i]]);
            this.localSt.store(this.appService.lastField[i], this.appService.lastSelectedObject[this.appService.lastField[i]]);
        }

        //this.localSt.store(this.appService.lastTargetId, this.appService.lastSelectedObject[this.appService.lastField]);
        this.appService.router.navigateByUrl('/demoform');
    }

}
