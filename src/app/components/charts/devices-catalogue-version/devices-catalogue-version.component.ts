import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../../services/servicios.service';
import { HttpClient} from "@angular/common/http";
import { catalogue } from '../../../models/models';


@Component({
  selector: 'app-devices-catalogue-version',
  templateUrl: './devices-catalogue-version.component.html',
  styleUrls: ['./devices-catalogue-version.component.css']
})

export class DevicesCatalogueVersionComponent implements OnInit {

  single: any = [];
  view: any[] = [, 300];

  public catalogueVersion: catalogue[] = [];
  public last_version:any;
  public last_version_name:any; 
  public current_version:any;
  public current_version_name:any;
  public remaining_versions:any;
  public version:any;



  colorScheme = {
    domain: ['#28a745', '#dc3545', '#C7B42C', '#AAAAAA']
  };
  constructor(
    private http : HttpClient,  private ServiciosService: ServiciosService) {
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
    this.ServiciosService.devicesDisconnected2('?query=catalogue_app').subscribe(
      data => {
       this.catalogueVersion = data.results;
       for(let estado of this.catalogueVersion){
         this.current_version_name = estado.current_version_name;
         this.last_version_name = estado.last_version_name;
         this.current_version = estado.current_version;
         this.last_version = estado.last_version;
         this.remaining_versions = estado.remaining_versions; 
         this.version = estado.version; 
       }
       console.log(this.catalogueVersion);
 
       let array_chart = [
         {
         "name": "V."+ this.current_version_name,
         "value": this.current_version
         },
         {
         "name": "V."+ this.last_version_name,
         "value":this.last_version
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
