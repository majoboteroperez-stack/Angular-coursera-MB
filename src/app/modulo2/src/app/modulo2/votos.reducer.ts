import { createAction, createReducer, on, props } from '@ngrx/store';

// Punto 9: Actions para agregar y borrar
export const agregarItem = createAction('[Lista] Agregar', props<{ item: any }>());
export const borrarItem = createAction('[Lista] Borrar', props<{ id: number }>());

// Punto 10: Actions para votos
export const votarPositivo = createAction('[Lista] Voto +', props<{ id: number }>());
export const votarNegativo = createAction('[Lista] Voto -', props<{ id: number }>());

export const initialState: any[] = [];

export const miReducer = createReducer(
  initialState,
  on(agregarItem, (state, { item }) => [...state, { ...item, votos: 0 }]),
  on(borrarItem, (state, { id }) => state.filter(i => i.id !== id)),
  // Lógica de contadores de votos por elemento
  on(votarPositivo, (state, { id }) => 
    state.map(i => i.id === id ? { ...i, votos: i.votos + 1 } : i)
  ),
  on(votarNegativo, (state, { id }) => 
    state.map(i => i.id === id ? { ...i, votos: i.votos - 1 } : i)
  )
);
