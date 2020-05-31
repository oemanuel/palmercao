import {takeLatest} from 'redux-saga/effects';

import {CREAR_USUARIO} from '../actions/auth.action';
import {registrar} from './auth.saga';

export default function* sagas() {
  yield takeLatest(CREAR_USUARIO, registrar);
}
