import { Component, OnInit } from '@angular/core';
import { interfazOpinion } from '../../interfaces/opinion';
import { GestionarOpiniones } from '../../services/gestionar-opiniones';
import { Card } from '../card/card';

@Component({
    selector: 'app-opiniones',
    imports: [Card ],
    templateUrl: './opiniones.html',
    styleUrls: ['./opiniones.css'],
})
export class Opiniones implements OnInit {
    listaOpiniones: interfazOpinion[] = [];
    constructor(private GestionarOpiniones: GestionarOpiniones) { }
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
        });
    }


    ngOnInit(): void {
        
        this.getOpiniones();
    }
}
