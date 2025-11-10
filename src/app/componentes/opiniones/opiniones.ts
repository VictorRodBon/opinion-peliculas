import { Component, OnInit } from '@angular/core';
import { interfazOpinion } from '../../interfaces/opinion';
import { GestionarOpiniones } from '../../services/gestionar-opiniones';

@Component({
  selector: 'app-opiniones',
  imports: [],
  templateUrl: './opiniones.html',
  styleUrls: ['./opiniones.css'],
})
export class Opiniones implements OnInit {
  listaOpiniones: interfazOpinion[]=[];

  constructor(private gestionarOpiniones: GestionarOpiniones) { }

  getOpiniones(): void {
    const idUsuario = '69122f2d800bec2859f23d9d'; // ← ejemplo
    this.gestionarOpiniones.getOpiniones(idUsuario).subscribe((datos) => {
      console.log('Opiniones recibidas:', datos);
      this.listaOpiniones = datos;
    });
  }


  ngOnInit(): void {
    this.getOpiniones();
  }
}
