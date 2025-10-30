import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interfaces/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GestionarUsuarios {
  private serviceUrl='/public/users.json';

  constructor(private http: HttpClient){ }

  getUsuario(): Observable<Users[]>{
    return this.http.get<Users[]>(this.serviceUrl);
  }
}
