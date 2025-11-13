import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Menu } from './componentes/menu/menu';
import { CommonModule } from '@angular/common';
import { StarRating } from './componentes/star-rating/star-rating';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, CommonModule, StarRating],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('opiniones-peliculas');
}
