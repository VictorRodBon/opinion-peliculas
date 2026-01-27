import { Component, inject } from '@angular/core';
import { GestionarUsuario } from '../../services/gestionar-usuarios';

@Component({
  selector: 'app-modificar-imagen',
  imports: [],
  templateUrl: './modificar-imagen.html',
  styleUrl: './modificar-imagen.css',
})
export class ModificarImagen {
  private auth = inject(GestionarUsuario);

  selectedFile: File | null = null;
  preview: string | ArrayBuffer | null = null;

  usuarioId = this.auth.id(); // ← luego lo sustituyes por el real

  constructor(private usuarioService: GestionarUsuario) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
  
    if (!file) {
      console.error("No se seleccionó ningún archivo");
      return;
    }
  
    this.selectedFile = file;
  
    const reader = new FileReader();
    reader.onload = () => (this.preview = reader.result);
    reader.readAsDataURL(file); // ← ahora TypeScript sabe que NO es null
  }
  

  

  subirFoto() { 
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('foto', this.selectedFile);

    this.usuarioService.subirFoto(this.usuarioId, formData).subscribe({
      next: (res) => {
        console.log('Foto actualizada', res);
      },
      error: (err) => {
        console.error('Error al subir foto', err);
      },
    });
  }
}
