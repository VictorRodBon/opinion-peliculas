import { TestBed } from '@angular/core/testing';

import { GestionarOpiniones } from './gestionar-opiniones';

describe('GestionarOpiniones', () => {
  let service: GestionarOpiniones;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionarOpiniones);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
