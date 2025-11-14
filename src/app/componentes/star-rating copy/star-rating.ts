import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [CommonModule],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css',
})

export class StarRating {
  @Input() rating: number = 0;
  @Input() maxStars: number = 5;

  getStars(): number[] {
    return Array.from({ length: this.maxStars }, (_, i) => i);
  }

  getFilledStars(): number {
    return Math.floor(this.rating / 2);
  }


  hasHalfStar(index: number): boolean {
    const scaledRating = this.rating / 2;
    return index === Math.floor(scaledRating) && scaledRating % 1 >= 0.5;
  }

}

