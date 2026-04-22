import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Punto 7: Validación personalizada y parametrizable
export function validarLongitudMinima(min: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value && control.value.length < min ? { 'errorMinimo': { tamanoRequerido: min } } : null;
  };
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {
  public miFormulario: FormGroup;

  // Punto 1: Uso de EventEmitter decorado con @Output
  @Output() alEnviarDato: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    // Punto 4: Configuración de FormGroup con FormBuilder y al menos 2 campos
    this.miFormulario = this.fb.group({
      usuario: ['', [Validators.required, validarLongitudMinima(5)]],
      comentario: ['', [Validators.required]]
    });
  }

  enviar() {
    if (this.miFormulario.valid) {
      this.alEnviarDato.emit(this.miFormulario.value);
    }
  }
}
