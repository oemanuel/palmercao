const initialState = {
  // {id: 1, nombre: 'jabon lak', tipo: 'unitario', valor: 1000, cantidad: 0},
  // {id: 2, nombre: 'detodito picante', tipo: 'pesado', valor: 1200, cantidad: 0},
  carrito: [

  ],
  total: 0,
};

const AÑADIR = 'AÑADIR';

export const añadir = info => ({
  type: AÑADIR,
  payload: {
    ...info,    
  },
});

export default (state = initialState, action) => {
  switch (action.type) {
    case AÑADIR:
    
      let itemEX = state.carrito.find(item => item.identificador === action.payload.identificador);
      if (itemEX) {
        //si el producto ya está en la lista
        if (action.payload.cantidad === 0) {
          //eliminar de la lista
          return Object.assign({}, state, {
            carrito: state.carrito.filter(producto => {
              return producto.identificador !== itemEX.identificador;
            }),
          });
          //--
        } else {
          //actualizar cantidad
          return Object.assign({}, state, {
            carrito: state.carrito.map(producto => {
              return producto.identificador === itemEX.identificador
                ? Object.assign({}, producto, action.payload)
                : producto;
            }),
          });
        }
      } else {
        // si el producto no está en la lista
        return Object.assign({}, state, {
          carrito: [action.payload, ...state.carrito],
        });
      }

    default:
      return state;
  }
};
