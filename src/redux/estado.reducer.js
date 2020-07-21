const SET_ESTADO = 'SET_ESTADO';
const initialState = {
  estado: true,
};
export function setEstado(info) {
  return {
    type: SET_ESTADO,
    ...info,
  };
}

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_ESTADO:
      return {
        ...state,
        estado: action.estado,
      };

    default:
      return {...state};
  }
};
