import {Component, Input, OnInit} from '@angular/core';
import {LocalStorage, LocalStorageService} from "ng2-webstorage";
import {Router} from "@angular/router";

@Component({
    selector: 'select-input-dbl',
    templateUrl: './selectinputdbl.component.html',
    styleUrls: ['./selectinputdbl.component.scss']
})
export class SelectinputdblComponent implements OnInit {
    @Input() model: string;
    @Input() model2: string;
    @Input() label: string;
    @Input() id: string;
    @Input() field: string;
    @Input() field2: string;
    @Input() selectionRoute: string;
    @Input() showActionsColumn: boolean;

    localData: Object;

    constructor(private localSt: LocalStorageService, private router: Router) {

    }

    ngOnInit() {
        if (this.localSt.retrieve(this.id) && this.localSt.retrieve(this.id).length > 0) {
            this.localData = JSON.parse(this.localSt.retrieve(this.id));
            this.model = this.localData[this.field];
            this.model2 = this.localData[this.field2];
        }
    }

    handleClickedInput() {
        console.log("Route: " + this.selectionRoute + ". Show action column: " + this.showActionsColumn);
        this.router.navigateByUrl('/' + this.selectionRoute + '/' + this.showActionsColumn + '/' + this.id);
    }

}
