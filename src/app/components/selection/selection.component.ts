import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Client} from "../../classes/client";
import {AppService} from "../../services/app.service";
import {Location} from "@angular/common";
import {LocalStorageService} from "ng2-webstorage";
import {ActivatedRoute} from "@angular/router";
import {Breadcrumb} from "../../classes/breadcrumb";

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
  providers: [ClientService]
})
export class SelectionComponent implements OnInit {
  clientService: ClientService;
    appService: AppService
  clients: Client[];
  datasource: Client[];
  totalRecords: number;
  actions: number;

  constructor(private route: ActivatedRoute, private localSt: LocalStorageService, private _location: Location, appService: AppService, clientService: ClientService) {
    this.appService = appService;
    this.clientService = clientService;

    appService.breadcrumbs = [];
    appService.breadcrumbs.push(new Breadcrumb('Demo Form', 'demoform'));
    appService.breadcrumbs.push(new Breadcrumb('Seleccionar artículo', 'selection'));
  }

  ngOnInit() {
    this.actions = this.route.snapshot.params['actions'];

    this.clientService.get().then(clients => {
      this.datasource = clients;
      this.totalRecords = this.datasource.length;
      this.clients = this.datasource;
    });
  }

  onRowSelect(event) {
      this.appService.lastSelectedObject = event.data;
      console.log(this.appService.lastField);

      for (var i = 0; i < this.appService.lastField.length; i++) {
        console.log("Model: "+ this.appService.lastField[i] + " - Value: "+ this.appService.lastSelectedObject[this.appService.lastField[i]]);
        this.localSt.store(this.appService.lastField[i], this.appService.lastSelectedObject[this.appService.lastField[i]]);
      }

      //this.localSt.store(this.appService.lastTargetId, this.appService.lastSelectedObject[this.appService.lastField]);
      this.appService.router.navigateByUrl('/demoform');
  }

}
