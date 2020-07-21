export function setEstado(info) {
  return {
    ...info,
  };
}
const SET_ESTADO = 'SET_ESTADO';
const initialState = {
  estado: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ESTADO:
      return {
        ...state,
        estado: {...action},
      };

    default:
      return {...state};
  }
};
