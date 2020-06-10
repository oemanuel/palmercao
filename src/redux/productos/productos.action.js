import {PRODUCTOS} from './productosType';

export function syncProductos(productos) {
  return {
    type: PRODUCTOS.SYNC,
    productos,
  };
}
export function busquedaProductos(texto) {
  return {
    type: PRODUCTOS.BUSQUEDA,
    texto,
  };
}
