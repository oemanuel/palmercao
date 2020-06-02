import 'react-native-gesture-handler';
import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Splash from './src/pantallas/splash/Splash';
// import Registro from './src/pantallas/registro/Registro';
// import Login from './src/pantallas/login/Login';
// import Confirmacion from './src/pantallas/confirmacio/Confirmacion';
// import Recuperar from './src/pantallas/recuperar/Recuperar';
// import registro from './src/pantallas/registro2/registro';

// import Bienvenida from './src/pantallas/bienvenida/Bienvenida';
// import Catalogo from './src/pantallas/catalogo/Catalogo';
// import InfoCategoria from './src/pantallas/infoCategoria/InfoCategoria';
// import InfoProducto from './src/pantallas/infoProducto/InfoProducto';
// import ListaCompra from './src/pantallas/listaCompra/ListaCompra';
// import registro from './src/pantallas/registro2/registro';
// import DatosPedidos from './src/pantallas/datosPedidos/DatosPedidos';
// import MiCuenta from './src/pantallas/miCuenta/MiCuenta';

import Flow from "./src/navigations";


//lmejiaf
import { Provider } from 'react-redux';
import store from "./src/redux/store"


const App = () => {
  return (
    <Provider store={store}>
      <Flow />
    </Provider>
  );
};

export default App;
