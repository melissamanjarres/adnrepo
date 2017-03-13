import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from "primeng/components/common/api";
import {SGApi} from "../../swagger/co/stackpointer/adn/api/SGApi";
import {Department} from "../../classes/department";
import {Country} from "../../classes/country";
import {AppService} from "../../services/app.service";
import {Breadcrumb} from "../../classes/breadcrumb";
import { Location }  from '@angular/common';

@Component({
  selector: 'app-countryadd',
  templateUrl: './countryadd.component.html',
  styleUrls: ['./countryadd.component.scss']
})
export class CountryaddComponent implements OnInit {
  public country: Country;
  public nombre;
  public id;
  
  constructor(private appService: AppService, private api: SGApi, private location: Location) {
        appService.breadcrumbs = [];
        appService.breadcrumbs.push(new Breadcrumb('Maestro de paises', 'country'));
        appService.breadcrumbs.push(new Breadcrumb('Crear', 'country/create'));
  }

   function

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


  	ngOnInit() {
  	}

  	goBack(){
            this.location.back();
    }

    save(){
        this.id = this.getRandomInt(999, 99999) + "";
        this.country = new Country(this.id);
        this.country.nombre = this.nombre;

        console.log('Saving country: '+this.country.nombre);

        this.api.paisesPost('1', '1', this.country).subscribe(res => {
            this.appService.goto('Maestro de paises', 'country');
        });
    }
  

}
