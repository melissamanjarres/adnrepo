import { Component, OnInit } from '@angular/core';
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  appService: AppService;

  constructor(appService: AppService) {
    this.appService = appService;
  }

  ngOnInit() {
  }

}
