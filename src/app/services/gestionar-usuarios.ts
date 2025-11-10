import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interfazUsuarios } from '../interfaces/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GestionarUsuarios {
  private serviceUrl='/public/users.json';

  constructor(private http: HttpClient){ }

  getUsuario(): Observable<interfazUsuarios[]>{
    return this.http.get<interfazUsuarios[]>(this.serviceUrl);
  }
}
