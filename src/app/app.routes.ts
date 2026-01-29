import { perfilGuard } from './guard-perfil';
import { GraficoLineas } from './componentes/grafico-lineas/grafico-lineas';
import { Routes } from '@angular/router';
import { Login } from './componentes/login/login';
import { Registro } from './componentes/registro/registro';
import { ModificarImagen } from './componentes/modificar-imagen/modificar-imagen';
import { Peliculas } from './componentes/peliculas/peliculas';
import { Opiniones } from './componentes/opiniones/opiniones';
import { CrearPelicula } from './componentes/crearPelicula/crearPelicula';
import { authGuard } from './guard-auth';
import { CrearOpinion } from './componentes/crear-opinion/crear-opinion';
import { EditarPeliculas } from './componentes/editar-pelicula/editar-pelicula';
import { DetallePelicula } from './componentes/detalle-pelicula/detalle-pelicula';

import { ListarAcciones } from './componentes/listar-acciones/listar-acciones';


export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'modificar', component: ModificarImagen },
  { path: 'peliculas', component: Peliculas },
  { path: 'acciones', component: ListarAcciones },
  { path: 'opiniones', component: Opiniones, canActivate: [authGuard]  },
  //{ path: 'opiniones', component: Opiniones },
  { path: 'estadisticas', component: GraficoLineas, canActivate: [authGuard,perfilGuard('ADMIN')]  },
  { path: 'detallePeliculas/:peliculaId', component: DetallePelicula, canActivate: [authGuard]  },
  { path: 'editarPelicula/:peliculaId', component: EditarPeliculas, canActivate: [authGuard] },
  { path: 'crearPelicula', component: CrearPelicula, canActivate: [authGuard] },
  { path: 'crearOpinion/:peliculaId', component: CrearOpinion, canActivate: [authGuard] },
  { path: 'crearOpinion/:peliculaId', component: CrearOpinion, canActivate: [authGuard] },
  { path: '', redirectTo: 'peliculas', pathMatch: 'full' },
];
