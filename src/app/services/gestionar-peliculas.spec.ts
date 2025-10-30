import { TestBed } from '@angular/core/testing';

import { GestionarPeliculas } from './gestionar-peliculas';

describe('GestionarPeliculas', () => {
  let service: GestionarPeliculas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionarPeliculas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
