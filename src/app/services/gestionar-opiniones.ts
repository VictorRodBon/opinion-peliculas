import { interfazOpinion } from '../interfaces/opinion';
import { interfazPeliculas } from '../interfaces/interfazPeliculas';
import { interfazUsuarios } from '../interfaces/users';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GestionarOpiniones {
  private serviceUrl = 'http://192.168.0.35:3000/Opiniones';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getOpiniones(): Observable<interfazOpinion[]> {
    return this.http.get<interfazOpinion[]>(`${this.serviceUrl}`);
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
