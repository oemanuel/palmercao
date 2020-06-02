import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  texto: {
    color: 'white',
    textAlignVertical: 'center',
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

  contain: {
    flex: 1,
    backgroundColor: 'white',
  },
  menu: {
    height: hp('7'),
    width: wp('6'),
    resizeMode: 'contain',
    marginRight: wp('5'),
  },
  flecha: {
    height: hp('7'),
    width: wp('6'),
    resizeMode: 'contain',
    marginLeft: wp('5'),
  },
  header: {
    height: hp('7'),
    flexDirection: 'row',
    backgroundColor: '#FF694E',
    justifyContent: 'space-between',
    borderBottomLeftRadius: wp('5'),
    borderBottomRightRadius: wp('5'),
  },
});

export default styles;
