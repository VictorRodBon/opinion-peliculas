import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionarOpiniones } from '../../services/gestionar-opiniones';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-crear-opinion',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './crear-opinion.html',
  styleUrls: ['./crear-opinion.css']
})
export class CrearOpinion {
  private fb = inject(FormBuilder);
  private opinionesService = inject(GestionarOpiniones);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  opinionForm = this.fb.group({
    descripcion: ['', Validators.required],
    puntuacion: [null, [Validators.required, Validators.min(0), Validators.max(10)]]
  });

  crear() {
    const formValue = this.opinionForm.value;
    const usuario = localStorage.getItem('usuarioId'); // o tu servicio de auth
    const pelicula = this.route.snapshot.paramMap.get('peliculaId'); // recogido de la URL

    const opinion = {
      ...formValue,
      usuario,
      pelicula
    };

    this.opinionesService.crearOpinion(opinion).subscribe({
      next: () => this.router.navigate(['/opiniones']),
      error: err => console.error('Error al crear opinión', err)
    });
  }
}