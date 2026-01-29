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
  error: boolean=false;
  mensajeError:string="";
  clave = '';
  email = '';

  onSubmit() {
    this.auth.login(this.email, this.clave).subscribe({
      next: () => {
        this.error = false;
        this.router.navigateByUrl('/peliculas');
      },
      error: (err) => {
        this.error=true
        console.error('Login fallido', err);
        this.mensajeError = 'Usuario o contraseña incorrectos';
      }
    });
  }
}