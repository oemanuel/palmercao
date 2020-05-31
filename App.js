import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/pantallas/splash/Splash';
import Registro from './src/pantallas/registro/Registro';
import Login from './src/pantallas/login/Login';
import Confirmacion from './src/pantallas/confirmacio/Confirmacion';
import Recuperar from './src/pantallas/recuperar/Recuperar';
import Bienvenida from './src/pantallas/bienvenida/Bienvenida';
import Catalogo from './src/pantallas/catalogo/Catalogo';
import InfoCategoria from './src/pantallas/infoCategoria/InfoCategoria';
import InfoProducto from './src/pantallas/infoProducto/InfoProducto';
import ListaCompra from './src/pantallas/listaCompra/ListaCompra';
import registro from './src/pantallas/registro2/registro';
import DatosPedidos from './src/pantallas/datosPedidos/DatosPedidos';
import MiCuenta from './src/pantallas/miCuenta/MiCuenta';

const Stack = createStackNavigator();

//lmejiaf
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Registro">
          <Stack.Screen
            name="Registro2"
            component={registro}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Registro"
            component={Registro}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Recuperar"
            component={Recuperar}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Confirmacion"
            component={Confirmacion}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Bienvenida"
            component={Bienvenida}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Catalogo"
            component={Catalogo}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="InfoCategoria"
            component={InfoCategoria}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="InfoProducto"
            component={InfoProducto}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ListaCompra"
            component={ListaCompra}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DatosPedidos"
            component={DatosPedidos}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MiCuenta"
            component={MiCuenta}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
