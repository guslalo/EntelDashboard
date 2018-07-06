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

   //public headers = { 'Authorization': 'Token 2b6fa9689d2a7fd69608d1d36db04e2cf52cae9c'};
  public headers = { 'Authorization': 'Token '+JSON.parse(localStorage.getItem('token')) }; 

  //arbol Completo
  getStats(id:number): Observable<any>{
    return this.http.get(url+'catalogue/api/stats/'+id+'/',{ headers:this.headers});
   //localStorage.setItem('currentUser', JSON.stringify(user));
   
  }

  //equipo ID
  getEquipoId(id:number): Observable<any>{
    return this.http.get(url+'catalogue/api/equipment/'+id+'/',{ headers:this.headers});
  }

  
 

  getUser(id: number): Observable<any> {
    return this.http.get(url + '/hxc/api/user/' + id + '/');
  }


  devicesDisconnected2(id: number): Observable<any> {
    return this.http.get(url + '/hxc/api/user/' + id + '/');
  }




  devicesDisconnected(query: string, subsidiary_id?: number): Observable<any> {
    let url_api = '/ecommerce/api/latest_device_data/?query=' + query;
    if (subsidiary_id) {
      url_api = url_api + '&subsidiary_id=' + subsidiary_id;
    }
    return this.http.get(url + url_api);
  }
  /*
  formPost(form): Observable<any> {
    return this.http.post<any>(url + '/assistance/api/attentions/', form);
  }*/


}
