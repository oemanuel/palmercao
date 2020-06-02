import { put, call, all, takeEvery, takeLatest } from "redux-saga/effects";
import rsf from "../firebase"
import { ENTRAR, SALIDA } from "../auth/login/actionTypes"
import { REGISTRO } from "../auth/registrar/actionTypes"
import { RECUPERAR } from "../auth/recuperar/actionTypes";



import { entrar_correcto, entrar_fallido, salir_correcto, salir_fallido } from "../auth/login/actions/entrar.actions"
import { registrar_correcto, registrar_fallido } from "../auth/registrar/actions/registrar.actions"
import { recuperar_correcto, recuperar_fallido } from "../auth/recuperar/actions/recuperar.actions"


function* entrar({ payload }) {
    try {
        const usuario = yield call(rsf.auth.signInWithEmailAndPassword, payload.correo, payload.clave);
        yield put(entrar_correcto(usuario));
    } catch (error) {
        yield put(entrar_fallido(error));
    }
}

function* salir() {
    try {
        const data = yield call(rsf.auth.signOut);
        yield put(salir_correcto());
    }
    catch (error) {
        yield put(salir_fallido(error));
    }
}

function* registrar({ payload }) {
    try {
        const user = yield call(rsf.auth.createUserWithEmailAndPassword, payload.correo, payload.clave);
        console.log(user);
        yield call(rsf.auth.sendEmailVerification);
        yield put(registrar_correcto());
    }
    catch (error) {
        yield put(registrar_fallido(error));
    }
}
function* recuperar_pwd({ email}) {
    console.log("llegué a *recuperar_pwd");

    try {
        console.log(email);
        
        yield call(rsf.auth.sendPasswordResetEmail, email);
        yield put(recuperar_correcto());
    }
    catch (error) {
        console.log(error);

        yield put(recuperar_fallido(error));
    }
}


export default function* rootSaga() {
    yield all([
        takeEvery(ENTRAR.SOLICITUD, entrar),
        takeEvery(SALIDA.SOLICITUD, salir),
        takeEvery(REGISTRO.SOLICITUD, registrar),
        takeEvery(RECUPERAR.SOLICITUD, recuperar_pwd),

    ])
}