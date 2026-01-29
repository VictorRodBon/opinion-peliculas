import { interfazPeliculas } from '../interfaces/interfazPeliculas';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GestionarPeliculas {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private apiURL = '/peliculas';

  constructor(private http: HttpClient){}

  getPeliculas(): Observable<interfazPeliculas[]>{
    return this.http.get<interfazPeliculas[]>(this.apiURL);
  }

  getPelicula(id: string): Observable<interfazPeliculas> {
    return this.http.get<interfazPeliculas>(`${this.apiURL}/${id}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  crearPelicula(pelicula: any) {
    return this.http.post(this.apiURL, pelicula);
  }

  borrarPelicula(id: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  actualizarPelicula(id: string, pelicula: any) {
    return this.http.put(`${this.apiURL}/${id}`, pelicula);
  }

}
