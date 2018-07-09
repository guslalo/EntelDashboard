import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../../services/servicios.service';
import { device } from '../../../models/models';

export interface StateGroup {
  letter: string;
  names: string[];
}
/*
export var single = [
  {
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 7200000
  }
];*/


@Component({
  selector: 'app-devices-disconnected',
  templateUrl: './devices-disconnected.component.html',
  styleUrls: ['./devices-disconnected.component.css']
})

export class DevicesDisconnectedComponent implements OnInit {

  subscription;
  single: any = [];
  view: any[] = [, 300];

  public deviceEstado: device[] = [];
  public conectados:any;
  public desconectados:any;



  colorScheme = {
    domain: ['#28a745', '#dc3545', '#C7B42C', '#AAAAAA']
  };

  constructor(
    private FormService: ServiciosService) {

  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
    /*
      Se puede realizar la consulta con el ID de sucursal:
        this.FormService.devicesDisconnected('disconnect', ID_SUCURSAL)
      Ejemplo:
        this.FormService.devicesDisconnected('disconnect', 40)
    */
   this.subscription = this.FormService.devicesDisconnected2().subscribe(
     data => {
      this.deviceEstado = data.results;
      let totalDesconectados = 0;
      let totalConectados = 0;
      for(let estado of this.deviceEstado){
        totalDesconectados = totalDesconectados + estado.disconnected;
        totalConectados = totalConectados + estado.connected;

      }
      console.log(totalDesconectados);

      let array_chart = [{
        "name": "Conectados",
        "value": totalConectados
      },{
        "name": "Desconectados",
        "value":totalDesconectados
      }]
     
      this.single = array_chart;
      Object.assign(this, {array_chart})
   
      },
   );
 }

}
