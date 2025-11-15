import { Injectable, computed, effect, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class ServicioUsuarios {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  // Forma clásica: devuelve un Observable
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  // Forma moderna con Signals (usando toSignal)
  usersSignal = toSignal(this.getUsers(), { initialValue: [] });
}
