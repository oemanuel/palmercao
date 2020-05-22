import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  texto: {
    fontSize: hp('2'),
    textAlign: 'center',
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
  contain: {
    flex: 1,
    justifyContent: 'center',
  },
  aviso: {
    flex: 0.7,
    backgroundColor: 'white',
    marginLeft: wp('10'),
    marginRight: wp('10'),
    borderRadius: hp('5'),
  },
  icono: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
  },
  texto1: {
    flex: 0.3,
  },
  texto2: {
    flex: 0.1,
    justifyContent: 'center',
  },
});

export default styles;
