import {takeLatest} from 'redux-saga/effects';

import {CREAR_USUARIO, ENTRAR_USUARIO} from '../actions/auth.action';
import {registrar, login} from './auth.saga';

export default function* sagas() {
  yield takeLatest(CREAR_USUARIO, registrar);
  yield takeLatest(ENTRAR_USUARIO, login);
}
