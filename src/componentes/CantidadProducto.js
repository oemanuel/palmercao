import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Boton from './Boton';
import {connect} from 'react-redux';
import {añadir, quitar} from '../redux/listaCompra/reducers/listaCompra';

const CantidadProducto = props => {
  const {navigation, item, add, quit, carrito} = props;
  const producto = item;
  const [cantidad, setCantidad] = useState(item.cantidad);

  var formatNumber = {
    separador: '.', // separador para los miles
    sepDecimal: ',', // separador para los decimales
    formatear: function(num) {
      num += '';
      var splitStr = num.split('.');
      var splitLeft = splitStr[0];
      var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
      var regx = /(\d+)(\d{3})/;
      while (regx.test(splitLeft)) {
        splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
      }
      return this.simbol + splitLeft + splitRight;
    },
    new: function(num, simbol) {
      this.simbol = simbol || '';
      return this.formatear(num);
    },
  };

  const aumentar = () => {
    producto.cantidad += producto.tipo == 'unitario' ? 1 : 100;
    setCantidad(producto.cantidad);
  };
  const disminuir = () => {
    if (producto.tipo == 'unitario') {
      if (producto.cantidad > 1) {
        producto.cantidad -= 1;
        setCantidad(producto.cantidad);
      }
    } else {
      if (producto.cantidad > 100) {
        producto.cantidad -= 100;
        setCantidad(producto.cantidad);
      }
    }
  };
  const totalizar = () => {
    producto.total =
      producto.tipo != 'unitario'
        ? producto.cantidad * (producto.precio / 500)
        : producto.cantidad * producto.precio;
    return producto;
  };
  const reset = () => {
    producto.cantidad = producto.tipo == 'unitario' ? 1 : 100;
    producto.total = producto.precio;
    setCantidad(producto.cantidad);
  };

  return (
    <View style={styles.contain}>
      <View style={styles.separador} />
      <View style={styles.fila1}>
        <Text style={styles.texto}>Cantidad:</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={() => disminuir()}>
          <View style={styles.ope}>
            <Text style={[styles.texto, {color: 'white', fontSize: wp('11')}]}>
              -
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.cantidad}>
          <Text style={styles.texto}>
            {cantidad} {item.tipo == 'unitario' ? 'und' : 'gr'}
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} onPress={() => aumentar()}>
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
          <Text style={styles.texto}>
            COP{' '}
            {producto.tipo == 'unitario'
              ? formatNumber.new(producto.precio * producto.cantidad)
              : formatNumber.new((producto.precio / 500) * producto.cantidad)}
          </Text>
        </View>
      </View>
      <View style={{flex: 0.1, justifyContent: 'flex-start'}}>
        {producto.cantidad !== 0 && (
          <Boton
            titulo="Agregar"
            onPress={() => {
              add(totalizar());
              reset();
              Alert.alert(
                'Genial!',
                'El producto fue añadido a su lista de compra',
                [
                  {
                    text: 'Ir a la lista',
                    onPress: () => {
                      navigation.navigate('ListaCompra');
                    },
                  },
                  {
                    text: 'Cerrar',
                    onPress: () => {},
                    style: 'cancel',
                  },
                ],
                {cancelable: true},
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 0.3,
    justifyContent: 'space-evenly',
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

const mapDispatchToProps = dispatch => ({
  add: producto => dispatch(añadir(producto)),
  quit: producto => dispatch(quitar(producto)),
});
const mapStateToProps = estado => {
  return {
    carrito: estado.listaCompraReducer.carrito,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CantidadProducto);
