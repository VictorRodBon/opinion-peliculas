import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionarPeliculas } from '../../services/gestionar-peliculas';

@Component({
  selector: 'app-detalle-pelicula',
  imports: [],
  templateUrl: './detalle-pelicula.html',
  styleUrl: './detalle-pelicula.css',
})
export class DetallePelicula {
  private GestionarPeliculas = inject(GestionarPeliculas);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  titulo: string = '';
  descripcionLarga: string = '';
  actores: string[]=[''];
  imagen: string='';

  ngOnInit(): void {
    const peliculaId = this.route.snapshot.paramMap.get('peliculaId');
    if (peliculaId) {
      this.GestionarPeliculas.getPelicula(peliculaId).subscribe({
        next: pelicula => {
          this.titulo = pelicula.title;
          this.descripcionLarga = pelicula.long_description;
          this.actores = pelicula.main_actors;
          this.imagen=pelicula.image;
        },
        error: err => console.error('Error al cargar película', err)
      });
    }
  }
}
