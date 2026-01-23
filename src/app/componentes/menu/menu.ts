import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { GestionarUsuario } from '../../services/gestionar-usuarios';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, MatMenuModule, MatButtonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  private router = inject(Router); 
  private auth = inject(GestionarUsuario);
  esAdmin= this.auth.perfil;
  estaAutenticado= this.auth.token; 

  logout() {
    this.auth.logout().subscribe({
      next: () => {
        // Redirigir al login
        this.router.navigate(['/login']);
      }
    });
  }
}