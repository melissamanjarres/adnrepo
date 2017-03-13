import {AfterViewChecked, ApplicationInitStatus, Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {AppService} from "../../services/app.service";
import {ClientService} from "../../services/client.service";
import {Client} from "../../classes/client";
import {CountryService} from "../../services/country.service";
import {SelectItem, ConfirmationService} from "primeng/components/common/api";
import * as _ from 'lodash';
import {LocalStorage, LocalStorageService} from "ng2-webstorage";
import {PageScrollConfig, PageScrollInstance, PageScrollService} from "ng2-page-scroll";
import {DOCUMENT} from "@angular/platform-browser";
import {Observable} from "rxjs";
import 'rxjs/Rx';
import {Breadcrumb} from "../../classes/breadcrumb";
import {Departamento} from "../../swagger/co/stackpointer/adn/model/Departamento";
import {SGApi} from "../../swagger/co/stackpointer/adn/api/SGApi";


@Component({
    selector: 'app-demoform',
    templateUrl: './demoform.component.html',
    styleUrls: ['./demoform.component.scss'],
    providers: [ClientService, CountryService, ConfirmationService]
})
export class DemoformComponent implements OnInit, AfterViewChecked {
    appService: AppService;
    clientService: ClientService;
    datasource: Client[];
    totalRecords: number;

    @LocalStorage()
    public code;

    @LocalStorage()
    public code1;

    @LocalStorage()
    public code2;

    @LocalStorage()
    public id;

    @LocalStorage()
    public name;

    @LocalStorage()
    public email;

    @LocalStorage()
    public gender;

    @LocalStorage()
    public reference;

    @LocalStorage()
    public description;

    @LocalStorage()
    public price;

    cities: SelectItem[];
    clients: Client[];
    billItems: Array<Object> = [];
    filteredCountriesSingle: any[];
    filteredCountriesSingle2: any[];
    selectedCity: string;
    activeCheckbox: string[] = [];
    selectedCities: string[] = [];
    masked: string;
    countryService: CountryService;
    confirmationService: ConfirmationService;
    valu1:boolean = false;
    valu2:boolean = false;

    display: boolean = false;

    showDialog() {
        this.display = true;
    }

    es: any;


    constructor( private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: Document, private localSt: LocalStorageService, confirmationService: ConfirmationService, appService: AppService, clientService: ClientService, countryService: CountryService) {


        this.confirmationService = confirmationService;
        this.appService = appService;
        this.clientService = clientService;
        this.countryService = countryService;

        this.cities = [];
        this.cities.push({label: 'Seleccionar ciudad', value: null});
        this.cities.push({label: 'New York', value: 'NY'});
        this.cities.push({label: 'Rome', value: 'RM'});
        this.cities.push({label: 'London', value: 'LDN'});

        //Bill Itemsinsert
        this.billItems.push({'reference': '123', 'description': 'Bicicleta', 'price': 1200000});
        this.billItems.push({'reference': '456', 'description': 'Moto', 'price': 5500000});

        PageScrollConfig.defaultDuration = 100;

        appService.breadcrumbs = [];
        appService.breadcrumbs.push(new Breadcrumb('Demo Form', 'demoform'));
    }


    confirm() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
                //Actual logic to perform a confirmation
            }
        });
    }

    ngOnInit() {
        this.clientService.get().then(clients => {
            this.datasource = clients;
            this.totalRecords = this.datasource.length;
            this.clients = this.datasource;
            //this.clients = this.datasource.slice(0, 10);
        });

        this.es = {
            firstDayOfWeek: 1,
            dayNames: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"],
            dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
            dayNamesMin: ["Do","Lu","Ma","Mi","Ju","Vi","Sa"],
            monthNames: [ "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ],
            monthNamesShort: [ "Ene", "Feb", "Mar", "Abr", "May", "Jun","Jul", "Ago", "Sep", "Oct", "Nov", "Dic" ]
        };

    }

    filterCountrySingle(event) {
        let query = event.query;
        this.countryService.getCountries().then(countries => {
            this.filteredCountriesSingle = this.filterCountry(query, countries);
            this.filteredCountriesSingle2 = this.filterCountry(query, countries);
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

    insert(){
        this.billItems.push({'reference': this.reference, 'description': this.description, 'price': this.price});
        this.localSt.clear('reference');
        this.localSt.clear('description');
        this.localSt.clear('price');
    }


    ngAfterViewChecked() {
        /*let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#reference');
        this.pageScrollService.start(pageScrollInstance);*/
    }
}
