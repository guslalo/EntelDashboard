import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
//import { single } from './data';

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
  },
  {
    "name": "Sucursal 3",
    "value":38,
    "id":1
  },
  {
    "name": "Sucursal 4",
    "value":37,
    "id":2
  },
  {
    "name": "Sucursal 5",
    "value":36,
    "id":4
  },
  {
    "name": "Sucursal 0",
    "value":35,
    "id":5
  },
  {
    "name": "Sucursal ",
    "value":33,
    "id":6
  }
];

@Component({
  selector: 'app-top-desconectados',
  templateUrl: './top-desconectados.component.html',
  styleUrls: ['./top-desconectados.component.scss']
})


export class TopDesconectadosComponent implements OnInit {
  ngOnInit() {
  }
  /*
  constructor() { }

 */
  single: any[];
  multi: any[];

  view: any[] = [, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Cantidad desconectados';
  showYAxisLabel = true;
  yAxisLabel = 'Sucursales';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single })
  }

  onSelect(event) {
    console.log(event);
  }

}
