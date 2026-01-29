import { Component, ViewChild, AfterViewInit, inject, computed, signal } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, SortDirection } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

import { interfazPeliculas } from '../../interfaces/interfazPeliculas';
import { GestionarPeliculas } from '../../services/gestionar-peliculas';
import { MatTableDataSource } from '@angular/material/table'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Filtro } from '../filtro/filtro';

import { GestionarUsuario } from '../../services/gestionar-usuarios';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.html',
  styleUrl: './peliculas.css',
  imports: [
    RouterLinkWithHref,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    DatePipe,
    Filtro,
  ],
})
export class Peliculas implements AfterViewInit {
  
  private auth = inject(GestionarUsuario);
  esAdmin= this.auth.perfil;
  foto = this.auth.foto;
  estaAutenticado= this.auth.token; 

  private gestionarPeliculas = inject(GestionarPeliculas);
  private snackBar = inject(MatSnackBar);

  displayedColumns: string[] = ['title', 'director', 'premiere', 'duration', 'accion'];
  dataSource = new MatTableDataSource<interfazPeliculas>();

  resultsLength = 0;
  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.gestionarPeliculas.getPeliculas().pipe(
            catchError(() => {
              this.isLoadingResults = false;
              return observableOf([]);
            })
          );
        }),
        map((datos: interfazPeliculas[]) => {
          this.isLoadingResults = false;
          this.resultsLength = datos.length;
          return datos;
        })
      )
      .subscribe((datos) => {
        this.dataSource.data = datos;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        // 🔎 Personalizar filtro: título + director
        this.dataSource.filterPredicate = (data: interfazPeliculas, filter: string) => {
          return (
            data.title.toLowerCase().includes(filter) ||
            data.director.toLowerCase().includes(filter)
          );
        };
      });
  }

  eliminarPelicula(id: string) {
    this.gestionarPeliculas.borrarPelicula(id).subscribe({
      next: () => {
        this.snackBar.open('Película eliminada correctamente', 'Cerrar', { duration: 3000 });
        // Opcional: recargar la lista
        this.dataSource.data = this.dataSource.data.filter(p => p._id !== id);
      },
      error: err => {
        console.error('Error al eliminar película:', err);
        this.snackBar.open('Error al eliminar la película', 'Cerrar', { duration: 3000 });
      }
    });
  }

  aplicarFiltro(valor: string) {
    this.dataSource.filter = valor.trim().toLowerCase();
  }


}
