import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import AppFlow from './AppFlow';
// import AuthFlow from './AuthFlow';

// import {connect} from 'react-redux';

const Flow = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        {/* {usuario ? (
        // ) : (
        //   <>
        //     <Stack.Screen
        //       name="Auth"
        //       component={AuthFlow}
        //       options={{headerShown: false}}
        //     />
        //   </>
        // )} */}
        <>
          <Stack.Screen
            name="App"
            component={AppFlow}
            options={{headerShown: false}}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const mapStateToProps = estado => {
//   return {
//     usuario: estado.authReducer.entrarReducer.usuario,
//   };
// };

export default Flow;
