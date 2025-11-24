import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GestionarUsuario } from '../../services/gestionar-usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private auth = inject(GestionarUsuario);
  private router = inject(Router);
  error: string="";
  clave = '';
  correo = '';

  onSubmit() {
    this.auth.login(this.clave, this.correo).subscribe({
      next: () => {
        this.error = "";
        this.router.navigateByUrl('/opinionPeliculas');
      },
      error: (err) => {
        console.error('Login fallido', err);
        this.error = 'Usuario o contraseña incorrectos';
      }
    });
  }
}