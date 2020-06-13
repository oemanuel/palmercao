import {PRODUCTOS} from './productosType';

const inicial = {
  productos: [],
  textoBusqueda: '',
};

export default (state = inicial, action) => {
  switch (action.type) {
    case PRODUCTOS.SYNC:
      return {
        ...state,
        productos: {...action},
      };
    case PRODUCTOS.BUSQUEDA:
      return {
        ...state,
        textoBusqueda: action.texto,
      };

    default:
      return {...state};
  }
};
