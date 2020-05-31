import { put } from 'redux-saga/effects';

import auth from '@react-native-firebase/auth';

import { crear_usuario_error, crear_usuario_successfull } from "../actions/auth.action"


// export function* login({ payload }) {

//     try {
//         let response = yield auth().signInWithEmailAndPassword(payload.email, payload.password);
//         yield put(response_login(response));
//     } catch (err) {
//         yield put(error(err));
//     }


// }
export function* registrar({ payload }) {


    try {
        let response = yield auth().createUserWithEmailAndPassword(payload.email, payload.password);
        let user = auth().currentUser;
        yield user.sendEmailVerification();
        yield put(crear_usuario_successfull(true));

    } catch (err) {
        yield put(crear_usuario_error(false));
    }


}
