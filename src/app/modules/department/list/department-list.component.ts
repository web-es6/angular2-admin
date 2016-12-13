import { Component } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
    selector: 'department-list',
    styleUrls: ['./department-list.component.scss'],
    templateUrl: './department-list.component.html',
})
export class DepartmentListComponent {

    constructor(private departmentService: DepartmentService) {

    }

    ngOnInit() {
        this.departmentService.getDepartments({}).then(data => console.log(data));
    }
}
