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

  opinionesMostradas: interfazOpinion[] = [];

  ngOnChanges() {
    this.mostrarConRetraso();
  }

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

  async mostrarConRetraso() {
    this.opinionesMostradas = []; // limpiar antes de mostrar

    for (const opinion of this.opinionesOrdenadas) {
      this.opinionesMostradas.push(opinion);
      await new Promise(resolve => setTimeout(resolve, 300)); // 300ms entre tarjetas
    }
  }
}

