import { Injectable } from "@angular/core";
import { Response,Headers,Http } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import { ReturnStatement } from "@angular/compiler";

@Injectable()
export class ServerService {
    constructor( private http:Http){
    } 

    storeServers(servers:any[]){
       const headers=new Headers({'content-type':'application/json'})
       //return this.http.post('https://udemy-ng-http-81420.firebaseio.com/mydata.json',
       return this.http.put('https://udemy-ng-http-81420.firebaseio.com/mydata.json',

       servers,{headers:headers});
    }
    getServers(){
        return this.http.get('https://udemy-ng-http-81420.firebaseio.com/')
            .map((response:Response)=>{
                const data=response.json();
                for(const server of data)
                {
                    server.name="FETCHED_"+server.name;
                }
                return data;
            })
            .catch(
                (error:Response)=>{
                return Observable.throw("Somthing went wrong");
                }
            );
    }
    getAppName(){
        return this.http.get('https://udemy-ng-http-81420.firebaseio.com/AppName.json').
            map((response:Response)=>{
                console.log(response.json());
                return response.json();
            })
    }
}