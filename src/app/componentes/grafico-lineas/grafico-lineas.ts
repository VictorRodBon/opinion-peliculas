import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';
import { GestionarEstadisticas } from '../../services/gestionar-estadisticas';
import { EstadisticaOpiniones } from '../../interfaces/interfazEstadisticas';

@Component({
  selector: 'app-grafico-lineas',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './grafico-lineas.html',
  styleUrl: './grafico-lineas.css',
})
export class GraficoLineas implements OnInit {

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  chartData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        label: 'Opiniones por día',
        data: [],
        borderColor: 'blue',
        backgroundColor: 'rgba(0,0,255,0.3)',
        fill: true
      }
    ]
  };

  chartOptions: ChartOptions<'line'> = {
    responsive: true
  };

  constructor(private gestionarEstadisticas: GestionarEstadisticas) {}

  ngOnInit(): void {
    const desde = new Date('2025-01-01');
    const hasta = new Date('2026-12-31');
    this.returnEstadisticas(desde, hasta);
  }

  returnEstadisticas(desde: Date, hasta: Date): void {
    this.gestionarEstadisticas.getEstadisticas(desde, hasta)
      .subscribe((data: EstadisticaOpiniones[]) => {
        console.log(data);

        this.chartData = {
          labels: data.map(item => new Date(item._id).toLocaleDateString()),
          datasets: [
            {
              label: 'Opiniones por día',
              data: data.map(item => item.total),
              borderColor: 'blue',
              backgroundColor: 'rgba(0,0,255,0.3)',
              fill: true
            }
          ]
        };

        this.chart?.update();
      });
  }
}
