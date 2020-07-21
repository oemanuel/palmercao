import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Contenedor = props => {
  const {navigation, nombre, color, icono} = props;
  return (
    <View style={styles.body}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() =>
          navigation.navigate('InfoCategoria', {nombre: nombre, color: color})
        }>
        <View style={[styles.contain, {backgroundColor: color}]}>
          <Image style={styles.imagen} source={icono} />
        </View>
      </TouchableOpacity>

      <Text style={styles.texto}>{nombre} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    color: '#707070',
    fontSize: hp('2.1'),
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
  contain: {
    width: wp('30'),
    height: wp('30'),
    borderRadius: wp('5'),
    justifyContent: 'center',
    alignItems: 'center',
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
    marginHorizontal: wp('2'),
  },
});

export default Contenedor;
