import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../../services/servicios.service';
import { HttpClient} from "@angular/common/http";
import { apk } from '../../../models/models';


@Component({
  selector: 'app-apk',
  templateUrl: './apk.component.html',
  styleUrls: ['./apk.component.scss']
})
export class ApkComponent implements OnInit {

  single: any = [];
  view: any[] = [, 300];

  public catalogueVersion: apk[] = [];
  public current_version:number;
  public remaining_versions: number;
  public id: number;
  public internal_id: number;
  public name:string;
  public updated:number;
  public outdated:number;

  constructor( private http : HttpClient,  private ServiciosService: ServiciosService) { }

  colorScheme = {
    domain: ['#28a745', '#dc3545', '#C7B42C', '#AAAAAA']
  };


  onSelect(event) {
    console.log(event);
  }


  ngOnInit() {
    this.ServiciosService.devicesDisconnected2('?query=version_app').subscribe(
      data => {
       this.catalogueVersion = data.results;
       for(let estado of this.catalogueVersion){
         this.current_version = estado.current_version;
         this.remaining_versions = estado.remaining_versions;
       }
       console.log(this.catalogueVersion);
 
       let array_chart = [
         {
         "name": "Version actual",
         "value": this.current_version
         },
         {
         "name": "Otras versiones",
         "value":this.remaining_versions
         }
      ]
      
       this.single = array_chart;
       Object.assign(this, {array_chart})
    
       },
    );
    

  }

}
