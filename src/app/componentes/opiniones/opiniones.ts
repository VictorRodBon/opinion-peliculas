import { Component, OnInit } from '@angular/core';
import { interfazOpinion } from '../../interfaces/opinion';
import { GestionarOpiniones } from '../../services/gestionar-opiniones';

import { Filtro } from '../filtro/filtro';
import { GestionarPeliculas } from '../../services/gestionar-peliculas';
import { interfazPeliculas } from '../../interfaces/interfazPeliculas';
import { OrdenPeliculas } from '../orden-peliculas/orden-peliculas';

@Component({
    selector: 'app-opiniones',
    imports: [ Filtro,OrdenPeliculas ],
    templateUrl: './opiniones.html',
    styleUrls: ['./opiniones.css'],
})
export class Opiniones implements OnInit {
    listaOpiniones: interfazOpinion[] = [];
    opinionesFiltradas: interfazOpinion[] = [];
    listaPeliculas: import("../../interfaces/interfazPeliculas").interfazPeliculas[] | undefined;
    
    constructor(
        private GestionarOpiniones: GestionarOpiniones,
        private GestionarPeliculas: GestionarPeliculas
    ){}
    
    getOpiniones(): void {
        this.GestionarOpiniones.getOpiniones().subscribe((datos) => {
            this.listaOpiniones = datos.map(op => {
                const fecha = op.fechaRegistro ? new Date(op.fechaRegistro) : new Date();
                return {
                    ...op,
                    fechaRegistro: fecha.toLocaleDateString('es-ES', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    })
                };
            });
            this.opinionesFiltradas = [...this.listaOpiniones]
        });
    }


    ngOnInit(): void {
        this.getOpiniones();
    }

    getPeliculas(): void {
        this.GestionarPeliculas.getPeliculas().subscribe((peliculas) => {
        this.listaPeliculas = peliculas;
        });
    }

    // 🔎 obtener película asociada a una opinión
    getPelicula(opinion: interfazOpinion): interfazPeliculas {
    return opinion.pelicula;
    }

    
    aplicarFiltro(valor: string) {
        const filtro = valor.toLowerCase();
        this.opinionesFiltradas = this.listaOpiniones.filter(op =>
            op.descripcion?.toLowerCase().includes(filtro) ||
            op.pelicula?.title.toLowerCase().includes(filtro) ||   // 👈 aquí el cambio
            op.usuario?.nombre?.toLowerCase().includes(filtro)     // 👈 si quieres filtrar por usuario
        );
    }

    // duardar una opinion
    guardarOpinion():void{
        
    }

    // modificar una opinion
    modificarOpinion():void{

    }

    // elimnar una opinion
    eliminarOpinion():void{

    }

}
