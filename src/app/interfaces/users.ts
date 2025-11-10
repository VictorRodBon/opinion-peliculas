import {interfazOpinion} from './opinion';

export interface interfazUsuarios {
    _id?: string;
    nombre: string;
    correo?: string;
    favoritos: string[]; // IDs de películas
    valoraciones: interfazOpinion[];
    fechaRegistro?: string;
}
