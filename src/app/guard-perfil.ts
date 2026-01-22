import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GestionarUsuario } from './services/gestionar-usuarios';

export const perfilGuard = (perfilRequerido: string): CanActivateFn => () => {
  const auth = inject(GestionarUsuario);

  // Verificar autenticación primero
  if (!auth.estaAutenticado()) {
    const router = inject(Router);
    router.navigate(['/login']);
    return false;
  }

  // Validar perfil
  const perfilUsuario = auth.obtenerPerfil(); // Ajusta el nombre si tu método es distinto

  if (perfilUsuario === perfilRequerido) {
    return true;
  }

  // Si no tiene el perfil requerido, redirigir
  const router = inject(Router);
  router.navigate(['/acceso-denegado']); // O donde quieras
  return false;
};
