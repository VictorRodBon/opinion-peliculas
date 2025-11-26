import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPeliculas } from './editar-pelicula';

describe('EditarPelicula', () => {
  let component: EditarPeliculas;
  let fixture: ComponentFixture<EditarPeliculas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPeliculas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPeliculas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
