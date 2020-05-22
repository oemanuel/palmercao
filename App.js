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

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
