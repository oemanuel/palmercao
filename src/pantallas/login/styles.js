import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  sociales: {
    height: hp('18%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  c1: {
    flex: 0.56,
    justifyContent: 'space-around',
  },
  c2: {
    flex: 0.3,
    backgroundColor: 'white',
    height: hp('0.25'),
  },
  credenciales: {
    height: hp('50%'),
    justifyContent: 'center',
  },
  separadores: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  c5: {
    flex: 0.6,
  },
  recuperacion: {
    height: hp('15%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: 'white',
    fontSize: hp('2'),
    textAlign: 'center',
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
});

export default styles;
