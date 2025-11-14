import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdRatingConfig } from './rating-config';

describe('NgbdRatingConfig', () => {
  let component: NgbdRatingConfig;
  let fixture: ComponentFixture<NgbdRatingConfig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbdRatingConfig]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgbdRatingConfig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
