import { Peliculas } from './../componentes/peliculas/peliculas';
import { interfazPeliculas } from '../interfaces/interfazPeliculas';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GestionarPeliculas {
  private serviceUrl='http://localhost:3000/peliculas';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient){}

  getPeliculas(): Observable<interfazPeliculas[]>{
    return this.http.get<interfazPeliculas[]>(this.serviceUrl);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  crearPelicula(pelicula: interfazPeliculas): Observable<interfazPeliculas> {
    return this.http.post<interfazPeliculas>(this.serviceUrl, pelicula,this.httpOptions).pipe(
      tap((pelicula: interfazPeliculas) => console.log(`Héroe añadido w/ id=${pelicula._id}`)),
      catchError(this.handleError<interfazPeliculas>('addHeroe'))
    );
  }
}
