import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { ServiciosService } from '../../../../services/servicios.service';
import { HttpClient } from "@angular/common/http";
import { Equipos } from '../../../../models/models';

@Component({
  selector: 'app-equipo-detalle',
  templateUrl: './equipo-detalle.component.html',
  styleUrls: ['./equipo-detalle.component.scss'],
  providers:[ServiciosService]
})
export class EquipoDetalleComponent implements OnInit {

  @Input() public idItem:any;
  public equipoId: Equipos[] = [];

  constructor( private http : HttpClient,  
    private ServiciosService: ServiciosService, ) { }

  ngOnInit() {
    $('.modal').modal();
  }

  ngOnChanges() {
    if(this.idItem != null){
      this.ServiciosService.getEquipoId(this.idItem).subscribe( 
        data => {
          this.equipoId = [];
          this.equipoId.push(data);
        },
        error => {
          console.log(<any>error);
        }
      );
    } 
  }

  borrar(){
    //this.idItem = null;
    this.equipoId = [];  
    setTimeout(function(){ 
      this.loading = false;
      this.loadingComplete = false;
      this.isLoading = true ;
      this.equipoId = [];  
    }, 3);

   }

}
