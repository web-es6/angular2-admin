import { URLSearchParams } from '@angular/http';
export class HttpParams {
    static toUrlParams(data: any): URLSearchParams {
        let params = new URLSearchParams();
        for (let key in data) {
            if (data.hasOwnProperty(key) && data[key]) {
                params.set(key, data[key]);
            }
        }
        return params;
    }

    static toFormParams(data: any) {

    }
}