import { interfazPeliculas } from "./interfazPeliculas";
import { interfazUsuarios } from "./users";

export interface interfazOpinion {
    pelicula: interfazPeliculas; // ID de la película
    usuario: interfazUsuarios; // ID de la película
    puntuacion: number;
    descripcion?:string;
}
