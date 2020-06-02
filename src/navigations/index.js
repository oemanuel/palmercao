
import React, { Component } from "react"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import AppFlow from "./AppFlow";
import AuthFlow from "./AuthFlow";

import { connect } from "react-redux"



const Flow = ({ usuario }) => {




  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Auth">

        {usuario ?
          (
            <><Stack.Screen
              name="App"
              component={AppFlow}
              options={{ headerShown: false }}
            />
            </>)
          :
          (<><Stack.Screen
            name="Auth"
            component={AuthFlow}
            options={{ headerShown: false }}
          />
          </>)}





      </Stack.Navigator>


    </NavigationContainer >

  );


}

const mapStateToProps = estado => {
  return {
    usuario: estado.entrarReducer.usuario
  }
}

export default connect(mapStateToProps, null)(Flow);





































{/* <Stack.Navigator initialRouteName="Catalogo" headerMode="none" >
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
</Stack.Navigator> */}