import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../department.service';
import { RegionCodeService, RegionCode } from '../../region-code';
import { Department } from '../department.model';

@Component({
    selector: 'department-edit',
    styleUrls: ['./department-edit.component.scss'],
    templateUrl: './department-edit.component.html',
})
export class DepartmentEditComponent {
    departments: Department[];
    department: Department = new Department();
    provinces: RegionCode[] = [];
    cities: RegionCode[] = [];

    constructor(private departmentService: DepartmentService,
                private regionCodeService: RegionCodeService,
                private route: ActivatedRoute) {

    }

    onProvinceChange() {
        this.regionCodeService.getCities(this.department.provinceCode).
        then(data => this.cities = data);
    }

    onSave() {
        this.departmentService.save(this.department);
    }

    ngOnInit() {
        this.route.params.switchMap(params => this.departmentService.getById(+ params['id']));
        this.regionCodeService.getProvinces().then(data => this.provinces = data);
        this.departmentService.getDepartments({}).then(data => this.departments = data.list);
    }
}
