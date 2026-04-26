import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Directive({
  selector: '[appTracking]'
})
export class TrackingDirective {
  // : Lee los "tracking tags" del DOM
  @Input('appTracking') tag: string = '';

  // : Recibe ElementRef por inyección de dependencias
  constructor(private el: ElementRef, private store: Store) {}

  // : Se suscribe al evento click del DOM
  @HostListener('click')
  onClick() {
    console.log('Clic trackeado en:', this.tag);
    // : Actualiza Redux (suponiendo una acción de incremento)
    this.store.dispatch({ type: '[Tracking] Incrementar', tag: this.tag });
  }
}
