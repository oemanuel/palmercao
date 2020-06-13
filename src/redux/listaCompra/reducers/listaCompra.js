const initialState = {
  carrito: [],
  total: 0,
  cargando: false,
  response: null,
  error: null,
};

const AÑADIR = "AÑADIR";
const ELIMINAR = "ELIMINAR";
const QUITAR = "QUITAR";
const AGREGAR = "AGREGAR";
export const ENVIAR = {
  SOLICITUD: "ENVIAR_SOLICITUD",
  CORRECTO: "ENVIAR_CORRECTO",
  FALLIDO: "ENVIAR_FALLIDO",
};

export const enviar_solicitud = (info) => ({
  type: ENVIAR.SOLICITUD,
  payload: {
    ...info,
  },
});
export const enviar_correcto = (info) => ({
  type: ENVIAR.CORRECTO,
  payload: {
    ...info,
  },
});
export const enviar_fallido = (info) => ({
  type: ENVIAR.FALLIDO,
  payload: {
    ...info,
  },
});
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
    case ENVIAR.SOLICITUD:
      return {
        ...state,
        cargando: true,
        response: null,
        error: null,
      };
      break;
    case ENVIAR.CORRECTO:
      return {
        ...state,
        cargando: false,
        response: action.payload,
        error: null,
        carrito: [],
        total: 0,
      };
      break;
    case ENVIAR.FALLIDO:
      return {
        ...state,
        cargando: false,
        error: action.payload,
        response: null,
      };
      break;

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
                  total: item.total + action.payload.total,
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
        itemEx = state.carrito.find( (item) => item.identificador === action.payload.identificador);
      if (itemEx) {
        // si el producto está en la lista
        return {
          ...state,
          carrito: state.carrito.filter(
            (item) => item.identificador !== action.payload.identificador
          ),
        };
      } else {
        //si el producto no existe
        return {
          ...state,
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
                  cantidad: item.cantidad + (item.tipo == "unitario" ? 1 : 100),
                  total:
                    item.total +
                    (item.tipo != "unitario"
                      ? (action.payload.precio / 500) * 100
                      : action.payload.precio * 1),
                }
              : item
          ),
          total:
            state.total +
            (itemEx.tipo != "unitario"
              ? (action.payload.precio / 500) * 100
              : action.payload.precio * 1),
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
                  cantidad: item.cantidad - (item.tipo == "unitario" ? 1 : 100),
                  total:
                    item.total -
                    (item.tipo != "unitario"
                      ? (action.payload.precio / 500) * 100
                      : action.payload.precio * 1),
                }
              : item
          ),
          total:
            state.total -
            (itemEx.tipo != "unitario"
              ? (action.payload.precio / 500) * 100
              : action.payload.precio * 1),
        };
      } else {
        return { ...state };
      }
      break;

    default:
      return state;
  }
};
