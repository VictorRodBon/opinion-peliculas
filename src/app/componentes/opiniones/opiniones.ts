import { Component, OnInit } from '@angular/core';
import { interfazOpinion } from '../../interfaces/opinion';
import { GestionarOpiniones } from '../../services/gestionar-opiniones';
import { StarRating } from '../star-rating/star-rating';

@Component({
    selector: 'app-opiniones',
    imports: [StarRating],
    templateUrl: './opiniones.html',
    styleUrls: ['./opiniones.css'],
})
export class Opiniones implements OnInit {
    listaOpiniones: interfazOpinion[] = [];
    constructor(private GestionarOpiniones: GestionarOpiniones) { }
    getOpiniones(): void {
        this.GestionarOpiniones.getOpiniones().subscribe((datos) => this.listaOpiniones = datos)
    }

    ngOnInit(): void {
        this.getOpiniones();
    }
}
