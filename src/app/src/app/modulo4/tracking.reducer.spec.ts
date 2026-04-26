import { trackingReducer, initialState } from './tracking.reducer';

describe('Tracking Reducer', () => {
  // : Prueba unitaria para el reductor (función pura)
  it('debe incrementar el contador de un tag específico', () => {
    const action = { type: '[Tracking] Incrementar', tag: 'boton-mapa' };
    const state = trackingReducer(initialState, action as any);

    expect(state.clics['boton-mapa']).toBe(1);
    expect(state).not.toBe(initialState); // Verifica que no mutó el original
  });
});
