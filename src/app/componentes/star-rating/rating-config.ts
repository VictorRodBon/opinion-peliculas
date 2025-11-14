import { Component, Input } from '@angular/core';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-rating-config',
  imports: [NgbRatingModule],
  templateUrl: './rating-config.html',
  styleUrls: ['./rating-config.css'],
  providers: [NgbRatingConfig],
})
export class NgbdRatingConfig {

  @Input() rate: number = 0;
  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 10;
    config.readonly = true;
  }
}