import 'hammerjs';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';

import {AdnComponent} from "./adn.component";
import {LoginComponent} from './components/_login/login.component';
import {AppComponent, SearchPipe} from "./components/_app/app.component";
import {NotificationComponent} from "./components/notification/notification.component";
import {AppService} from "./services/app.service";
import {HomeComponent} from "./components/home/home.component";
import {Routes, RouterModule} from "@angular/router";
import {MegamenuComponent} from './components/megamenu/megamenu.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {DatatableComponent} from './components/datatable/datatable.component';
import {DataService} from "./services/data.service";
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {PaginatorComponent} from './components/paginator/paginator.component';
import {DataTableModule} from "primeng/components/datatable/datatable";
import {DropdownModule} from "primeng/components/dropdown/dropdown";
import {InputTextModule} from "primeng/components/inputtext/inputtext";
import {CheckboxModule} from "primeng/components/checkbox/checkbox";
import {InputTextareaModule} from "primeng/components/inputtextarea/inputtextarea";
import {RadioButtonModule} from "primeng/components/radiobutton/radiobutton";
import {TabViewModule} from "primeng/components/tabview/tabview";
import {AutoCompleteModule} from "primeng/components/autocomplete/autocomplete";
import {CalendarModule} from "primeng/components/calendar/calendar";
import {InputSwitchModule} from "primeng/components/inputswitch/inputswitch";
import {TooltipModule} from "primeng/components/tooltip/tooltip";
import {ClickOutsideModule} from 'ng-click-outside';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {ClientComponent} from "./components/client/client.component";
import {ClientViewComponent} from "./components/client/client.view.component";
import {TopbarComponent} from './components/topbar/topbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {DemoformComponent} from './components/demoform/demoform.component';
import {DialogModule} from "primeng/components/dialog/dialog";
import {ConfirmDialog, ConfirmDialogModule} from "primeng/components/confirmdialog/confirmdialog";
import {ConfirmationService} from "primeng/components/common/api";
import {InputMaskModule} from "primeng/components/inputmask/inputmask";
import {BillingComponent} from './components/billing/billing.component';
import {SelectionComponent} from './components/selection/selection.component';
import {OverlayPanelModule} from "primeng/components/overlaypanel/overlaypanel";
import {Ng2Webstorage} from "ng2-webstorage";
import {Selection2Component} from './components/selection2/selection2.component';
import {Ng2PageScrollModule} from "ng2-page-scroll";
import {Selection3Component} from './components/selection3/selection3.component';
import {PersonComponent} from './components/person/person.component';
import {DepartmentComponent} from './components/department/department.component';
import {DepartmentCreateComponent} from './components/department-create/department-create.component';
import {DepartmentEditComponent} from './components/department-edit/department-edit.component';
import {SelectinputComponent} from './components/selectinput/selectinput.component';
import {SelectinputdblComponent} from './components/selectinputdbl/selectinputdbl.component';
import {InserttableComponent} from './components/inserttable/inserttable.component';
import {TableComponent} from './components/table/table.component';
import {PersonEditComponent} from './components/person-edit/person-edit.component';
import {ThirdpartyComponent} from './components/thirdparty/thirdparty.component';
import {ThirdpartyEditComponent} from './components/thirdparty-edit/thirdparty-edit.component';
import { CountryComponent } from './components/country/country.component';
import { CountryaddComponent } from './components/countryadd/countryadd.component';
import { CountryEditComponent } from './components/country-edit/country-edit.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'demoform',
        component: DemoformComponent
    },
    {
        path: 'client',
        component: ClientComponent
    },
    {
        path: 'client/:id',
        component: ClientViewComponent
    },
    {
        path: 'department',
        component: DepartmentComponent
    },
    {
        path: 'department/create',
        component: DepartmentCreateComponent
    },
    {
        path: 'department/:id',
        component: DepartmentEditComponent
    },
    {
       path: 'country',
       component: CountryComponent 
    },
    {
        path: 'country/create',
        component: CountryaddComponent
    },
    {
        path: 'country/:id',
        component: CountryEditComponent
    },
    {
        path: 'person',
        component: PersonComponent
    },
    {
        path: 'person/:id',
        component: PersonEditComponent
    },
    {
        path: 'thirdparty',
        component: ThirdpartyComponent
    },
    {
        path: 'thirdparty/:id',
        component: ThirdpartyEditComponent
    },
    {
        path: 'billing',
        component: BillingComponent
    },
    {
        path: 'selection/:actions',
        component: SelectionComponent
    },
    {
        path: 'selection2/:actions',
        component: Selection2Component
    },
    {
        path: 'selection3/:actions/:id',
        component: Selection3Component
    }
    
];

@NgModule({
    declarations: [
        AdnComponent,
        LoginComponent,
        AppComponent,
        NotificationComponent,
        HomeComponent,
        MegamenuComponent,
        SidebarComponent,
        DatatableComponent,
        BreadcrumbComponent,
        PaginatorComponent,
        ClientComponent,
        ClientViewComponent,
        SearchPipe,
        TopbarComponent,
        FooterComponent,
        DemoformComponent,
        BillingComponent,
        SelectionComponent,
        Selection2Component,
        Selection3Component,
        PersonComponent,
        DepartmentComponent,
        DepartmentCreateComponent,
        DepartmentEditComponent,
        SelectinputComponent,
        SelectinputdblComponent,
        InserttableComponent,
        TableComponent,
        PersonEditComponent,
        ThirdpartyComponent,
        ThirdpartyEditComponent,
        CountryComponent,
        CountryaddComponent,
        CountryEditComponent
    ],
    imports: [
        Ng2Webstorage,
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot(appRoutes),
        ClickOutsideModule,
        DataTableModule, DropdownModule, InputTextModule, CheckboxModule, InputTextareaModule, RadioButtonModule,
        TabViewModule, AutoCompleteModule, CalendarModule, InputSwitchModule, TooltipModule, DialogModule,
        ConfirmDialogModule, InputMaskModule, OverlayPanelModule,
        Ng2PageScrollModule.forRoot()
    ],
    providers: [AppService, DataService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AdnComponent]
})
export class AdnModule {

}