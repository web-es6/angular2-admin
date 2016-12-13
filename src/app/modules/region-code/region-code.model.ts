export class RegionCode  {
    public code: number;
    public type: number;
    public parentCode: number;
    public name: string;
    public pinyinAbbr: string;

    public constructor(data: any = {}) {
        this.code = data.code;
        this.type = data.type;
        this.parentCode = data.parentCode;
        this.name = data.name;
        this.pinyinAbbr = data.pinyinAbbr;
    }
}
