import { interfazPeliculas } from '../../interfaces/interfazPeliculas';
import { GestionarPeliculas } from '../../services/gestionar-peliculas';
import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';



@Component({
  selector: 'app-peliculas',
  imports: [RouterLinkWithHref],
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
