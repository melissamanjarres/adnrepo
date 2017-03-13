import {Breadcrumb} from "../classes/breadcrumb";
import {Injectable, ViewChild} from "@angular/core";
import {Recent} from "../classes/recent";
import {Router} from "@angular/router";
import * as _ from 'lodash';
import {SearchItem} from "../classes/searchItem";
import {NotificationComponent} from "../components/notification/notification.component";
import {OverlayPanel} from "primeng/components/overlaypanel/overlaypanel";
import {Dialog} from "primeng/components/dialog/dialog";

@Injectable()
export class AppService{
    options: Array<Object> = [];
    searchItems: Array<SearchItem> = [];
    recents: Array<Recent> = [];
    breadcrumbs: Array<Breadcrumb> = [];
    menuActive: string= '';
    loggedIn: boolean = false;
    searchStr: string = '';
    router: Router;
    lastTargetId:string;
    lastSelectedObject:any;
    lastField:Array<string> = [];
    display:boolean = false;

    es:any;

    constructor(router: Router){
        this.router = router;

        this.options['recientes'] = {
            "columns": [
                [
                    {
                        "title": "Recientes",
                        "options": [
                            {"title": "Maestro de clientes", "link": "client"}
                        ]
                    }
                ]
            ]
        }

        this.options['recientes']['columns'][0][Object.keys(this.options['recientes']['columns'][0])[0]].options = this.recents;

        this.options['comercial'] = {
            "columns": [
                [
                    {
                        "title": "Documentos",
                        "options": [
                            {"title": "Nacionalización de compras en el exterior", "link": "nationalization"},
                            {"title": "Oportunidades comerciales", "link": ""},
                            {"title": "Facturación de contado", "link": "billing"},
                            {"title": "Pedidos", "link": ""}
                        ]
                    }
                ],
                [
                    {
                        "title": "Procesos",
                        "options": [
                            {"title": "Gestión de stock", "link": ""},
                            {"title": "Gestión de precios", "link": ""},
                            {"title": "Administración de cuentas corrientes", "link": ""}
                        ]
                    },
                    {
                        "title": "Informes",
                        "options": [
                            {"title": "Reporte de facturación", "link": ""},
                            {"title": "Informes en excel", "link": ""},
                            {"title": "Codigos de barra", "link": ""},
                            {"title": "Reporte de vendedores", "link": ""}
                        ]
                    }
                ],
                [
                    {
                        "title": "Maestros",
                        "options": [
                            {"title": "Maestro de clientes", "link": "client"},
                            {"title": "Maestro de personas", "link": "person"},
                            {"title": "Maestro de terceros", "link": "thirdparty"},
                            {"title": "Maestro de tipos de documento", "link": "documenttype"},
                            {"title": "Maestro de oportunidades comerciales", "link": "opportunities"},
                            {"title": "Maestro de departamentos", "link": "department"},
                            {"title": "Maestro de paises", "link": "country"},
                            {"title": "Demo Form", "link": "demoform"}
                        ]
                    },
                    {
                        "title": "Ejemplos de Mensajes",
                        "options": [
                            {"title": "Mensaje de éxito", "link": ""},
                            {"title": "Mensaje de información", "link": ""},
                            {"title": "Mensaje de error", "link": ""},
                            {"title": "Mensaje de alerta", "link": ""},
                        ]
                    }
                ]
            ]
        };

        this.options['compras'] = {
            "columns": [
                [
                    {
                        "title": "Maestros",
                        "options": [
                            {"title": "Maestro de personas", "link": "master/person/index"}
                        ]
                    }
                ]
            ]
        };

        this.options['tesoreria'] = {
            "columns": [
                [
                    {
                        "title": "Maestros",
                        "options": [
                            {"title": "Maestro de personas", "link": "master/person/index"}
                        ]
                    }
                ]
            ]
        };

        this.options['inventario'] = {
            "columns": [
                [
                    {
                        "title": "Maestros",
                        "options": [
                            {"title": "Maestro de personas", "link": "master/person/index"}
                        ]
                    }
                ]
            ]
        };


        this.options['financiero'] = {
            "columns": [
                [
                    {
                        "title": "Maestros",
                        "options": [
                            {"title": "Maestro de personas", "link": "master/person/index"}
                        ]
                    }
                ]
            ]
        };

        this.options['nomina'] = {
            "columns": [
                [
                    {
                        "title": "Maestros",
                        "options": [
                            {"title": "Maestro de personas", "link": "master/person/index"}
                        ]
                    }
                ]
            ]
        };

        this.options['parametros'] = {
            "columns": [
                [
                    {
                        "title": "Maestros",
                        "options": [
                            {"title": "Maestro de personas", "link": "master/person/index"}
                        ]
                    }
                ]
            ]
        };

        var temp = [];
        for (var key in this.options) {
            _.forEach(this.options[key]['columns'], function (column) {
                _.forEach(column, function (block) {
                    _.forEach(block.options, function (option) {
                        temp.push(new SearchItem(option.title, option.link));
                    });
                });
            });
        }

        this.searchItems = temp;

        this.es = {
            firstDayOfWeek: 1,
            dayNames: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"],
            dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
            dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
        };
    }

    login(){
        this.loggedIn = true;
        this.router.navigateByUrl('/');
    }

    logout() {
        this.loggedIn = false;
    }

    menuMouseLeave() {
        this.menuActive = '';
    }

    handleClickedInput(event, field_array, goto, actions){
        this.lastTargetId = event.target.id;
        this.lastField = field_array;
        this.router.navigateByUrl('/'+goto+'/'+actions)
    }

    goto(title, link) {
        this.recents.push({'title': title, 'link': link});
        this.recents = _.uniqBy(_.reverse(this.recents), 'title');
        this.router.navigateByUrl('/' + link);
        this.searchStr = '';
    }
}