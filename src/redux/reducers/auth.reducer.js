import {
  CREAR_USUARIO,
  CREAR_USUARIO_ERROR,
  CREAR_USUARIO_SUCCESSFULL
} from '../actions/auth.action';

const init = {
  usuario_creado: false,
  loading:false,
};

export default (state = init, action) => {
  switch (action.type) {
    case CREAR_USUARIO:
      return {...state, loading:true};
    case CREAR_USUARIO_SUCCESSFULL:
      return {...state, usuario_creado: action.data, loading:false};
    case CREAR_USUARIO_ERROR:
      return {...state, usuario_creado:action.data, loading:true};
    default:
      return {...state};
  }
};
