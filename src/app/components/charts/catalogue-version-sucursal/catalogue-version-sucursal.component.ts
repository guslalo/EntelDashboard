import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../../services/servicios.service';
import { Sucursal } from '../../../models/models';

@Component({
  selector: 'app-catalogue-version-sucursal',
  templateUrl: './catalogue-version-sucursal.component.html',
  styleUrls: ['./catalogue-version-sucursal.component.scss']
})
export class CatalogueVersionSucursalComponent implements OnInit {
  public Sucursal: Sucursal[] = [];
  single: any[];
  multi: any[];

  view: any[] = [, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Sucursales';
  showYAxisLabel = true;
  yAxisLabel = 'Cantidad desconectados';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor( private ServiciosService: ServiciosService) { }

  ngOnInit() {
    this.ServiciosService.devicesDisconnected2('?query=catalogue_app&list=by_subsidiary&order_by=outdated').subscribe(
      data => {
        this.Sucursal = data.results;
        this.single = data;
        let array_sucursal = [];
        let count = 0;
        for(let item of this.Sucursal){
          count ++ 
            if(count <= 10){
              console.log (count);
              array_sucursal.push({
                "name":item.name,
                "value":item.outdated
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

}
