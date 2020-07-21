import {PRODUCTOS} from './productosType';

const inicial = {
  productos: [],
  textoBusqueda: '',
  pedidos: [],
};

export default (state = inicial, action) => {
  switch (action.type) {
    case PRODUCTOS.SYNC:
      return {
        ...state,
        productos: {...action},
      };
    case PRODUCTOS.SYNC_PEDIDOS:
      return {
        ...state,
        pedidos: action.pedidos,
      };
    case PRODUCTOS.BUSQUEDA:
      return {
        ...state,
        textoBusqueda: action.texto,
      };
    case PRODUCTOS.CLEAN_PEDIDOS:
      return {
        ...state,
        pedidos: [],
      };

    default:
      return {...state};
  }
};
