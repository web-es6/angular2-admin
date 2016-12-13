export class JsonPage<T> {
    result: boolean;
    message: string;
    error: string;
    pageNo: number;
    pageSize: number;
    totalPages: number;
    count: number;
    totalElements: number;
    list: Array<T>;

    constructor(data: any = {}) {
        this.result = data.result || false;
        this.message = data.message;
        this.error = data.error;
        this.pageNo = data.pageNo || 1;
        this.pageSize = data.pageSize || 20;
        this.totalPages = data.totalPages || 0;
        this.count = data.count || 0;
        this.totalElements = data.totalElements || 0;
        this.list = data.list || [];
    }
}
