import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const InformacionCatalogo = ({children}) => {
  return (
    <>
      <View style={styles.info}>
        <View style={styles.canastac}>
          <Image
            style={styles.canasta}
            source={require('../assets/Img/CarretaFondoBlanco.png')}
          />
        </View>
        <View style={styles.texto1c}>
          <Text style={styles.texto}>¡Todos tus productos a la mano!</Text>
        </View>
        <View style={styles.children}>{children}</View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  texto: {
    color: 'white',
    fontSize: hp('3'),
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
  info: {
    backgroundColor: '#FF694E',
    borderBottomLeftRadius: hp('5'),
    borderBottomRightRadius: hp('5'),
    
  },
  canasta: {
    resizeMode: 'contain',
    height: hp('20%'),
    width: wp('35%'),
  },
  texto1c: {
    height: hp('10%'),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  canastac: {
    alignItems: 'center',
  },
  children: {
    height: hp('33%'),
    width: wp('100'),
    position: 'absolute',
    justifyContent: 'flex-end',
  },
});

export default InformacionCatalogo;
