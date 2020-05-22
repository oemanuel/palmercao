import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  texto: {
    color: 'white',
    textAlign: 'center',
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
  icono: {
    height: hp('30%'),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
  },
  texto1: {
    height: hp('15%'),
    justifyContent: 'center',
  },
  texto2: {
    height: hp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  seccorreo: {
    height: hp('20%'),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  c1: {
    flex: 0.8,
    justifyContent: 'space-around',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: wp('5'),
    color: 'black',
    fontSize: hp('2.5'),
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
  boton: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
