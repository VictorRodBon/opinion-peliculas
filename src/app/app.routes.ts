import { Routes } from '@angular/router';
import { Login } from './componentes/login/login';
import { Registro } from './componentes/registro/registro';
import { Peliculas } from './componentes/peliculas/peliculas';
import { Opiniones } from './componentes/opiniones/opiniones';
import { CrearPelicula } from './componentes/crearPelicula/crearPelicula';

export const routes: Routes = [
    {path: 'login', component:Login},
    {path: 'registro', component:Registro},
    {path: 'peliculas', component:Peliculas},
    { path: 'opiniones', component: Opiniones },
    { path: 'crearPelicula', component: CrearPelicula },
    { path: '', redirectTo: '/login', pathMatch: 'full'}
    
];
