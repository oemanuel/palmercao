import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  texto: {
    color: '#FF694E',
    fontSize: hp('3'),
    fontFamily: Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Bold',
  },
  header: {
    height: hp(7),
    backgroundColor: '#FF694E',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  menu: {
    height: hp('7'),
    width: wp('7'),
    resizeMode: 'contain',
    marginRight: wp('5'),
  },
  textoc: {
    justifyContent: 'center',
    marginTop: hp('5'),
    paddingHorizontal: wp(2),
  },
  fondo: {
    flex: 1,
    backgroundColor: 'white',
  },
  categoriac: {
    height: hp(28),
    flexDirection: 'row',
    overflow: 'scroll',
  },
  productoc: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
