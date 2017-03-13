import {Component, OnInit, OnDestroy} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Client} from "../../classes/client";
import {AppService} from "../../services/app.service";
import {Breadcrumb} from "../../classes/breadcrumb";
import {ActivatedRoute} from "@angular/router";
import {SelectItem} from "primeng/components/common/api";
import {LocalStorage} from "ng2-webstorage";
import { Location }  from '@angular/common';
import {SGApi} from "../../swagger/co/stackpointer/adn/api/SGApi";

@Component({
    selector: 'master',
    templateUrl: './client.view.component.html',
    styleUrls: ['./client.view.component.scss'],
    providers: [ClientService, SGApi]
})
export class ClientViewComponent implements OnInit, OnDestroy {
    public id;
    public nombre;
    sub: any;
    clientService: ClientService;
    appService: AppService;
    datasource: Client[];
    clients: Client[];
    client: Client;
    totalRecords: number;

    filteredOptions: string[] = [];
    originalOptions: string[] = ['Opcion 1', 'Opcion 2', 'Opcion 3'];

    /**/
    cities: SelectItem[];
    selectedCity: string;
    activeClient: string[] = [];
    activeCheckbox1: string[] = [];
    activeCheckbox2: string[] = [];
    val1: string;
    country: any;
    filteredCountriesSingle: any[];
    date6: Date;
    checked1: boolean = false;

    es: any;

    @LocalStorage()
    public reference;

    @LocalStorage()
    public description;

    constructor(private api: SGApi, clientService: ClientService, private route: ActivatedRoute, appService: AppService, private location: Location) {
        this.cities = [];
        this.cities.push({label: 'Select City', value: null});
        this.cities.push({label: 'New York', value: 'NY'});
        this.cities.push({label: 'Rome', value: 'RM'});
        this.cities.push({label: 'London', value: 'LDN'});

        this.clientService = clientService;
        this.appService = appService;

        this.appService.breadcrumbs = [];
        this.appService.breadcrumbs.push(new Breadcrumb('Maestro de clientes', 'client'));
        this.appService.breadcrumbs.push(new Breadcrumb('Detalle de cliente', 'client/1'))

        this.client = new Client;
        this.client.id = 98;
        this.client.name = 'Pamela Carter';
        this.client.email = 'pcarter2p@opera.com';
        this.client.gender = "Female";
        this.client.language = "Kurdish";
        this.client.title = "Product Management";
    }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.api.clientesIdGet('1', '1', this.id+'', {'Content-Type': 'application/json'}).subscribe(res => {
            this.client= new Client();
            this.client.id = +res.codigo
            this.client.name = res.nombre;
            this.id = +res.codigo;
            this.nombre = this.client.name;

            this.sub = this.route.params.subscribe(params => {
                this.id = +params['id']; // (+) converts string 'id' to a number
                //this.client = clients[this.id - 1];
            });
            console.log(res);
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

    goBack(): void{
            this.location.back();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    filterOptions(event) {
        let query = event.query;
        let filtered: any[] = [];

        for (let i = 0; i < this.originalOptions.length; i++) {
            let option = this.originalOptions[i];
            if (option.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push({name: option});
            }
        }

        this.filteredOptions = filtered;
        console.log(this.filteredOptions);
    }
}
