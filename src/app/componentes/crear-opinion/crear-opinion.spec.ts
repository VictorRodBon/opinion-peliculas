import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearOpinion } from './crear-opinion';

describe('CrearOpinion', () => {
  let component: CrearOpinion;
  let fixture: ComponentFixture<CrearOpinion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearOpinion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearOpinion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
