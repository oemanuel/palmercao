import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Boton from './Boton';

const Bn1 = () => {
  return (
    <View style={styles.contain}>
      <View style={styles.figuras}>
        <Image
          style={styles.icon}
          source={require('../assets/Img/canastaVerduras.png')}
        />
      </View>
      <View style={styles.texto1}>
        <Text
          style={[
            styles.texto,
            {
              fontSize: hp('4'),
            },
          ]}>
          ¡BIENVENIDO!
        </Text>
      </View>
      <View style={styles.texto1}>
        <Text style={styles.texto}>
          Pa'l mercao es una tienda y distribuidora
        </Text>
        <Text style={styles.texto}>
          virtual de productos variados con servicio
        </Text>
        <Text style={styles.texto}>a domicilio.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  figuras: {
    flex: 0.65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    resizeMode: 'contain',
  },
  texto: {
    color: 'white',
    textAlign: 'center',
    fontSize: hp('2.3'),
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
  texto1: {
    flex: 0.1,
    justifyContent: 'flex-start',
  },
  boton: {
    flex: 0.15,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default Bn1;
