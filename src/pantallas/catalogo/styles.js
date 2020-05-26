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
    flex: 0.12,
    backgroundColor: '#FF694E',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  menu: {
    height: hp('6'),
    width: wp('6'),
    resizeMode: 'contain',
    marginRight: wp('5'),
  },
  textoc: {
    flex: 0.2,
    justifyContent: 'center',
    marginLeft: wp('5'),
  },
  fondo: {
    flex: 1,
    backgroundColor: 'white',
  },
  categoriac: {
    flex: 0.4,
  },
  productoc: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
