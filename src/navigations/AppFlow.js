import React, {Component, useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Bienvenida from '../pantallas/bienvenida/Bienvenida';
import Catalogo from '../pantallas/catalogo/Catalogo';
import InfoCategoria from '../pantallas/infoCategoria/InfoCategoria';
import InfoProducto from '../pantallas/infoProducto/InfoProducto';
import ListaCompra from '../pantallas/listaCompra/ListaCompra';
import DatosPedidos from '../pantallas/datosPedidos/DatosPedidos';
import MiCuenta from '../pantallas/miCuenta/MiCuenta';
import VistaImagen from '../pantallas/vistaImagen/VistaImagen';
import {connect} from 'react-redux';

// additionalUserInfo;
const AppFlow = ({usuario}) => {

  return (
    <Stack.Navigator initialRouteName={usuario && usuario.nuevo?"Bienvenida":"Catalogo"}>
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
        name="VistaImagen"
        component={VistaImagen}
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
  );
};
const mapStateToProps = estado => {
  return {
    usuario: estado.authReducer.entrarReducer.usuario,
  };
};

export default connect(
  mapStateToProps,
  null,
)(AppFlow);
