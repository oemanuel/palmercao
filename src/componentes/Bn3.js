import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Boton from './Boton';

const Bn3 = () => {
  return (
    <View style={styles.contain}>
      <View style={styles.figuras}>
        <Image
          style={styles.icon}
          source={require('../assets/Img/canastaFlash.png')}
        />
      </View>
      <View style={styles.texto1}>
        <Text style={styles.texto}>Agrega tus productos favoritos</Text>
        <Text style={styles.texto}>a la lista de compra</Text>
      </View>
      <View style={styles.texto2}>
        <Text style={styles.texto}>¡Y recibelos a domicilio!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  figuras: {
    flex: 0.75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    resizeMode: 'contain',
  },
  texto: {
    color: 'white',
    textAlign: 'center',
    fontSize: hp('2.5'),
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
  texto1: {
    flex: 0.1,
    justifyContent: 'flex-end',
  },
  texto1: {
    flex: 0.15,
    justifyContent: 'flex-start',
  },
});

export default Bn3;
