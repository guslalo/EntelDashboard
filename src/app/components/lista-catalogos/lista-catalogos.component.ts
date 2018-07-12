import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';
import { device } from '../../models/models';

@Component({
  selector: 'app-lista-catalogos',
  templateUrl: './lista-catalogos.component.html',
  styleUrls: ['./lista-catalogos.component.scss']
})
export class ListaCatalogosComponent implements OnInit {

  constructor( private ServiciosService: ServiciosService) { }

  ngOnInit() {
    this.ServiciosService.devicesDisconnected2('?query=disconnect&list=by_subsidiary&order_by=disconnected').subscribe(
      data => {
      
        let array_sucursal = [];
        let count = 0;
       
      },
      error => {
        console.log(<any>error);
      }
      
    ); 
  }

}
