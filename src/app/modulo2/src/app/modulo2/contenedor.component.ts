import { Component } from '@angular/core';

@Component({
  selector: 'app-contenedor',
  template: `
    <div style="padding: 20px; border: 1px solid #ccc;">
      <h2>Panel Principal - Módulo 2</h2>
      
      <app-formulario (alEnviarDato)="manejarEventoHijo($event)"></app-formulario>
      
      <hr>
      <div *ngIf="datosRecibidos">
        <h3>Vista previa de datos recibidos:</h3>
        <pre>{{ datosRecibidos | json }}</pre>
      </div>
    </div>
  `
})
export class ContenedorComponent {
  datosRecibidos: any;

  // Este método recibe la información emitida por el @Output del hijo
  manejarEventoHijo(datos: any) {
    this.datosRecibidos = datos;
    console.log('Información capturada por el componente padre:', datos);
  }
}
