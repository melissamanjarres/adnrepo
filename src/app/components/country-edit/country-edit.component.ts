import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from "primeng/components/common/api";
import {SGApi} from "../../swagger/co/stackpointer/adn/api/SGApi";
import {Country} from "../../classes/country";
import {AppService} from "../../services/app.service";
import {Breadcrumb} from "../../classes/breadcrumb";
import {ActivatedRoute} from "@angular/router";
import { Location }  from '@angular/common';

@Component({
  selector: 'app-country-edit',
  templateUrl: './country-edit.component.html',
  styleUrls: ['./country-edit.component.scss'],
  providers: [ConfirmationService, SGApi]
})
export class CountryEditComponent implements OnInit {
  public country: Country;
  public nombre;
  public id;
  
  constructor(private route: ActivatedRoute, private appService: AppService, private api: SGApi, private location: Location) {
    appService.breadcrumbs = [];
    appService.breadcrumbs.push(new Breadcrumb('Maestro de paises', 'country'));
    appService.breadcrumbs.push(new Breadcrumb('Editar', ''));
  }

  function

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.api.paisesIdGet('1', '1', this.id+'', {'Content-Type': 'application/json'}).subscribe(res => {
            this.country = new Country(this.id);
            this.country.nombre = res.nombre;
            this.nombre = res.nombre;
        });
    }

    goBack(): void{
            this.location.back();
    }

    update() {
        this.country.nombre = this.nombre;

        this.api.paisesIdPut('1', '1', this.id+'', this.country, {'Content-Type': 'application/json'}).subscribe(res => {
            this.appService.goto('Maestro de paises', 'country');
        });
    }

}










