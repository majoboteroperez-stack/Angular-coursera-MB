import Dexie, { Table } from 'dexie';

//  Base de datos Dexie con una entidad
export interface Item { id?: number; nombre: string; }

export class MyDatabase extends Dexie {
  items!: Table<Item>;
  constructor() {
    super('MiBaseDeDatos');
    this.version(1).stores({ items: '++id, nombre' });
  }
}
export const db = new MyDatabase();
