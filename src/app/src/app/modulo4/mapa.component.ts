import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-mapa',
  template: `
    <mgl-map [style]="'mapbox://styles/mapbox/streets-v9'" [zoom]="[9]" [center]="[-74.5, 40]">
      <mgl-marker [lngLat]="[-74.5, 40]" (click)="showPopover = !showPopover">
        <div class="marker"> </div>
      </mgl-marker>
      <mgl-popup *ngIf="showPopover" [lngLat]="[-74.5, 40]">
        <div>¡Hola! Soy un marcador interactivo.</div>
      </mgl-popup>
    </mgl-map>

    <div [@cambiarColor]="estado" (click)="cambiarEstado()" class="caja-animada">
      Haz clic para animar
    </div>
  `,
  animations: [
    trigger('cambiarColor', [
      state('inicial', style({ backgroundColor: 'blue', transform: 'scale(1)' })),
      state('final', style({ backgroundColor: 'red', transform: 'scale(1.2)' })),
      transition('inicial <=> final', animate('500ms ease-in-out'))
    ])
  ]
})
export class MapaComponent {
  showPopover = false;
  estado = 'inicial';

  cambiarEstado() {
    this.estado = this.estado === 'inicial' ? 'final' : 'inicial';
  }
}
