import { interfazPeliculas } from "./interfazPeliculas";
import { interfazUsuarios } from "./users";

export interface interfazOpinion {
    _id?:String;
    usuario: interfazUsuarios; // ID de la película
    puntuacion: number;
    descripcion?:string;
    pelicula: interfazPeliculas; // ID de la película
    fechaRegistro: string;
}
