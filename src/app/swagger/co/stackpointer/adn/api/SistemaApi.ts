/**
 * ADN 3.0 API
 * Esta es la especificcion para el API del Sitema ADN en su version 3.0 La audiencia de este API es PRIVADA, es decir, solamente para desarrollos internos. NO se debe utilizar por externos o asociados sin la supervicion del equipo de TECINF 
 *
 * OpenAPI spec version: 0.0.1
 * Contact: carlosribero@tinformatica.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class SistemaApi {
    protected basePath = 'http:/edge.stackpointer.co:18080/ADN';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     * Autenticar Usuario y Empresa
     * | Por medio del envio de las credenciales permite la autenticacion del sistema
     * @param body Credenciales del Sistema para ser autenticadas
     */
    public loginPost (body: models.Login, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/login';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling loginPost.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(body);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

}
