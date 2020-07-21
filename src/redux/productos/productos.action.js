import {PRODUCTOS} from './productosType';

export function syncProductos(productos) {
  return {
    type: PRODUCTOS.SYNC,
    productos,
  };
}
export function syncPedidos(pedidos) {
  return {
    type: PRODUCTOS.SYNC_PEDIDOS,
    pedidos,
  };
}
export function stopPedidos() {
  return {
    type: PRODUCTOS.CLEAN_PEDIDOS,
  };
}
export function busquedaProductos(texto) {
  return {
    type: PRODUCTOS.BUSQUEDA,
    texto,
  };
}
