import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../../services/servicios.service';
export interface StateGroup {
  letter: string;
  names: string[];
}

@Component({
  selector: 'app-devices-disconnected',
  templateUrl: './devices-disconnected.component.html',
  styleUrls: ['./devices-disconnected.component.css']
})

export class DevicesDisconnectedComponent implements OnInit {

  subscription;
  single: any = [];
  view: any[] = [, 500];

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
   this.subscription = this.FormService.devicesDisconnected('disconnect').subscribe(
     data => {
      let array_chart = [{
        "name": "Conectados",
        "value": data.results.total_updated
      },{
        "name": "Desconectados",
        "value": data.results.total_outdated
      }]
      this.single = array_chart;
      Object.assign(this, {array_chart})
      },
   );
 }

}
