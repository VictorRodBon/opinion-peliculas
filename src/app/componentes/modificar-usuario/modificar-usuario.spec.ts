import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarUsuario } from './modificar-usuario';

describe('ModificarUsuario', () => {
  let component: ModificarUsuario;
  let fixture: ComponentFixture<ModificarUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarUsuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarUsuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
