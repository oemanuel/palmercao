import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import authReducer from './auth';
import listaCompraReducer from './listaCompra/reducers/listaCompra';
import productosReducer from './productos/productosReducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({authReducer, listaCompraReducer, productosReducer}),
  applyMiddleware(sagaMiddleware),
);
export default store;
sagaMiddleware.run(sagas);
