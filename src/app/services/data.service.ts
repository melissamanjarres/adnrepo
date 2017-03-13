import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
    private http: Http;

    constructor(http:Http) {
        this.http = http;
    }

    get(url:string) {
        return this.http.request(url).map(res => res.json());
    }

}
