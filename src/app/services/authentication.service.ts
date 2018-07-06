import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthenticationService {
    private httpOptions: any;
    public token:any;
    
    constructor(private http: HttpClient) {
        this.httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
          };
     }
     

 
    login(username: string, password: string): Observable<any>{
        /*const headers = new HttpHeaders({
            'username': username,
            'password': password
          })*/
       /*
       const params = new HttpParams({
        fromObject: {
                username: username,
                password: password,
            }
        });*/
        /*const params = new HttpParams({
            fromObject: {
                username: username,
                password: password,
            }
          });
          /*
          const headers = new HttpHeaders({
            'username':'devicewall',
            'password':'XNPF4ujk'
          });
          https://rinnolab.cl  http://192.168.1.128:8000  develop.rinnolab.cl
          */
        

        return this.http.post<any>('http://develop.rinnolab.cl/hxc/api/login_token/', { username: username, password: password })
            .map(data => {
                 //console.log(data.results);
               // this.token = localStorage.setItem('token', JSON.stringify(data.token));

               // console.log(data.token);
                // login successful if there's a jwt token in the response
                if (data && data.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(data));
                    
                }
                return data;
            });
    }
 
    logout(){
        // remove user from local storage to log user out  localStorage.removeItem('sucursales');
        localStorage.clear();
        
    }
}