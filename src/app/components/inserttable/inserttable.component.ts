import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'insert-table',
  templateUrl: './inserttable.component.html',
  styleUrls: ['./inserttable.component.scss']
})
export class InserttableComponent implements OnInit {
  items: Array<Object> = [];
  @Input() cols: string;

  constructor() {
    //Items
    /*this.items.push({'reference': '123', 'description': 'Bicicleta', 'price': 1200000});
    this.items.push({'reference': '456', 'description': 'Moto', 'price': 5500000});*/
  }

  ngOnInit() {
  }
}
