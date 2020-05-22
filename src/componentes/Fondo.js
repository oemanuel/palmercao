import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Fondo = ({children}) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        style={{flex: 1}}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        locations={[0.5, 0.4]}
        colors={['#FE7259', '#FF694E']}>
        <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>
      </LinearGradient>
    </>
  );
};
export default Fondo;
