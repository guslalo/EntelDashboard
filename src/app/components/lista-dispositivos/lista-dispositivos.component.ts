import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-lista-dispositivos',
  templateUrl: './lista-dispositivos.component.html',
  styleUrls: ['./lista-dispositivos.component.scss']
})
export class ListaDispositivosComponent implements OnInit {
public lista:any;
  constructor(private http : HttpClient,  private ServiciosService: ServiciosService) { }

  setPage(page: number) {
    // get pager object from service
    //this.pager = this.pagerService.getPager(this.allItems.length, page, 5);

    // get current page of items
    //this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  ngOnInit() {

    this.ServiciosService.devicesDisconnected2('?query=disconnect&list=disconnected').subscribe(
      data => {
   
       this.lista = data.results;

    
       },
    );
  }

}
