import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Contenedor = props => {
  const {navigation, color, item} = props;
  const darColor = item => {
    switch (item.categoria) {
      case 'frutas & verduras':
        return '#00BA6A';
      case 'primarios':
        return '#FFC043';
      case 'carnes':
        return '#FE7259';
      case 'lacteos':
        return '#707070';
      case 'bebidas':
        return '#BA64F2';
      case 'snacks':
        return '#FFC043';
      case 'aseo':
        return '#29A2E8';
      case 'miscelanea':
        return '#FF9750';
      case 'salud & belleza':
        return '#FF7D9F';
      case 'licoreria':
        return '#FFC043';
      case 'mascotas':
        return '#29A2E8';
      case 'otros':
        return '#29A2E8';
      default:
        return 'black';
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        navigation.navigate('InfoProducto', {
          color: darColor(item),
          item: item,
        })
      }>
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
              uri: item.urlImagen,
            }}
          />
        </View>
        <View style={[styles.contain, {width: wp('50'), padding: wp('2')}]}>
          <View style={styles.titulo}>
            <Text style={[styles.texto, {color: darColor(item)}]}>
              {item.nombre}
            </Text>
            <Text style={[styles.texto, {fontSize: hp('2'), color: '#707070'}]}>
              {item.descripcion.substring(0, 22)}...
            </Text>
          </View>
          <View style={styles.costo}>
            <Text style={[styles.texto, {flex: 0.9}]}>COP {item.precio}</Text>
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

    elevation: 5,
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
