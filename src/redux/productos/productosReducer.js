import {PRODUCTOS} from './productosType';

const inicial = {
  productos: [],
};

export default (state = inicial, action) => {
  switch (action.type) {
    case PRODUCTOS.SYNC:
      return {
        ...state,
        productos: {...action},
      };

    default:
      return {...state};
  }
};
