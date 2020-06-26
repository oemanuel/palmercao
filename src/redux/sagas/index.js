import {
  put,
  take,
  call,
  all,
  takeEvery,
  takeLatest,
  fork,
  select,
} from 'redux-saga/effects';
import rsf from '../firebase';
import {ENTRAR, SALIDA} from '../auth/login/actionTypes';
import {REGISTRO} from '../auth/registrar/actionTypes';
import {RECUPERAR} from '../auth/recuperar/actionTypes';
import {syncProductos} from '../productos/productos.action';
import {
  ENVIAR,
  enviar_fallido,
  enviar_correcto,
} from '../listaCompra/reducers/listaCompra';

import {
  entrar_correcto,
  entrar_fallido,
  salir_correcto,
  salir_fallido,
} from '../auth/login/actions/entrar.actions';
import {
  registrar_correcto,
  registrar_fallido,
} from '../auth/registrar/actions/registrar.actions';
import {
  recuperar_correcto,
  recuperar_fallido,
} from '../auth/recuperar/actions/recuperar.actions';

function* entrar({payload}) {
  try {
    const usuario = yield call(
      rsf.auth.signInWithEmailAndPassword,
      payload.correo,
      payload.clave,
    );
    yield put(entrar_correcto(usuario));
  } catch (error) {
    yield put(entrar_fallido(error));
  }
}

function* salir() {
  try {
    const data = yield call(rsf.auth.signOut);
    yield put(salir_correcto());
  } catch (error) {
    yield put(salir_fallido(error));
  }
}

function* registrar({payload}) {
  try {
    const user = yield call(
      rsf.auth.createUserWithEmailAndPassword,
      payload.correo,
      payload.clave,
    );
    yield call(rsf.auth.sendEmailVerification);
    yield put(registrar_correcto());
  } catch (error) {
    yield put(registrar_fallido(error));
  }
}
function* recuperar_pwd({email}) {
  try {
    yield call(rsf.auth.sendPasswordResetEmail, email);
    yield put(recuperar_correcto());
  } catch (error) {
    yield put(recuperar_fallido(error));
  }
}

const COLLECTIONS = {
  PRODUCTOS: 'productos',
  PEDIDOS: 'pedidos',
};

function* syncProductosSaga() {
  const channel = yield call(rsf.database.channel, COLLECTIONS.PRODUCTOS);

  while (true) {
    if (channel) {
      const {value: productoss} = yield take(channel);
      const productos = [];
      if (productoss) {
        Object.keys(productoss).map((key, index) => {
          let producto = productoss[key];
          productos.push(producto);
        });
        yield put(syncProductos(productos));
      } else {
        yield put(syncProductos([]));
      }
    } else {
      yield put(syncProductos([]));
    }
  }
}

function* addPedido(pedido) {
  try {
    const doc = yield call(
      rsf.database.create,
      `${COLLECTIONS.PEDIDOS}/`,
      pedido.payload,
    );
    let p = pedido.payload;
    p.identificador = doc;
    p.estado = 'en espera';
    yield call(rsf.database.update, 'pedidos/'.concat(doc), p);

    yield put(enviar_correcto(doc));
  } catch (error) {
    yield put(enviar_fallido(error));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(ENTRAR.SOLICITUD, entrar),
    takeEvery(SALIDA.SOLICITUD, salir),
    takeEvery(REGISTRO.SOLICITUD, registrar),
    takeEvery(RECUPERAR.SOLICITUD, recuperar_pwd),
    takeEvery(ENVIAR.SOLICITUD, addPedido),
    fork(syncProductosSaga),
  ]);
}
