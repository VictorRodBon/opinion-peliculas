import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Opinions } from '../interfaces/opinions'

@Injectable({
  providedIn: 'root',
})
export class GestionarOpiniones {
  private serviceUrl='/public/opiniones.json';

  constructor(private http: HttpClient){ }

  get opinion(): Observable<Opinions[]>{
    return this.http.get<Opinions[]>(this.serviceUrl);
  }
}
