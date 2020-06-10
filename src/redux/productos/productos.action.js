import {PRODUCTOS} from './productosType';

export function syncProductos(productos) {
  return {
    type: PRODUCTOS.SYNC,
    productos,
  };
}
