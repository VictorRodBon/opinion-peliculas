import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { GestionarUsuario } from '../../services/gestionar-usuarios';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
private router = inject(Router); 
private auth = inject(GestionarUsuario);
  estaAutenticado= this.auth.estaAutenticado;

  logout() {
    this.auth.logout().subscribe({
      next: () => {
        // Redirigir al login
        this.router.navigate(['/login']);
      }
    });
  }
}