import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    justifyContent: 'center',
  },
  app: {
    alignSelf: 'flex-end',
    color: 'white',
    fontSize: hp('5'),
    fontFamily: Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Bold',
  },
});

export default styles;
