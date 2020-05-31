import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  texto: {
    color: 'white',
    textAlignVertical: 'center',
    fontSize: hp('3'),
    fontFamily: Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Bold',
  },
  texto2: {
    color: '#707070',
    fontSize: hp('2'),
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
  info: {
    height: hp('25'),
    backgroundColor: '#FFC043',
    borderBottomLeftRadius: hp('5'),
    borderBottomRightRadius: hp('5'),
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: '#FFC043',
    justifyContent: 'space-between',
  },
  persona: {
    resizeMode: 'contain',
    height: wp('30'),
    width: wp('30'),
  },
  forma: {
    height: hp('55'),
    margin: wp('5'),
  },
  input: {
    backgroundColor: 'white',
    borderRadius: wp('5'),
    elevation: 5,
    marginTop: wp('4'),
    marginBottom: wp('4x'),
    color: 'black',
    fontSize: hp('2'),
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
});

export default styles;
