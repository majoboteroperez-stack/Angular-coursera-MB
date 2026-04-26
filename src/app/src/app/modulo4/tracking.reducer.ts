import { Action, createReducer, on } from '@ngrx/store';

// : Estado inicial con contadores
export interface TrackingState {
  clics: { [tag: string]: number };
}

export const initialState: TrackingState = {
  clics: {}
};

// : Reducer reactivo que actualiza la cuenta
export const trackingReducer = createReducer(
  initialState,
  on({ type: '[Tracking] Incrementar' } as any, (state, { tag }: any) => ({
    ...state,
    clics: {
      ...state.clics,
      [tag]: (state.clics[tag] || 0) + 1
    }
  }))
);
