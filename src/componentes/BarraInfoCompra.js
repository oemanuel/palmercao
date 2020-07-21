import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, Image, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const BarraInfoCompra = props => {
  const {titulo, cantidad} = props;
  const [ct, setCt] = useState('');
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

  const apply = () => {
    let a = cantidad.toString().split('.');
    if (a.length !== 2) {
      return a;
    } else {
      let c = a[0].toString();
      let c1 = a[1].toString();
      if (c1.length < 2) {
        return c.concat('.' + c1).concat('0');
      } else {
        return c.concat('.' + c1.substring(0, 2));
      }
    }
  };
  return (
    <View style={styles.contain}>
      <View style={styles.barra}>
        <Text style={[styles.texto, {color: 'white'}]}>Total:</Text>
      </View>
      <View style={styles.filtroc}>
        <Text style={[styles.texto, {color: '#707070'}]}>
          COP {formatNumber.new(parseFloat(cantidad).toFixed(2))}
        </Text>
        <Text style={[styles.texto, {color: '#707070', fontSize: hp('1.5')}]}>
          {cantidad == 0 ? '' : '+ 1.000 COP domicilio'}
        </Text>
      </View>
    </View>
  );
};

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
