import { TestBed } from '@angular/core/testing';

import { GestionarEstadisticas } from './gestionar-estadisticas';

describe('GestionarEstadisticas', () => {
  let service: GestionarEstadisticas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionarEstadisticas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
