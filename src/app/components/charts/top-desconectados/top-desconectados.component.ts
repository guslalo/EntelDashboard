import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ServiciosService } from '../../../services/servicios.service';
import { device } from '../../../models/models';

export var single = [
  {
    "name": "Sucursal 2",
    "value":40,
    "id":3
  },
  {
    "name": "Sucursal 1",
    "value":39,
    "id":0
  }
];

@Component({
  selector: 'app-top-desconectados',
  templateUrl: './top-desconectados.component.html',
  styleUrls: ['./top-desconectados.component.scss']
})


export class TopDesconectadosComponent implements OnInit {
  public deviceEstado: device[] = [];
  single: any[];
  multi: any[];

  view: any[] = [, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Cantidad desconectados';
  showYAxisLabel = true;
  yAxisLabel = 'Desconectados';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor( private ServiciosService: ServiciosService) {
   
  }

  ngOnInit() {

    this.ServiciosService.devicesDisconnected2('?query=disconnect&list=by_subsidiary&order_by=disconnected').subscribe(
      data => {
        this.deviceEstado = data.results;
        this.single = data;
        let array_sucursal = [];
        let count = 0;
        for(let item of this.deviceEstado){
          count ++ 
            if(count <= 10){
              console.log (count);
              array_sucursal.push({
                "name":item.name,
                "value":item.disconnected
              }); 
            }
        }
        this.single = array_sucursal;
        Object.assign(this.single)
      },
      error => {
        console.log(<any>error);
      }
      
    ); 
  }
  /*
  constructor() { }

 */
 

 
  onSelect(event) {
    console.log(event);
  }

}
