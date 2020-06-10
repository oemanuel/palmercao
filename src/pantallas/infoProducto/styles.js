import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  texto: {
    color: 'white',
    marginLeft: wp('5'),
    fontSize: hp('3'),
    fontFamily: Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Bold',
  },
  info: {
    flex: 0.1,
    backgroundColor: '#FF694E',
    borderBottomLeftRadius: hp('5'),
    borderBottomRightRadius: hp('5'),
  },
  separador: {
    flex: 0.2,
  },
  carta: {
    width: wp('45'),
    height: wp('40'),
    backgroundColor: 'white',
    borderRadius: wp('5'),
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
  cartac: {
    flex: 0.1,
    alignItems: 'center',
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
  header: {
    flex: 0.1,
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
    height: hp('1%'),
    width: wp('100'),
    position: 'absolute',
    justifyContent: 'flex-end',
  },
  imagen: {
    resizeMode: 'contain',
    width: wp('40'),
    height: wp('40'),
  },
});
export default styles;
