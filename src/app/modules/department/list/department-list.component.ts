import { Component } from '@angular/core';
import { DepartmentService } from '../department.service';
import { RegionCodeService, RegionCode } from '../../region-code';
import { Department } from '../department.model';

@Component({
    selector: 'department-list',
    styleUrls: ['./department-list.component.scss'],
    templateUrl: './department-list.component.html',
})
export class DepartmentListComponent {
    queryParams: any = {};
    departments: Department[] = [];
    provinces: RegionCode[] = [];
    cities: RegionCode[] = [];
    pagination = {page: 1, pageSize: 20, totalSize: 0};

    constructor(private departmentService: DepartmentService,
                private regionCodeService: RegionCodeService) {

    }

    onProvinceChange() {
        this.regionCodeService.getCities(this.queryParams.provinceCode).
            then(data => this.cities = data);
    }

    resetQueryParams() {
        this.queryParams = {};
    }

    getDepartments() {
        let params = {
            ...this.queryParams,
            pageNo: this.pagination.page,
            pageSize: this.pagination.pageSize,
        };

        this.departmentService.getDepartments(params).then(data => {
            this.departments = data.list;
            this.pagination.totalSize = data.totalElements;
        });
    }

    ngOnInit() {
        this.getDepartments();
        this.regionCodeService.getProvinces().then(data => this.provinces = data);
    }
}
