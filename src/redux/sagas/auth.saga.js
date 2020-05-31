import { put } from 'redux-saga/effects';

import auth from '@react-native-firebase/auth';

import { crear_usuario_error, crear_usuario_successfull, entrar_usuario_error, entrar_usuario_successfull } from "../actions/auth.action"

export function* registrar({ payload }) {
    console.log("entro a *registrar ");

    try {
        let response = yield auth().createUserWithEmailAndPassword(payload.email, payload.password);
        let user = auth().currentUser;
        yield user.sendEmailVerification();
        yield put(crear_usuario_successfull(false));

    } catch (err) {
        yield put(crear_usuario_error(true));
    }


}

export function* login({ payload }) {
console.log("entro a *login ");

    try {
        let response = yield auth().signInWithEmailAndPassword(payload.email, payload.password);
        let user = auth().currentUser;
        yield put(entrar_usuario_successfull({error:false, user:user}));
    } catch (err) {
        yield put(entrar_usuario_error(true));
    }


}