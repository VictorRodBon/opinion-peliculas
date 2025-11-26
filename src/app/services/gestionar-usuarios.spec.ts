import { TestBed } from '@angular/core/testing';

import { GestionarUsuario } from './gestionar-usuarios';

describe('GestionarUsuarios', () => {
  let service: GestionarUsuario;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionarUsuario);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
