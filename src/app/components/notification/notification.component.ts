import {Component, trigger, state, style, transition, animate} from '@angular/core';

@Component({
    selector: 'notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'],

    animations: [
        trigger('slideInOut', [
            state('in', style({
                transform: 'translate(0, 100px)'
            })),
            state('out', style({
                transform: 'translate(0, -100px)'
            })),
            transition('in => out', animate('400ms ease-in-out')),
            transition('out => in', animate('400ms ease-in-out'))
        ]),
    ]
})
export class NotificationComponent{
    type:string;
    title:string = 'Test Notification';
    timeout:number = 3500;
    state:string = 'out';

    constructor(){
        this.state = 'out';
    }

    show(title:string, type: string = 'success'){
        this.title = title;
        this.type = type;
        this.state = this.state === 'out' ? 'in' : 'out';

        setTimeout(() => {
            this.state = this.state === 'out' ? 'in' : 'out';
        }, this.timeout);
    }
}