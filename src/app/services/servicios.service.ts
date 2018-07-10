import { Injectable } from '@angular/core';
//import { Observable} from 'rxjs-compat'
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

const url = 'https://rinnolab.cl/'
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
  
  /*
  devicesDisconnected2(): Observable<any> {
    return this.http.get(url + '/ecommerce/api/latest_device_data/?query=disconnect',{ headers:this.headers});
  }*/
 
  devicesDisconnected(query: string, subsidiary_id?: number): Observable<any> {
    let url_api = '/ecommerce/api/latest_device_data/?query=' + query;
    if (subsidiary_id) {
      url_api = url_api + '&subsidiary_id=' + subsidiary_id;
    }
    return this.http.get(url + url_api);
  }


}
