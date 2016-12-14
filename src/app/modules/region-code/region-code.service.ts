import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import { RegionCode } from './region-code.model';

@Injectable()
export class RegionCodeService {
    private regionCodeUrl =  '/api/pub/regionCode';
    private provinces: RegionCode[];
    private cities: Map<number, RegionCode[]> = new Map<number, RegionCode[]>();

    constructor(private http: Http) {

    }

    getProvinces(): Promise<RegionCode[]> {
        if (!this.provinces || !this.provinces.length) {
            let params: URLSearchParams = new URLSearchParams();
            params.set('type', '1');
            params.set('pageSize', '50');
            return this.http.get(this.regionCodeUrl, {search: params}).toPromise()
                .then(response => {
                    let json = response.json();
                    if (!json.result) {
                        console.log(json);
                        Promise.reject(json.message || json);
                        return [];
                    } else {
                        this.provinces = json.list as RegionCode[];
                        return this.provinces;
                    }
                });
        }

        return Promise.resolve(this.provinces);
    }

    getCities(provinceCode: number): Promise<RegionCode[]> {
        if (this.cities.get(provinceCode)) {
            return Promise.resolve(this.cities.get(provinceCode));
        }

        let params: URLSearchParams = new URLSearchParams();
        params.set('parentCode', provinceCode.toString());
        params.set('pageSize', '50');
        return this.http.get(this.regionCodeUrl, {search: params}).toPromise()
            .then(response => {
                let json = response.json();
                if (!json.result) {
                    console.log(json);
                    Promise.reject(json.message || json.toString());
                    return [];
                } else {
                    this.cities.set(provinceCode, json.list as RegionCode[]);
                    return this.cities.get(provinceCode);
                }
            });

    }
}
