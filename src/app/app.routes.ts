import { Routes } from '@angular/router';
import { Login } from './componentes/login/login';
import { Registro } from './componentes/registro/registro';
import { Dashboard } from './componentes/dashboard/dashboard';
import { Peliculas } from './componentes/peliculas/peliculas';
import { Opiniones } from './componentes/opiniones/opiniones';

export const routes: Routes = [
    {path: 'login', component:Login},
    {path: 'registro', component:Registro},
    {path: 'dashboard', component:Dashboard},
    {path: 'peliculas', component:Peliculas},
    {path: 'opiniones', component:Opiniones},
    { path: '', redirectTo: '/login', pathMatch: 'full'}

];
