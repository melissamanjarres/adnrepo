import {Component, OnInit} from '@angular/core';
import {ConfirmationService} from "primeng/components/common/api";
import {SGApi} from "../../swagger/co/stackpointer/adn/api/SGApi";
import {Department} from "../../classes/department";
import {Country} from "../../classes/country";
import {AppService} from "../../services/app.service";
import {Breadcrumb} from "../../classes/breadcrumb";
import {ActivatedRoute} from "@angular/router";
import { Location }  from '@angular/common';



@Component({
    selector: 'app-department-edit',
    templateUrl: './department-edit.component.html',
    styleUrls: ['./department-edit.component.scss'],
    providers: [ConfirmationService, SGApi]

})
export class DepartmentEditComponent implements OnInit {
    public department: Department;
    public nombre;
    public id;
    public pais;

    constructor(private route: ActivatedRoute, private appService: AppService, private api: SGApi, private location: Location) {
        appService.breadcrumbs = [];
        appService.breadcrumbs.push(new Breadcrumb('Maestro de departamentos', 'department'));
        appService.breadcrumbs.push(new Breadcrumb('Editar', ''));
    }

    function

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.api.departamentosIdGet('1', '1', this.id+'', {'Content-Type': 'application/json'}).subscribe(res => {
            this.department = new Department();
            this.department.id = res.id
            this.department.nombre = res.nombre;
            this.department.pais = res.pais;
            this.nombre = this.department.nombre;
            this.pais = this.department.pais.id;
            console.log(res);
        });
    }

    goBack(): void{
            this.location.back();
    }

    update() {
        this.department.nombre = this.nombre;

        this.api.departamentosIdPut('1', '1', this.id+'', this.department, {'Content-Type': 'application/json'}).subscribe(res => {
            this.appService.goto('Maestro de departamentos', 'department');
        });
    }
}
