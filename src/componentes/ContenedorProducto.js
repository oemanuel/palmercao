import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Contenedor = ({navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate('InfoProducto')}>
      <View style={styles.body}>
        <View
          style={[
            styles.contain,
            {
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <Image
            style={styles.imagen}
            source={{
              uri:
                'https://m.lopido.com/images/productos/sii/F/300x300/arroz_diana_premium-130127-1557347133.png',
            }}
          />
        </View>
        <View style={[styles.contain, {width: wp('50'), padding: wp('2')}]}>
          <View style={styles.titulo}>
            <Text style={[styles.texto, {color: '#FFC043'}]}>
              Arroz Diana Premiun
            </Text>
            <Text style={[styles.texto, {fontSize: hp('2'), color: '#707070'}]}>
              bolsa de 500gr
            </Text>
          </View>
          <View style={styles.costo}>
            <Text style={[styles.texto, {flex: 0.9}]}>$1500</Text>
            <Image
              style={styles.icono}
              //source={require('../assets/Icon/añadir.png')}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  texto: {
    color: '#000000',
    fontSize: hp('2'),
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
  contain: {
    width: wp('25'),
    height: wp('25'),
    backgroundColor: 'white',
    borderRadius: wp('5'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  imagen: {
    resizeMode: 'contain',
    width: wp('20'),
    height: wp('20'),
  },
  body: {
    width: wp('80'),
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: hp(1),
  },
  titulo: {
    flex: 0.7,
  },
  costo: {
    flex: 0.3,
    flexDirection: 'row',
  },
  icono: {
    resizeMode: 'contain',
    width: wp('5'),
    height: wp('5'),
  },
});

export default Contenedor;
