import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Logo = () => {
  return (
    <View style={styles.contain}>
      <Image
        style={styles.logo}
        source={require('../assets/logo/Componente.png')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  contain: {
    justifyContent: 'center', //Centered vertically
    alignItems: 'center',
  },
  logo: {
    width: wp('75%'),
    height: hp('25%'),
    resizeMode: 'contain',
  },
});
export default Logo;
