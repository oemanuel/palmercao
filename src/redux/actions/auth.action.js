export const CREAR_USUARIO = 'CREAR_USUARIO';
export const CREAR_USUARIO_SUCCESSFULL = 'CREAR_USUARIO_SUCCESFULL';
export const CREAR_USUARIO_ERROR = 'CREAR_USUARIO_ERROR';
// export const RESPONSE_LOGIN = 'RESPONSE_LOGIN';
// export const FETCH_REGISTER = 'FETCH_REGISTER';
// export const RESPONSE_REGISTER = 'RESPONSE_REGISTER';
// export const ERROR = 'ERROR';

export const crear_usuario = payload => {
  return {type: CREAR_USUARIO, payload};
};
export const crear_usuario_successfull = data => {
  return {type: CREAR_USUARIO_SUCCESSFULL, data};
};
export const crear_usuario_error = data => {
  return {type: CREAR_USUARIO_ERROR, data};
};
// export const fetch_register = payload => {
//   return {type: FETCH_REGISTER, payload};
// };
// export const response_register = data => {
//   return {type: RESPONSE_REGISTER, data};
// };
// export const error = data => {
//   return {type: ERROR, data};
// };
