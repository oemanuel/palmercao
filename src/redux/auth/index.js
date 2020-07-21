import entrarReducer from './login/reducers/entrar.reducer';
import registrarReducer from './registrar/reducers/registrar.reducer';
import recuperarReducer from './recuperar/reducers/recuperar.reducer';

import {combineReducers} from 'redux';

export default combineReducers({
  entrarReducer,
  registrarReducer,
  recuperarReducer,
});
