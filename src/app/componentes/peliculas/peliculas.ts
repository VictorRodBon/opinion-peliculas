import { interfazPeliculas } from '../../interfaces/interfazPeliculas';
import { GestionarPeliculas } from '../../services/gestionar-peliculas';
import { Component } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  imports: [],
  templateUrl: './peliculas.html',
  styleUrl: './peliculas.css',
})
export class Peliculas {
  listaPeliculas: interfazPeliculas[]=[];
  constructor(private GestionarPeliculas:GestionarPeliculas){}
  getPeliculas():void{
    this.GestionarPeliculas.getPeliculas().subscribe((datos)=>this.listaPeliculas=datos)
  }
  ngOnInit(){
    this.getPeliculas();
  }
}
