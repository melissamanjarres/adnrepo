import {Component, OnInit} from '@angular/core';
import {ConfirmationService} from "primeng/components/common/api";
import {SGApi} from "../../swagger/co/stackpointer/adn/api/SGApi";
import {Department} from "../../classes/department";
import {Country} from "../../classes/country";
import {AppService} from "../../services/app.service";
import {Breadcrumb} from "../../classes/breadcrumb";
import { Location }  from '@angular/common';

@Component({
    selector: 'app-department-create',
    templateUrl: './department-create.component.html',
    styleUrls: ['./department-create.component.scss'],
    providers: [ConfirmationService, SGApi]

})
export class DepartmentCreateComponent implements OnInit {
    public department: Department;
    public nombre;
    public countryid;


    constructor(private appService: AppService, private api: SGApi, private location: Location) {
        appService.breadcrumbs = [];
        appService.breadcrumbs.push(new Breadcrumb('Maestro de departamentos', 'department'));
        appService.breadcrumbs.push(new Breadcrumb('Crear', 'department/create'));
    }

    function

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    ngOnInit() {

    }

    goBack(): void{
            this.location.back();
    }

    save() {
        this.department = new Department();
        this.department.id = this.getRandomInt(999, 99999) + "";
        this.department.nombre = this.nombre;
        this.department.pais = new Country(this.countryid);

        console.log('Saving department: '+this.department.nombre);

        this.api.departamentosPost('1', '1', this.department).subscribe(res => {
            this.appService.goto('Maestro de departamentos', 'department');
        });
    }
}
