import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Registro from '../pantallas/registro/Registro';
import Login from '../pantallas/login/Login';
import Confirmacion from '../pantallas/confirmacio/Confirmacion';
import Recuperar from '../pantallas/recuperar/Recuperar';
import registro from '../pantallas/registro2/registro';

const Stack = createStackNavigator();

const AuthFlow = () => {
  return (
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
    </Stack.Navigator>
  );
};

export default AuthFlow;
