import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { interfazOpinion } from '../../interfaces/opinion';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdRatingConfig } from '../star-rating/rating-config';
import { CommonModule } from '@angular/common';
 
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatButtonModule, NgbRatingModule, CommonModule, NgbdRatingConfig],
  templateUrl: './card.html',
  styleUrl: './card.css',
  providers: [NgbRatingConfig],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ 
    trigger('fadeIn', [ 
      transition(':enter', [ 
        style({ opacity: 0, transform: 'translateY(10px)' }), 
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })) 
      ]) 
    ]) 
  ]
})
export class Card {
  @Input() opinion!: interfazOpinion;

}
