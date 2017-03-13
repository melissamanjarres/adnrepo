import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Client} from "../classes/client";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClientService {
    constructor(private http: Http) {}

    get(){
        return this.http.request('assets/data/clients.json')
            .toPromise()
            .then(response => response.json() as Client[]);
    }

}