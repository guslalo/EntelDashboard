import { Injectable } from '@angular/core';
//import { Observable} from 'rxjs-compat'
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

//const url = 'https://rinnolab.cl/'
const url = 'http://develop.rinnolab.cl/'



@Injectable({
  providedIn: 'root'
})

export class ServiciosService {

  constructor(  private http : HttpClient) { }

  public headers = { 'Authorization': 'Token '+JSON.parse(localStorage.getItem('token')) }; 

  //arbol Completo
  getStats(id:number): Observable<any>{
    return this.http.get(url+'catalogue/api/stats/'+id+'/',{ headers:this.headers}); 
  }

  //equipo ID
  getEquipoId(id:number): Observable<any>{
    return this.http.get(url+'catalogue/api/equipment/'+id+'/',{ headers:this.headers});
  }

  getUser(id: number): Observable<any> {
    return this.http.get(url + '/hxc/api/user/' + id + '/');
  }

  //devicesDisconnected
  devicesDisconnected2(query:string): Observable<any> {
    return this.http.get(url + '/ecommerce/api/latest_device_data/'+query,{ headers:this.headers});
  } 

   //catalogos
   catalogue(query:string): Observable<any> {
    return this.http.get(url + '/ecommerce/api/catalogue/'+query,{ headers:this.headers});
  } 
  

}
