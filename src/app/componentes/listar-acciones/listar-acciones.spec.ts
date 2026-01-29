import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAcciones } from './listar-acciones';

describe('ListarAcciones', () => {
  let component: ListarAcciones;
  let fixture: ComponentFixture<ListarAcciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarAcciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarAcciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
