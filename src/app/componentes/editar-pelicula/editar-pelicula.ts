import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionarPeliculas } from '../../services/gestionar-peliculas';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-pelicula',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './editar-pelicula.html',
  styleUrls: ['./editar-pelicula.css']
})
export class EditarPeliculas implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private peliculasService = inject(GestionarPeliculas);
  private snackBar = inject(MatSnackBar);

  peliculaForm = this.fb.group({
    title: ['', Validators.required],
    director: ['', Validators.required],
    premiere: ['', Validators.required],
    duration: [0, Validators.required]
  });

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.peliculasService.getPelicula(id).subscribe(pelicula => {
        this.peliculaForm.patchValue({
          title: pelicula.title,
          director: pelicula.director,
          premiere: new Date(pelicula.premiere).toISOString().substring(0, 10), // formato yyyy-MM-dd
          duration: pelicula.duration
        });
      });
    }
  }


  guardar() {
    console.log("Guardando película...", this.peliculaForm.value);
    const id = this.route.snapshot.paramMap.get('peliculaId');
    if (id) {
      const raw = this.peliculaForm.value;

      const pelicula = {
        ...raw,
        duration: Number(raw.duration),
        premiere: raw.premiere ? new Date(raw.premiere).toISOString() : null // ← ISO string
      };

      this.peliculasService.actualizarPelicula(id, pelicula).subscribe({
        next: () => {
          this.snackBar.open('Película actualizada correctamente', 'Cerrar', { duration: 3000 });
          this.router.navigate(['/peliculas']);
        },
        error: err => {
          console.error('Error al actualizar película:', err);
          this.snackBar.open('Error al actualizar la película', 'Cerrar', { duration: 3000 });
        }
      });
    }else{
      console.log('mal');
    }
  }



}
