import React from 'react';
import {Text, StyleSheet, View, Image, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class BarraBusqueda extends React.Component {
  render() {
    const {titulo} = this.props;
    return (
      <View style={styles.contain}>
        <View style={styles.barra}>
          <Image
            style={styles.lupa}
            source={require('../assets/Icon/Lupa.png')}
          />
          <TextInput style={styles.input} placeholder="Buscar producto" />
        </View>
        <View style={styles.filtroc}>
          <Image
            style={styles.filtro}
            source={require('../assets/Icon/filtro.png')}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  barra: {
    width: wp('70'),
    height: hp('7'),
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: wp('6'),
    alignItems: 'center',
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
  lupa: {
    flex: 0.15,
    resizeMode: 'contain',
    tintColor: '#FF694E',
    width: wp('3'),
    height: hp('3'),
  },
  filtro: {
    resizeMode: 'contain',
    tintColor: '#FF694E',
    width: wp('4'),
    height: hp('4'),
  },
  input: {
    flex: 0.85,
    color: '#FF694E',
    fontSize: hp('2.5'),
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
  filtroc: {
    width: hp('7'),
    height: hp('7'),
    backgroundColor: 'white',
    borderRadius: wp('6'),
    marginLeft: wp('1'),
    justifyContent: 'center',
    alignItems: 'center',
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
export default BarraBusqueda;
