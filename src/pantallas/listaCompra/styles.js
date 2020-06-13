import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  texto: {
    color: 'white',
    marginLeft: wp('5'),
    textAlign: 'center',
    fontSize: hp('3'),
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
  titulo: {
    top: hp('-4%'),
  },
  info: {
    height: hp('20'),
    backgroundColor: '#FF694E',
    borderBottomLeftRadius: hp('5'),
    borderBottomRightRadius: hp('5'),
  },
  separador: {
    height: hp('12'),
  },
  separador1: {
    height: hp('4'),
  },
  contain: {
    flex: 1,
    backgroundColor: 'white',
  },
  menu: {
    height: hp('6'),
    width: wp('6'),
    resizeMode: 'contain',
    marginRight: wp('5'),
  },
  flecha: {
    height: hp('6'),
    width: wp('6'),
    resizeMode: 'contain',
    marginLeft: wp('5'),
  },
  canasta: {
    height: wp('30'),
    width: wp('30'),
    resizeMode: 'contain',
    alignSelf: 'center',
    top: hp('-5%'),
  },
  header: {
    height: hp('7'),
    flexDirection: 'row',
    backgroundColor: '#FF694E',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productoc: {
    marginTop: hp('5'),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  children: {
    top: hp('16%'),
    width: wp('100'),
    position: 'absolute',
    justifyContent: 'flex-end',
  },
  ccantidad: {
    top: hp('5%'),
    left: wp('56%'),
    backgroundColor: '#00B46B',
    position: 'absolute',
    width: hp('7'),
    height: hp('7'),
    borderRadius: wp('10'),
    justifyContent: 'center',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
  },
  boton: {
    top: hp('87%'),
    height: hp('8'),
    width: wp('100%'),
    position: 'absolute',
  },
});

export default styles;
