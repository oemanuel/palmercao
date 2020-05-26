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
    flex: 0.07,
    backgroundColor: '#FF694E',
    borderBottomLeftRadius: hp('5'),
    borderBottomRightRadius: hp('5'),
  },
  separador: {
    flex: 0.1,
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
    height: hp('10%'),
    width: wp('100'),
    position: 'absolute',
    justifyContent: 'flex-end',
  },
});

export default styles;