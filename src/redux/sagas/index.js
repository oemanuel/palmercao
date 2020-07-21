import {put, take, call, all, takeEvery, fork} from 'redux-saga/effects';
import rsf from '../firebase';
// import {fire} from '../firebase';
// import {ENTRAR, SALIDA} from '../auth/login/actionTypes';
// import {REGISTRO} from '../auth/registrar/actionTypes';
// import {RECUPERAR} from '../auth/recuperar/actionTypes';
import {syncProductos} from '../productos/productos.action';
import {
  ENVIAR,
  enviar_fallido,
  enviar_correcto,
} from '../listaCompra/reducers/listaCompra';
import {setEstado} from '../estado.reducer';

// import {
//   entrar_correcto,
//   entrar_fallido,
//   salir_correcto,
//   salir_fallido,
// } from '../auth/login/actions/entrar.actions';
// import {
//   registrar_correcto,
//   registrar_fallido,
// } from '../auth/registrar/actions/registrar.actions';
// import {
//   recuperar_correcto,
//   recuperar_fallido,
// } from '../auth/recuperar/actions/recuperar.actions';

// function* entrar({payload}) {
//   try {
//     const usuario = yield call(
//       rsf.auth.signInWithEmailAndPassword,
//       payload.correo,
//       payload.clave,
//     );
//     const user = yield call(
//       rsf.database.read,
//       'usuarios/'.concat(usuario.user.uid),
//     );
//     yield put(entrar_correcto({...usuario, nuevo: user.nuevo}));

//     if (user.nuevo) {
//       yield call(rsf.database.patch, 'usuarios/'.concat(usuario.user.uid), {
//         nuevo: false,
//       });
//     }
//     // const channel = yield call(rsf.database.channel, 'pedidos');
//     const filterPedidos = pedido => {
//       return pedido.email == usuario.user.email;
//     };
//     // (rsf.firebase.database);
//     // Wait for the logout action, then stop sync
//     const pedidosTransformer = ({value}) =>
//       value
// //         ? Object.keys(value)
//             .map(key => ({
//               ...value[key],
//             }))
//             .reverse()
//         : [];
//     let pedidos = [];
//     let task = yield fork(
//       rsf.database.sync,
//       fire
//         .database()
//         .ref('pedidos')
//         .orderByChild('email')
//         .equalTo(usuario.user.email),
//       {
//         successActionCreator: syncPedidos,
//         transform: pedidosTransformer,
//       },
//     );
//     yield take(SALIDA.SOLICITUD);
//     yield cancel(task);
//   } catch (error) {
//     yield put(entrar_fallido(error));
//   }
// }

// function* salir() {
//   try {
//     const data = yield call(rsf.auth.signOut);
//     yield put(salir_correcto());
//     yield put(cleancarrito());
//     yield put(stopPedidos());
//   } catch (error) {
//     yield put(salir_fallido(error));
//   }
// }

// function* registrar({payload}) {
//   try {
//     const user = yield call(
//       rsf.auth.createUserWithEmailAndPassword,
//       payload.correo,
//       payload.clave,
//     );
//     yield call(rsf.database.patch, 'usuarios/'.concat(user.user.uid), {
//       nuevo: true,
//     });
//     yield call(rsf.auth.sendEmailVerification);
//     yield put(registrar_correcto());
//   } catch (error) {
//     yield put(registrar_fallido(error));
//   }
// }
// function* recuperar_pwd({email}) {
//   try {
//     yield call(rsf.auth.sendPasswordResetEmail, email);
//     yield put(recuperar_correcto());
//   } catch (error) {
//     yield put(recuperar_fallido(error));
//   }
// }

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
function* syncEstadoSaga() {
  const channel = yield call(rsf.database.channel, 'abierto');

  while (true) {
    if (channel) {
      const {value: abierto} = yield take(channel);
      if (abierto != null) {
        yield put(setEstado(abierto));
      }
    } else {
      yield put(setEstado(false));
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
    // takeEvery(ENTRAR.SOLICITUD, entrar),
    // takeEvery(SALIDA.SOLICITUD, salir),
    // takeEvery(REGISTRO.SOLICITUD, registrar),
    // takeEvery(RECUPERAR.SOLICITUD, recuperar_pwd),
    takeEvery(ENVIAR.SOLICITUD, addPedido),
    fork(syncProductosSaga),
    fork(syncEstadoSaga),
  ]);
}
