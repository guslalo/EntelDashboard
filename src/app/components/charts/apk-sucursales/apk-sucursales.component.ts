import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../../services/servicios.service';
import { HttpClient} from "@angular/common/http";
import { apk } from '../../../models/models';



@Component({
  selector: 'app-apk-sucursales',
  templateUrl: './apk-sucursales.component.html',
  styleUrls: ['./apk-sucursales.component.scss']
})
export class ApkSucursalesComponent implements OnInit {

  single: any = [];
  view: any[] = [, 300];

  public apksucursales: apk[] = [];
  public current_version:number;
  public remaining_versions: number;
  public id: number;
  public internal_id: number;
  public name:string;
  public updated:number;
  public outdated:number;

  constructor(private http : HttpClient,  private ServiciosService: ServiciosService) { }

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Sucursales';
  showYAxisLabel = true;
  yAxisLabel = 'Cantidad apk';
 
  colorScheme = {
    domain: ['#28a745', '#dc3545', '#C7B42C', '#AAAAAA']
  };


  onSelect(event) {
    console.log(event);
  }


  ngOnInit() {
    this.ServiciosService.devicesDisconnected2('?query=version_app&list=by_subsidiary&order_by=outdated').subscribe(
      data => {
        this.apksucursales = data.results;
        this.single = [];
        let array_sucursal = [];
        let count = 0;
        for(let item of this.apksucursales){
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
