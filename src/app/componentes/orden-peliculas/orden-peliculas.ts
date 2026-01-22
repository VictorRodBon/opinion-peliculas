import { Component, Input } from '@angular/core';
import { interfazOpinion } from '../../interfaces/opinion';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Card } from '../card/card';

@Component({
  selector: 'app-orden-peliculas',
  standalone: true,
  imports: [ FormsModule, Card],
  templateUrl: './orden-peliculas.html',
  styleUrls: ['./orden-peliculas.css'],
})
export class OrdenPeliculas {
  @Input() opiniones: interfazOpinion[] = [];

  criterio: 'fecha' | 'puntuacion' = 'fecha';

  get opinionesOrdenadas(): interfazOpinion[] {
    return [...this.opiniones].sort((a, b) => {
      switch (this.criterio) {
        case 'fecha':
          return new Date(b.fechaRegistro).getTime() - new Date(a.fechaRegistro).getTime();
        case 'puntuacion':
          return b.puntuacion - a.puntuacion;
        default:
          return 0;
      }
    });
  }
}
