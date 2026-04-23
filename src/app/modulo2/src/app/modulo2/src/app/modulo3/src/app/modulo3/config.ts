import { InjectionToken } from '@angular/core';

// Punto 3: InjectionToken propio para una configuración
export const API_CONFIG = new InjectionToken<string>('apiUrl');

// Punto 4 y 5: Clases para demostrar useClass y useExisting
export class BaseLogger { log(msg: string) { console.log('Base:', msg); } }
export class AdvancedLogger extends BaseLogger { override log(msg: string) { console.log('Advanced:', msg); } }

// Esto se configuraría en el module.ts así:
// providers: [
//   { provide: BaseLogger, useClass: AdvancedLogger }, // 
//   { provide: 'LOG_ALIAS', useExisting: BaseLogger } // 
// ]
