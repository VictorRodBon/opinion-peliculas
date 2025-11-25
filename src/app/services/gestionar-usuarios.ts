import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of, tap, throwError } from 'rxjs';
import { RespuestaAuth } from '../interfaces/respuesta-auth';
import { interfazUsuarios } from '../interfaces/users'

@Injectable({
  providedIn: 'root'
})
export class GestionarUsuario {
  private http = inject(HttpClient);

  private apiURL =  'http://localhost:3000/usuarios';

  private _token = signal<string | null>(localStorage.getItem('token'));
  token = this._token.asReadonly();

  // Computed para saber si está autenticado
  estaAutenticado = computed(() => this._token() !== null);



  registro(codigo: string, nombre: string, email: string, clave: string) {
    return this.http.post<Boolean>(
      this.apiURL + "/registro",
      { codigo,clave,nombre,email}
    ).pipe(
      catchError(err => {
        console.error("Error en registro:", err);
        return of(false); // Devuelves un valor seguro si quieres
      })
    );
  }

  modificarUsuario(usuario: { codigo: string; nombre: string; email: string; clave?: string }) {
    return this.http.put<Boolean>(
      this.apiURL + "/modificar/" + usuario.codigo,
      usuario
    );
  }

  login(email: string, clave: string) {
    return this.http.post<RespuestaAuth>(
      this.apiURL + "/login",
      { email, clave }
    ).pipe(
      tap(response => {
        // Guardar el token en localStorage
        localStorage.setItem('token', response.token);
        localStorage.setItem('usuarioId', response.usuario._id);


        // Actualizar la señal del usuario (puedes guardar el email o id)
        this._token.set(response.token);
      }),
        catchError(err => {
          console.error("Error en login:", err);
          return throwError(() => err); // O devuelves un observable controlado
        })
    );
  }

  logout() {
    return this.http.post<void>(this.apiURL + "/logout", {}, this.getAuthHeaders())
      .pipe(
        tap(() => {
          localStorage.removeItem('token');
          this._token.set(null); // ✅ actualiza el signal
        })
      );
  }

  private getAuthHeaders() {
    const token = this._token();
    return { headers: { Authorization: `Bearer ${token}` } };
  }
}
