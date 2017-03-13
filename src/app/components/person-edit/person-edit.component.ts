import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppService} from "../../services/app.service";
import {SelectItem} from "primeng/components/common/api";
import {Breadcrumb} from "../../classes/breadcrumb";

@Component({
    selector: 'app-person-edit',
    templateUrl: './person-edit.component.html',
    styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {
    constructor(private route: ActivatedRoute, private appService: AppService) {
        this.appService.breadcrumbs = [];
        this.appService.breadcrumbs.push(new Breadcrumb('Maestro de personas', 'person'));
        this.appService.breadcrumbs.push(new Breadcrumb('Detalle de persona', 'person/1'));
    }

    ngOnInit() {
    }

}
