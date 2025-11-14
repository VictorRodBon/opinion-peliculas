import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { interfazOpinion } from '../../interfaces/opinion';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdRatingConfig } from '../star-rating/rating-config';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatButtonModule, NgbRatingModule, CommonModule, NgbdRatingConfig],
  templateUrl: './card.html',
  styleUrl: './card.css',
  providers: [NgbRatingConfig],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  @Input() opinion!: interfazOpinion;

}
