import { Component } from '@angular/core';
import { DepartmentService } from '../department.service';
import { RegionCodeService, RegionCode } from '../../region-code';

@Component({
    selector: 'department-list',
    styleUrls: ['./department-list.component.scss'],
    templateUrl: './department-list.component.html',
})
export class DepartmentListComponent {
    queryParams: any = {};
    provinces: RegionCode[] = [];
    cities: RegionCode[] = [];

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

    ngOnInit() {
        this.departmentService.getDepartments({}).then(data => console.log(data));

        this.regionCodeService.getProvinces().then(data => this.provinces = data);
    }
}
