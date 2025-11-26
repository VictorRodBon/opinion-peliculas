import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './filtro.html',
  styleUrls: ['./filtro.css'],
})
export class Filtro {
  filtroControl = new FormControl('');

  @Output() filtrar = new EventEmitter<string>();

  aplicarFiltro() {
    const valor = this.filtroControl.value ?? ''; // si es null, lo convertimos a ''
    this.filtrar.emit(valor);
  }
}
