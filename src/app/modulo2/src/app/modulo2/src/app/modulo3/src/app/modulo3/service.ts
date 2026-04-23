import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { db } from './db'; // Dexie

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient, private store: Store) {}

  //  Comunicación asíncrona con el API (Http)
  agregarElemento(nuevoItem: any) {
    this.http.post('/api/elementos', nuevoItem).subscribe({
      next: (res) => {
        // Punto 8: Si el API responde OK, notificar a Redux
        this.store.dispatch({ type: '[Lista] Agregar', item: res });

        //  Guardar también en Dexie de forma asíncrona
        db.items.add(res as any).then(() => {
          console.log('Guardado en Dexie correctamente');
        });
      }
    });
  }
}
