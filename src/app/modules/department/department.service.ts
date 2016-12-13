import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpParams } from '../../common';

import 'rxjs/add/operator/toPromise';
import { Department } from './department.model';
import { JsonPage } from '../../common';

@Injectable()
export class DepartmentService {
    private departmentUrl = '/api/pub/staff/org';

    constructor(private http: Http) {

    }

    getDepartments(query: any): Promise<JsonPage<Department>> {
        return this.http.get(this.departmentUrl, {search: HttpParams.toUrlParams(query)})
            .toPromise()
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

    getById(id: number): Promise<Department> {
        return Promise.reject('TODO');
    }

    save(department: Department): Promise<Department> {
        return Promise.reject('TODO');
    }
}
