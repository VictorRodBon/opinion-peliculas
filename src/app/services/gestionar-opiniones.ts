import { interfazOpinion } from '../interfaces/opinion';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { interfazUsuarios } from '../interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class GestionarOpiniones {
  private serviceUrl = 'http://localhost:3000/usuarios';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getOpiniones(idUsuario: string): Observable<interfazOpinion[]> {
    return this.http.get<interfazUsuarios>(`${this.serviceUrl}/${idUsuario}`).pipe(
      map(usuario => usuario.valoraciones)
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  crearOpinion(opinion: interfazOpinion): Observable<interfazOpinion> {
    return this.http.post<interfazOpinion>(this.serviceUrl, opinion, this.httpOptions).pipe(
      tap((opinion: interfazOpinion) => console.log(`Héroe añadido w/ id=${opinion.pelicula}`)),
      catchError(this.handleError<interfazOpinion>('addHeroe'))
    );
  }
}
