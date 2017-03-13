import {Component, ViewChild} from '@angular/core';
import {QuoteService} from '../../services/quote.service';
import {NotificationComponent} from "../notification/notification.component";
import {AppService} from "../../services/app.service";

@Component({
    selector: 'login-screen',
    templateUrl: './login.component.html',
    styleUrls: ['../../styles/sass/login.scss'],
    providers: [QuoteService, NotificationComponent]
})
export class LoginComponent {
    @ViewChild(NotificationComponent) notificationComponent: NotificationComponent;

    companyName:string = 'Coca Cola';
    changingCompany:boolean = false;
    loginView:boolean = true;
    recoverPasswordView:boolean = false;
    email:string;
    quote;
    appService:AppService;

    constructor(quoteService: QuoteService, appService: AppService){
        this.quote = quoteService.getQuote();
        this.appService = appService;
    }

    changeCompany(event) {
        event.preventDefault();
        this.companyName = '';
        this.changingCompany = true;
        /*this.companyInput.disabled = false;
        this.companyInput.focus();*/
    }

    showLoginView() {
        this.recoverPasswordView = false;
    }

    showRecoverPasswordView() {
        this.recoverPasswordView = true;
    }

    sendEmail(){
        this.notificationComponent.show('Se envió el correo electrónico');
    }
}