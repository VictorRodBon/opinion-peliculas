import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionarPeliculas } from '../../services/gestionar-peliculas';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { Operaciones } from '../../services/operaciones';

@Component({
  selector: 'app-crear-pelicula',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './crearPelicula.html',
  styleUrls: ['./crearPelicula.css']
})
export class CrearPelicula {
  private fb = inject(FormBuilder);
  private peliculasService = inject(GestionarPeliculas);
  private router = inject(Router);

  private operacionesService = inject(Operaciones);

  peliculaForm = this.fb.group({
    title: ['', Validators.required],
    premiere: [''],
    director: [''],
    short_description: [''],
    long_description: [''],
    image: [''],
    duration: [null],
    main_actors: [''] // se puede separar por comas
  });

  crear() {
    const formValue = this.peliculaForm.value;

    // convertir actores en array
    const pelicula = {
      ...formValue,
      main_actors: formValue.main_actors?.split(':').map(a => a.trim())
    };

    this.operacionesService.logOperation("Crear de película: " + pelicula.title);

    this.peliculasService.crearPelicula(pelicula).subscribe({
      next: () => this.router.navigate(['/peliculas']),
      error: err => console.error('Error al crear película', err)
    });
  }
}
