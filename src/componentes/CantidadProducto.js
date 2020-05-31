import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CantidadProducto = () => {
  return (
    <View style={styles.contain}>
      <View style={styles.separador} />
      <View style={styles.fila1}>
        <Text style={styles.texto}>Cantidad:</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.ope}>
            <Text style={[styles.texto, {color: 'white', fontSize: wp('8')}]}>
              -
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.cantidad}>
          <Text style={styles.texto}>0</Text>
        </View>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.ope}>
            <Text style={[styles.texto, {color: 'white', fontSize: wp('8')}]}>
              +
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.separador} />
      <View style={styles.fila1}>
        <Text style={styles.texto}>Total:</Text>
        <View style={styles.total}>
          <Text style={styles.texto}>$ 10494884</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 0.3,
  },
  separador: {
    width: wp('80'),
    height: hp('0.1'),
    backgroundColor: '#707070',
    alignSelf: 'center',
    opacity: 0.4,
    elevation: 2,
  },
  texto: {
    color: '#707070',
    fontSize: hp('2.5'),
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
  fila1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: wp('2'),
  },
  ope: {
    width: hp('5'),
    height: hp('4'),
    backgroundColor: '#00B46B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('5'),
  },
  cantidad: {
    backgroundColor: 'white',
    width: hp('15'),
    height: hp('5'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('5'),
    elevation: 2,
  },
  total: {
    width: hp('36'),
    height: hp('5'),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('5'),
    elevation: 2,
  },
});

export default CantidadProducto;
