import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadisticaOpiniones } from '../interfaces/interfazEstadisticas';


@Injectable({
  providedIn: 'root',
})
export class GestionarEstadisticas {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private apiURL = 'http://localhost:3000/opiniones/estadisticas/';
  constructor(private http: HttpClient) { }

  getEstadisticas(desde: Date, hasta: Date) {
  return this.http.get<EstadisticaOpiniones[]>(
    `${this.apiURL}?desde=${desde}&hasta=${hasta}`
  );
}


}
