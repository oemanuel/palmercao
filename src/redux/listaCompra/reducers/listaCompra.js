const initialState = {
  carrito: [],
  total: 0,
};

const AÑADIR = "AÑADIR";
const ELIMINAR = "ELIMINAR";
const QUITAR = "QUITAR";
const AGREGAR = "AGREGAR";

export const añadir = (info) => ({
  type: AÑADIR,
  payload: {
    ...info,
  },
});
export const eliminar = (info) => ({
  type: ELIMINAR,
  payload: {
    ...info,
  },
});
export const agregar = (info) => ({
  type: AGREGAR,
  payload: {
    ...info,
  },
});
export const quitar = (info) => ({
  type: QUITAR,
  payload: {
    ...info,
  },
});

export default (state = initialState, action) => {
  let itemEx = null;

  switch (action.type) {
    case AÑADIR:
      if (state.carrito.length != 0) {
        itemEx = state.carrito.find(
          (item) => item.identificador === action.payload.identificador
        );
      }

      if (itemEx) {
        // si el producto está en la lista
        return {
          ...state,
          carrito: state.carrito.map((item) =>
            item.identificador === action.payload.identificador
              ? {
                  ...item,
                  cantidad: item.cantidad + action.payload.cantidad,
                  total: item.total+action.payload.total,
                }
              : item
          ),
          total: state.total + action.payload.total,
        };
      } else {
        //si el producto no existe
        return {
          ...state,
          carrito: [action.payload, ...state.carrito],
          total: state.total + action.payload.total,
        };
      }
      // return {...state};
      break; 
    case ELIMINAR:
      if (state.carrito.length != 0) {
        itemEx = state.carrito.find(
          (item) => item.identificador === action.payload.identificador
        );
      }

      if (itemEx) {
        // si el producto está en la lista
        return {
          ...state,
          carrito: state.carrito.filter((item) => item.identificador !== action.payload.identificador),
          total: state.total - (action.payload.tipo=='unitario'?(action.payload.precio*1):((action.payload.precio/500)*130))
        };
      } else {
        //si el producto no existe
        return {
          ...state
        };
      }
      // return {...state};
      break;
    case AGREGAR:
      if (state.carrito.length != 0) {
        itemEx = state.carrito.find(
          (item) => item.identificador === action.payload.identificador
        );
      }

      if (itemEx) {
        // si el producto está en la lista
        return {
          ...state,
          carrito: state.carrito.map((item) =>
            item.identificador === action.payload.identificador
              ? {
                  ...item,
                  cantidad: item.cantidad + (item.tipo=='unitario'?1:130),
                  total: item.total+   (item.tipo!='unitario'?(action.payload.precio/500)*130:(action.payload.precio)*1) ,
                }
              : item
          ),
          total: state.total + (itemEx.tipo!='unitario'?(action.payload.precio/500)*130:(action.payload.precio)*1),
        };
      } else {
        return { ...state };
      }
      // return {...state};
      break;
    case QUITAR:
      if (state.carrito.length != 0) {
        itemEx = state.carrito.find(
          (item) => item.identificador === action.payload.identificador
        );
      }
      if (itemEx) {
        return {
          ...state,
          carrito: state.carrito.map((item) =>
            item.identificador === action.payload.identificador
              ? {
                  ...item,
                  cantidad: item.cantidad - (item.tipo=='unitario'?1:130),
                  total: item.total-  ( item.tipo!='unitario'?(action.payload.precio/500)*130:(action.payload.precio)*1) ,


                }
              : item
          ),
          total: state.total - (itemEx.tipo!='unitario'?(action.payload.precio/500)*130:(action.payload.precio)*1) ,
        };
      } else {
        return { ...state };
      }
      break;

    default:
      return state;
  }
};
