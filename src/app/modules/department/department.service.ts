import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import * as formUrlencoded from 'form-urlencoded';

import 'rxjs/add/operator/toPromise';
import { Department } from './department.model';
import { JsonPage } from '../../common';

@Injectable()
export class DepartmentService {
    private departmentUrl = '/api/pub/staff/org';

    constructor(private http: Http) {

    }

    getDepartments(query: any): Promise<JsonPage<Department>> {
        let params = new URLSearchParams();
        for (let key in query) {
            if (query.hasOwnProperty(key)) {
                params.set(key, query[key]);
            }
        }

        return this.http.get(this.departmentUrl, {search: params}).toPromise()
            .then(response => {
                let json = response.json();
                if (!json.result) {
                    console.log(json);
                    Promise.reject(json.message || json.toString());
                    return new JsonPage();
                } else {
                    return new JsonPage(json);
                }
            });
    }
}
