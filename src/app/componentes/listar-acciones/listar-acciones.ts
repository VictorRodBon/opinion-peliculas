import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';


import { Operaciones } from '../../services/operaciones';

@Component({
  selector: 'app-listar-acciones',
  imports: [DatePipe],
  templateUrl: './listar-acciones.html',
  styleUrl: './listar-acciones.css',
})
export class ListarAcciones {
  private OperacionesService=inject(Operaciones);

  operaciones:any[]=[];
  ngOnInit(){
    this.operaciones=this.OperacionesService.getOperations();
    console.log(this.operaciones);
  }
}
