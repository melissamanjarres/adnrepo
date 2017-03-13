import {Component, OnInit} from '@angular/core';
import {Client} from "../../classes/client";
import {ClientService} from "../../services/client.service";
import {LazyLoadEvent, SelectItem} from "primeng/components/common/api";
import {CountryService} from "../../services/country.service";
import {AppService} from "../../services/app.service";
import {Breadcrumb} from "../../classes/breadcrumb";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [ClientService, CountryService]
})
export class HomeComponent implements OnInit {
    appService: AppService;
    datasource: Client[];
    clients: Client[];
    totalRecords: number;
    cities: SelectItem[];
    selectedCity: string;
    selectedCities: string[] = [];
    val1: string;
    country: any;
    filteredCountriesSingle: any[];
    date6: Date;
    checked1: boolean = false;

    constructor(appService: AppService, private clientService: ClientService, private countryService: CountryService) {
        this.cities = [];
        this.cities.push({label: 'Select City', value: null});
        this.cities.push({label: 'New York', value: 'NY'});
        this.cities.push({label: 'Rome', value: 'RM'});
        this.cities.push({label: 'London', value: 'LDN'});

        appService.breadcrumbs = [];
        appService.breadcrumbs.push(new Breadcrumb('Inicio', 'home'));
    }

    ngOnInit() {
        this.clientService.get().then(clients => {
            this.datasource = clients;
            this.totalRecords = this.datasource.length;
            this.clients = this.datasource;
            //this.clients = this.datasource.slice(0, 10);
        });
    }

    loadClientsLazy(event: LazyLoadEvent) {
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        setTimeout(() => {
            if (this.datasource) {
                this.clients = this.datasource.slice(event.first, (event.first + event.rows));
            }
        }, 250);
    }

    filterCountrySingle(event) {
        let query = event.query;
        this.countryService.getCountries().then(countries => {
            this.filteredCountriesSingle = this.filterCountry(query, countries);
        });
    }

    filterCountry(query, countries: any[]): any[] {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered: any[] = [];
        for (let i = 0; i < countries.length; i++) {
            let country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        return filtered;
    }
}