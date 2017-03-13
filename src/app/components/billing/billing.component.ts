import { Component, OnInit } from '@angular/core';
import {SelectItem} from "primeng/components/common/api";

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
	check1: string[] = [];
	check2: string[] = [];
	years: SelectItem[];
    selectedYear: string;
	documentType:string;
	documentTypesFiltered: string[] = [];
    documentTypesOriginal: string[] = ['Cedula de ciudadania', 'NIT', 'Cedula de extranjeria'];

    cars: SelectItem[];
    selectedCar: string;


  constructor() { 
  	this.years = [];
    this.years.push({label: '2017', value: '2017'});
    this.years.push({label: '2016', value: '2016'});
    this.years.push({label: '2015', value: '2015'});
    this.years.push({label: '2014', value: '2014'});

    this.cars = [];
    this.cars.push({label: 'Audi', value: 'Audi'});
    this.cars.push({label: 'BMW', value: 'BMW'});
    this.cars.push({label: 'Fiat', value: 'Fiat'});
    this.cars.push({label: 'Ford', value: 'Ford'});
    this.cars.push({label: 'Honda', value: 'Honda'});
    this.cars.push({label: 'Jaguar', value: 'Jaguar'});
    this.cars.push({label: 'Mercedes', value: 'Mercedes'});
    this.cars.push({label: 'Renault', value: 'Renault'});
    this.cars.push({label: 'VW', value: 'VW'});
    this.cars.push({label: 'Volvo', value: 'Volvo'});
  }

  ngOnInit() {
  }

  filterDocumentTypes(event) {
        let query = event.query;
        let filtered: any[] = [];

        for (let i = 0; i < this.documentTypesOriginal.length; i++) {
            let option = this.documentTypesOriginal[i];
            if (option.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push({name: option});
            }
        }

        this.documentTypesFiltered = filtered;
    }

}
