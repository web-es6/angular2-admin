export class Department {
    id: number;
    orgCode: string;
    rootCode: string;
    rootId: number;
    parentId: number;
    type: string;
    name: string;
    provinceCode: number;
    province: string;
    cityCode: number;
    city: string;
    address: string;
    leftOrder: number;
    rightOrder: number;
    deleted: boolean;

    constructor(data: any) {
        this.id = data.id;
        this.orgCode = data.orgCode;
        this.rootCode = data.rootCode;
        this.orgCode = data.orgCode;
        this.rootId = data.rootId;
        this.parentId = data.parentId;
        this.type = data.type;
        this.name = data.name;
        this.provinceCode = data.provinceCode;
        this.province = data.province;
        this.cityCode = data.cityCode;
        this.city = data.city;
        this.address = data.address;
        this.leftOrder = data.leftOrder;
        this.rightOrder = data.rightOrder;
        this.deleted = data.deleted;
    }

}
