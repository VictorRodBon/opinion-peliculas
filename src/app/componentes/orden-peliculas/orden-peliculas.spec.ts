import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenPeliculas } from './orden-peliculas';

describe('OrdenPeliculas', () => {
  let component: OrdenPeliculas;
  let fixture: ComponentFixture<OrdenPeliculas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenPeliculas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenPeliculas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
