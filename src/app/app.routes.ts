import { Routes } from '@angular/router';
import { Login } from './componentes/login/login';
import { Registro } from './componentes/registro/registro';
import { Peliculas } from './componentes/peliculas/peliculas';
import { Opiniones } from './componentes/opiniones/opiniones';
import { CrearPelicula } from './componentes/crearPelicula/crearPelicula';
import { authGuard } from './guard-auth';
import { CrearOpinion } from './componentes/crear-opinion/crear-opinion';

export const routes: Routes = [
    { path: 'login', component:Login },
    { path: 'registro', component:Registro },
    { path: 'peliculas', component:Peliculas },
    { path: 'opiniones', component: Opiniones },
    { path: 'crearPelicula', component: CrearPelicula, canActivate:[authGuard] },
    { path: 'crearOpinion', component: CrearOpinion, canActivate:[authGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
