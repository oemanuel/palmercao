import React from 'react';
import {Text, StyleSheet, View, Image, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class BarraInfoCompra extends React.Component {
  render() {
    const {titulo, cantidad} = this.props;
    return (
      <View style={styles.contain}>
        <View style={styles.barra}>
          <Text style={[styles.texto, {color: 'white'}]}>Total:</Text>
        </View>
        <View style={styles.filtroc}>
          <Text style={[styles.texto, {color: '#707070'}]}>COP {cantidad}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  texto: {
    color: 'white',
    textAlign: 'center',
    fontSize: hp('3'),
    fontFamily: Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Bold',
  },
  barra: {
    width: wp('20'),
    height: hp('7'),
    backgroundColor: '#FFC043',
    borderRadius: wp('6'),
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  contain: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filtroc: {
    width: hp('30'),
    height: hp('7'),
    backgroundColor: 'white',
    borderRadius: wp('6'),
    marginLeft: wp('1'),
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
});
export default BarraInfoCompra;
