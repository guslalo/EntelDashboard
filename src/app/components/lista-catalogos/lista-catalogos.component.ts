import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';
import { device } from '../../models/models';

@Component({
  selector: 'app-lista-catalogos',
  templateUrl: './lista-catalogos.component.html',
  styleUrls: ['./lista-catalogos.component.scss']
})
export class ListaCatalogosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
