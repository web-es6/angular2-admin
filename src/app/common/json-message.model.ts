export class JsonMessage<T> {
    result: boolean;
    message: string;
    error: string;
    data: T;

    constructor(data: any = {}) {
        this.result = data.result || false;
        this.message = data.message;
        this.error = data.error;
        this.data = data.data || {};
    }
}
