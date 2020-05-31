import {
  CREAR_USUARIO,
  CREAR_USUARIO_ERROR,
  CREAR_USUARIO_SUCCESSFULL,
  ENTRAR_USUARIO,
  ENTRAR_USUARIO_SUCCESSFULL,
  ENTRAR_USUARIO_ERROR,
  LIMPIAR_AUTH
} from '../actions/auth.action';

const init = {
  inicio: true,
  error: false,
  loading: false,
  user: null,

};

export default (state = init, action) => {
  switch (action.type) {
    case CREAR_USUARIO:
      return { ...state, loading: true, error: false, inicio: true };
    case CREAR_USUARIO_SUCCESSFULL:
      return { ...state, loading: false, error: action.data, inicio: false };
    case CREAR_USUARIO_ERROR:
      return { ...state, error: action.data, loading: false, inicio: false };
    case ENTRAR_USUARIO:
      return { ...state, loading: true, error: false, inicio: true };
    case ENTRAR_USUARIO_SUCCESSFULL:
      return { ...state, loading: false, error: action.data.error, user: action.data.user, inicio: false };
    case ENTRAR_USUARIO_ERROR:
      return { ...state, error: action.data, loading: false, inicio: false };
    case LIMPIAR_AUTH:
      return { ...state, error: false, loading: false, inicio: true, user:null };
    default:
      return { ...state };
  }
};
