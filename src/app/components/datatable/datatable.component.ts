import {Component, OnInit, Input} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
    selector: 'datatable',
    templateUrl: './datatable.component.html',
    styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
    dataService:DataService;
    data:Array<Object>;
    @Input() url:string;
    @Input() fields:Array<string>;

    constructor(dataService: DataService) {
        this.dataService = dataService;
    }

    ngOnInit() {
        this.dataService.get(this.url).subscribe(data => {
            this.data = data;
            console.log(data);
        })
    }

}
