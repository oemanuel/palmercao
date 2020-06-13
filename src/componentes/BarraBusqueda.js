import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {connect} from 'react-redux';
import {busquedaProductos} from '../redux/productos/productos.action';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const BarraBusqueda = props => {
  const {titulo, color, busquedaProductos, textoBusqueda} = props;
  const [value, setValue] = useState(textoBusqueda);

  useEffect(() => {
    if (value.length == 0) {
      busquedaProductos('');
    }
  }, [value]);

  useEffect(() => {
    const onBackPress = () => {
      busquedaProductos('');
      if (textoBusqueda.length !== 0) {
        return true;
      } else {
        return false;
      }
    };
    const bch = BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => bch.remove();
  }, []);

  return (
    <View style={styles.contain}>
      <View style={styles.barra}>
        <TouchableOpacity onPress={() => busquedaProductos(value)}>
          <Image
            style={[styles.lupa, {tintColor: color}]}
            source={require('../assets/Icon/Lupa.png')}
          />
        </TouchableOpacity>
      </View>
      <TextInput
        style={[styles.input, {color: color}]}
        placeholder="Buscar producto"
        onChangeText={value => setValue(value)}
        returnKeyLabel="Buscar"
        onSubmitEditing={() => busquedaProductos(value)}
        value={value}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  barra: {
    width: wp('10'),
    height: hp('7'),
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: wp('5'),
    borderBottomLeftRadius: wp('5'),
    alignItems: 'center',
    justifyContent: 'center',

    elevation: 10,
  },
  contain: {
    height: hp('7'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lupa: {
    resizeMode: 'contain',
    tintColor: '#FF694E',
    width: wp('6%'),
    height: wp('6%'),
  },
  filtro: {
    resizeMode: 'contain',
    tintColor: '#FF694E',
    width: wp('4'),
    height: hp('4'),
  },
  input: {
    width: '60%',
    height: '100%',
    fontSize: hp('2.5'),
    borderTopRightRadius: wp('5'),
    borderBottomRightRadius: wp('5'),

    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
    backgroundColor: 'white',
    elevation: 10,
  },
  filtroc: {
    width: hp('7'),
    height: hp('7'),
    backgroundColor: 'white',
    borderRadius: wp('6'),
    marginLeft: wp('1'),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
});

const mapDispatchToProps = dispatch => {
  return {
    busquedaProductos: value => dispatch(busquedaProductos(value)),
  };
};

const mapStateToProps = state => {
  return {
    textoBusqueda: state.productosReducer.textoBusqueda,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BarraBusqueda);
