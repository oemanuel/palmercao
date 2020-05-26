import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Contenedor = () => {
  return (
    <View style={styles.body}>
      <View style={styles.contain}>
        <Image
          style={styles.imagen}
          source={{
            uri:
              'https://m.lopido.com/images/productos/sii/F/300x300/arroz_diana_premium-130127-1557347133.png',
          }}
        />
      </View>
      <Text style={styles.texto}>Categoria </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    color: '#707070',
    fontSize: hp('2.5'),
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
  contain: {
    width: wp('30'),
    height: wp('30'),
    backgroundColor: '#00B46B',
    borderRadius: wp('5'),
    justifyContent: 'center',
    alignItems: 'center',
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
    width: wp('30'),
    height: wp('30'),
    alignItems: 'center',
  },
});

export default Contenedor;
