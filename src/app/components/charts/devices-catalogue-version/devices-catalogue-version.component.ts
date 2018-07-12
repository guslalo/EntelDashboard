import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../../services/servicios.service';

@Component({
  selector: 'app-devices-catalogue-version',
  templateUrl: './devices-catalogue-version.component.html',
  styleUrls: ['./devices-catalogue-version.component.css']
})

export class DevicesCatalogueVersionComponent implements OnInit {

  subscription;
  single: any = [];
  view: any[] = [400, 400];
  showLegend = true;
  explodeSlices = false;
  doughnut = false;

  constructor(
    private FormService: ServiciosService) {
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
    /*
      Se puede realizar la consulta con el ID de sucursal:
        this.FormService.devicesDisconnected('version_app', ID_SUCURSAL)
      Ejemplo:
        this.FormService.devicesDisconnected('version_app', 40)
    
   this.subscription = this.FormService.devicesDisconnected('catalogue_app').subscribe(
     data => {
       let array_chart = [];
      this.single = data;
      for (let chart_value = 1; chart_value < data.results.length; chart_value++) {
        array_chart.push({
          "name": data.results[chart_value][0], 
          "value": data.results[chart_value][1]}); 
      }
      this.single = array_chart;
      Object.assign(this, {array_chart})
      },
   );*/

 }

}
