import {Component, ViewChild} from '@angular/core';
import {AppService} from "../../services/app.service";
import {NotificationComponent} from "../notification/notification.component";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [NotificationComponent]
})
export class SidebarComponent {
  @ViewChild(NotificationComponent) notificationComponent: NotificationComponent;
  appService: AppService;

  constructor(appService: AppService) {
    this.appService = appService;
  }

  menuMouseEnter(name: string) {
    this.appService.menuActive = name;
  }

  isNotifying(notification) {
    this.notificationComponent.show(notification.title, notification.type);
  }
}
