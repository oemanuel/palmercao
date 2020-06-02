import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga"
import authReducer from './auth';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();


const store = createStore(authReducer, applyMiddleware(sagaMiddleware));
export default store;
sagaMiddleware.run(sagas)