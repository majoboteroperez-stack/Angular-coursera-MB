import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorComponent } from './contenedor.component';

// Punto 2: Configuración de rutas con Redirect y Component
const routes: Routes = [
  { path: 'inicio', component: ContenedorComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/* Punto 3: En el archivo app.component.html (el principal) 
  debes asegurarte de tener la etiqueta:
  <router-outlet></router-outlet> 
*/
