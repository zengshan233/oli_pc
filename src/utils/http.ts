import axios, { AxiosResponse } from 'axios';
import { LocalStorageService } from './storage';

enum RequestType {
    get,
    post,
    put,
    delete
}


export class Ajax<T>{
    private url: string;
    private data: object;
    constructor(_url: string, _data: object) {
        this.url = _url;
        this.data = _data;
    }

    public async get(): Promise<T> {
        let response: T;
        response = await this.request(RequestType.get)
        return response;
    }

    public async post(): Promise<T> {
        let response: T;
        response = await this.request(RequestType.post)
        return response;
    }

    public async put(): Promise<T> {
        let response: T;
        response = await this.request(RequestType.put)
        return response;
    }

    public async delete(): Promise<T> {
        let response: T;
        response = await this.request(RequestType.delete)
        return response;
    }

    private async request(type: RequestType): Promise<T> {
        let response: AxiosResponse<any>;
        let token: string = LocalStorageService.get('token');
        let requestConfig = {
            headers: {
                'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
            }
        };
        if (token) {
            this.data['token'] = token;
        }
        try {
            switch (type) {
                case RequestType.get:
                    response = await axios.get(`${this.url}?${this.paramsPostBody(this.data)}`, requestConfig);
                    break;
                case RequestType.post:
                    response = await axios.post(this.url, this.paramsPostBody(this.data), requestConfig);
                    break;
                case RequestType.put:
                    response = await axios.put(this.url, this.paramsPostBody(this.data), requestConfig);
                    break;
                case RequestType.delete:
                    response = await axios.delete(`${this.url}?${this.paramsPostBody(this.data)}`, requestConfig);
                    break;
            }
        } catch (e) {
            console.log("e", e);
            throw e;
        }
        let result = response.data;
        let status: number = result.status;
        if (status != 1) {
            throw result.error;
        }
        return result.data;
    }

    private paramsPostBody(obj: any) {
        var result = '';//??????????????????
        var item;
        for (item in obj) {
            result += '&' + item + '=' + encodeURIComponent(obj[item])
        }
        if (result) {
            result = result.slice(1)//???????????????&
        }
        console.log('aaaa', result)
        return result
    }
}