import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { GestionarUsuario } from '../../services/gestionar-usuarios';

@Component({
  selector: 'ModificarUsuario',
  imports: [ReactiveFormsModule],
  templateUrl: './modificar-usuario.html',
  styleUrl: './modificar-usuario.css'
})
export class ModificarUsuario {
  private gestionarUsuarios = inject(GestionarUsuario);

  modificarForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.modificarForm = this.fb.group({
      codigo: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      clave: ['', []] // opcional, solo si quieres permitir cambiar contraseña
    });
  }

  cargarDatos(usuario: any) {
    this.modificarForm.patchValue({
      codigo: usuario.codigo,
      nombre: usuario.nombre,
      email: usuario.email,
      // clave no se carga por seguridad
    });
  }

  onSubmit() {
    if (this.modificarForm.valid) {
      const datos = this.modificarForm.value;
      this.gestionarUsuarios.modificarUsuario(datos).subscribe({
        next: () => alert('Usuario modificado correctamente'),
        error: (err) => console.error('Error al modificar usuario', err)
      });
    }
  }

  get f() {
    return this.modificarForm.controls;
  }
}
