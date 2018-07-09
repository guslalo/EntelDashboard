
import { Component, OnInit, OnChanges, Input, ViewChild } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';
import { HttpClient} from "@angular/common/http";
import { Catalogo,Equipos, Element } from '../../models/models';

//import { MzModalService } from 'ngx-materialize';
//import { EquipoDetalleComponent } from '../../components/shared/modals/equipo-detalle/equipo-detalle.component';

import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

/*
export interface PeriodicElement {
  marca: any;
  modelo: string;
  version: string;
  especificaciones: string;
  protegido: boolean;
  blue: boolean;
  plandestacado: string;
  cuotaplandestacado: string;
  precioventaplandestacado: string;
  cuotaequipoliberado: any;
  precioventaliberado: any;
  accesoriodestacado: string;
  tipoprecio: string;
}*/

@Component({
  selector: 'app-adscreen',
  templateUrl: './adscreen.component.html',
  styleUrls: ['./adscreen.component.scss']
})

export class AdscreenComponent implements OnInit, OnChanges {
  dataSource:any;
  //MatPaginator:any;
  /*@ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['marca', 'modelo', 'version', 'especificaciones','protegido'
  ,'blue','plandestacado','cuotaplandestacado','precioventaplandestacado',
  'cuotaequipoliberado','precioventaliberado','accesoriodestacado','tipoprecio']*/

  public sucursal2:any;
 
  public Allequipments = [];
  @Input() public idSucursal:any;


  //catalogo
  public catalogo: Catalogo[] = [];
  public equipos: Equipos[] = [];


  public loading = false;
  public loadingComplete = false;
  public isLoading = true ;


  public idEquipo:any;
  public memory:any;
  public marca:any;
  public modelo:any = 'algo';
  public version:any;
  public equipoProtegido:any;
  public entelBlue:any;
  public plandestacado:any;
  public cuotaplandestacado:any; 
  public precioventaplandestacado:any; 
  public cuotaequipoliberado:any;
  public precioventaliberado:any;
  public accesoriodestacado:any; 
  public tipoprecio:any;

  public ELEMENT_DATA:any;
  

  constructor( private http : HttpClient,  private ServiciosService: ServiciosService) {//private modalService: MzModalService

  }


  ngOnInit() {
    /*
    this.ServiciosService.getStats(40).subscribe( 
      data => {
        localStorage.removeItem('equipos');
        this.isLoading = false;
        this.loadingComplete = true;
        this.catalogo = data.results;
        for(let item of this.catalogo){
          this.equipos = item.equipments;
        }
        console.log(this.equipos)
                console.log("ok");
      },
      error => {
        console.log(<any>error);
      }
      
    );  
    ;*/
    this.sucursal2 = JSON.parse(localStorage.getItem('sucursales'));
    console.log(this.sucursal2 )
  }


  onChange(idSucursalSelect) {
    this.idSucursal = +idSucursalSelect; 
    this.equipos = [];

    if(this.idSucursal != null) {
      console.log(this.idSucursal);
      this.ServiciosService.getStats(this.idSucursal).subscribe( //this.idSucursal
        data => {
          localStorage.removeItem('equipos');
          this.isLoading = false;
          this.loadingComplete = true;
          this.catalogo = data.results;
          for(let item of this.catalogo){
            this.equipos = item.equipments;
          }
          console.log(this.equipos);


          for(let item of this.equipos){
            this.marca =  item.provider.name;
            this.idEquipo = item.id;
            this.modelo =  item.name;
            for(let item2 of item.equipment_details){
                this.memory = item2.memory;
                this.precioventaliberado = item2.price_1;

                for(let item3 of item2.adscreen){
                  this.equipoProtegido = item3.program;
                  this.entelBlue = item3.blue;
                  //var accesoriodestacado = item3.accessory_details
                  //var accesoriodestacado = item3.accessory_name; 
                  for(let accesorio of item3.accessory_details){
                    this.accesoriodestacado = accesorio.accessory_name; 
                    this.tipoprecio = accesorio.type_price.name
                  }

                  for(let item of item3.equipment_plan){
                    this.precioventaplandestacado = item.price_1;
                  }
                  for(let item4 of item3.plan){
                      this.plandestacado = item4.name;
                      this.cuotaplandestacado = item4.price_2;
                  }
                }  

                /*
                const element_data:  Element  = {
                    marca:this.marca,
                    modelo:this.modelo, 
                    version:this.idEquipo,
                    especificaciones:this.memory + 'GB', 
                    protegido:this.equipoProtegido, 
                    blue:this.entelBlue, 
                    plandestacado:this.plandestacado, 
                    cuotaplandestacado:this.cuotaplandestacado, 
                    precioventaplandestacado:this.precioventaplandestacado, 
                    cuotaequipoliberado:this.precioventaplandestacado, 
                    precioventaliberado:this.precioventaliberado, 
                    accesoriodestacado:this.accesoriodestacado, 
                    tipoprecio:this.tipoprecio, 
                  };
                  this.Allequipments.push(element_data);
                  localStorage.setItem('equipos', JSON.stringify(this.Allequipments));*/

               
                 
          
            }
         
         
         
          }
          console.log(this.Allequipments);
        
          console.log("ok");
        },
        error => {
          console.log(<any>error);
        }
        
      );  
    }
  }

  
  ngOnChanges(){

    //this.dataSource = new MatTableDataSource(JSON.parse(localStorage.getItem('equipos'))); 
  }

  /*
  ngAfterViewInit () { 

    this.dataSource.paginator = this .paginator; 
    this.dataSource.sort = this.sort;
  }*/
  
  public idItem = null;

  captureId(id){
    this.idItem = id;
    this.idSucursal = id;
    console.log("equipo", id);
    
  }


}
