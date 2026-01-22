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
  
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private apiURL = 'http://localhost:3000/opiniones/';

  constructor(private http: HttpClient) { }

  getOpiniones(): Observable<interfazOpinion[]> {
    return this.http.get<interfazOpinion[]>(`${this.apiURL}`);
  }
  crearOpinion(opinion: any) {
    return this.http.post(this.apiURL, opinion);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
