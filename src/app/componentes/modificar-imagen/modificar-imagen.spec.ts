import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarImagen } from './modificar-imagen';

describe('ModificarImagen', () => {
  let component: ModificarImagen;
  let fixture: ComponentFixture<ModificarImagen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarImagen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarImagen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
