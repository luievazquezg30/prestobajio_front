import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GlobalFunctionsService } from '../providers/global-functions.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    token:any = '';
    constructor(
        private http: HttpClient,
        private glb: GlobalFunctionsService
    ) { }

    async get(url:string, params:any):Promise<any>{
        const promise = new Promise<any>(async resolve => {
            this.token = await this.glb.getStorage('token');
            let headers:any = {};
            if(this.token) {
                headers.Authorization = `Bearer ${this.token}`;
            }
            headers.Accept = 'application/json';
            headers['Content-Type'] = 'application/json';
            this.http.get(environment.urlServidor + 'api/v1/' + url, { headers: headers }).toPromise().then(data => resolve({status : 'success', data: data})).catch(async err => {
                if(err.status == 401) {
                    this.glb.dismissLoading();
                    this.glb.irPage('/login', false);
                } else {
                    //this.glb.dismissLoading();
                    resolve({status : 'error', data: err});
                }                
            });
        });
        return promise;
    }

    getFullUrl(url:string, params:any):any{
        return this.http.get(url, params).toPromise();
    }

    async post(url:string, params:any, retLogin: boolean = true):Promise<any>{
        const promise = new Promise<any>(async resolve => {
            this.token = await this.glb.getStorage('token');
            let headers:any = {};
            if(this.token) {
                headers.Authorization = `Bearer ${this.token}`;
            }
            headers.Accept = 'application/json';
            headers['Content-Type'] = 'application/json';
            this.http.post(environment.urlServidor + 'api/v1/' + url, params, { headers: headers }).toPromise().then(data => resolve({status : 'success', data: data})).catch(async err => {
                if(err.status == 401) {
                    this.glb.dismissLoading();
                    this.glb.irPage('/login', false);
                } else {
                    //this.glb.dismissLoading();
                    resolve({status : 'error', data: err});
                }                
            });
        });
        return promise;
    
    }
}
