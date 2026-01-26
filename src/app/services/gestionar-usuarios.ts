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

  private apiURL = 'http://localhost:3000/usuarios';

  private _token = signal<string >("");
  token = this._token.asReadonly();

  private _perfil = signal<string>("usuario");
  perfil = this._perfil.asReadonly();

  constructor() {
    const token = localStorage.getItem('token');
    if (token) {
      this._token.set(token);
      this._perfil.set(this.obtenerPerfil());
    }
  }


  registro(codigo: string, nombre: string, email: string, clave: string) {
    return this.http.post<Boolean>(
      this.apiURL + "/registro",
      { codigo, clave, nombre, email }
    ).pipe(
      catchError(err => {
        console.error("Error en registro:", err);
        return of(false);
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
        // Guardar token y usuario
        localStorage.setItem('token', response.token);
        localStorage.setItem('usuarioId', response.usuario._id);

        this._token.set(response.token);
        this._perfil.set(this.obtenerPerfil());
      }),
      catchError(err => {
        console.error("Error en login:", err);
        return throwError(() => err);
      })
    );
  }

  logout() {
    return this.http.post<void>(this.apiURL + "/logout", {}, this.getAuthHeaders())
      .pipe(
        tap(() => {
          localStorage.removeItem('token');
          this._token.set("");
          this._perfil.set("usuario");
        })
      );
  }

  private getAuthHeaders() {
    const token = this._token();
    return { headers: { Authorization: `Bearer ${token}` } };
  }

  // 🔥 NUEVO MÉTODO: obtener el perfil desde el token JWT
  obtenerPerfil(): string {
    const token = this._token();
    if (!token) return "usuario";

    try {
      const payloadBase64 = token.split('.')[1];
      const payloadDecoded = JSON.parse(atob(payloadBase64));

      return payloadDecoded.perfil || "usuario"; // Ajusta el nombre según tu backend
    } catch (error) {
      console.error("Error al decodificar token:", error);
      return "usuario";
    }
  }
  estaAutenticado(): boolean {
    return this._token() !== "";
  }
}
