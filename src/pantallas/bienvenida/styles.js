import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  texto: {
    color: 'white',
    fontSize: hp('5'),
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Bold',
  },
  contain: {
    flex: 1,
  },
  info: {
    flex: 0.9,
    justifyContent: 'center',
  },
  boton: {
    flex: 0.3,
  },
  botones: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  b1: {
    justifyContent: 'center',
  },
  circulo: {
    fontSize: wp('4'),
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: wp('10'),
  },
});

export default styles;
