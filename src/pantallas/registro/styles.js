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
    alignItems: 'flex-end',
  },
  verdura: {
    width: wp('50'),
    height: hp('50'),
    resizeMode: 'contain',
    alignSelf: 'flex-start',
  },
  v1: {
    flex: 0.5,
    position: 'absolute',
    left: wp('-15%'),
    top: hp('63%'),
  },
  v2: {
    flex: 0.5,
    position: 'absolute',
    left: wp('55%'),
    top: hp('62%'),
  },
});

export default styles;
