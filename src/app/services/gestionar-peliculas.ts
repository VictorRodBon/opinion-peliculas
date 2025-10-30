import { interfazPeliculas } from '../interfaces/interfazPeliculas';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GestionarPeliculas {
  private serviceUrl='/lista-peliculas.json';

  constructor(private http: HttpClient){ }

  getPeliculas(): Observable<interfazPeliculas[]>{
    return this.http.get<interfazPeliculas[]>(this.serviceUrl);
  }
}
