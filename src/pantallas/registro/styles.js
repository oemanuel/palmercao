import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  contain: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  texto: {
    color: 'white',
    fontSize: hp('3'),
    textAlign: 'center',
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
  c1: {
    flex: 0.1,
  },
  c2: {
    flex: 0.2,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  c3: {
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  verdura: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    alignSelf: 'flex-start',
  },
  v1: {
    width: '50%',
    height: '180%',
    position: 'absolute',
    right: wp('61.8%'),
    bottom: hp('2%'),
  },
  v2: {
    width: '50%',
    height: '150%',
    position: 'absolute',
    left: wp('55%'),
    bottom: hp('2%'),
  },
  enviar: {
    flex: 0.2,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default styles;
