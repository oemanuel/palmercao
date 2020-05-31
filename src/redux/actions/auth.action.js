
//crear
export const CREAR_USUARIO = 'CREAR_USUARIO';
export const CREAR_USUARIO_SUCCESSFULL = 'CREAR_USUARIO_SUCCESFULL';
export const CREAR_USUARIO_ERROR = 'CREAR_USUARIO_ERROR';

//entrar
export const ENTRAR_USUARIO = 'ENTRAR_USUARIO';
export const ENTRAR_USUARIO_SUCCESSFULL = 'ENTRAR_USUARIO_SUCCESFULL';
export const ENTRAR_USUARIO_ERROR = 'ENTRAR_USUARIO_ERROR';

//clear auth
export const LIMPIAR_AUTH = 'LIMPIAR_AUTH';

//crear
export const crear_usuario = payload => {
  return {type: CREAR_USUARIO, payload};
};
export const crear_usuario_successfull = data => {
  return {type: CREAR_USUARIO_SUCCESSFULL, data};
};
export const crear_usuario_error = data => {
  return {type: CREAR_USUARIO_ERROR, data};
};

//entrar
export const entrar_usuario = payload => {
  return {type: ENTRAR_USUARIO, payload};
};
export const entrar_usuario_successfull = data => {
  return {type: ENTRAR_USUARIO_SUCCESSFULL, data};
};
export const entrar_usuario_error = data => {
  return {type: ENTRAR_USUARIO_ERROR, data};
};

//clear auth
export const limpiar_auth = () => {
  return {type: LIMPIAR_AUTH};
};

