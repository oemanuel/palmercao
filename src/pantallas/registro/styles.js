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
    flex: 0.2,
  },
  c2: {
    flex: 0.4,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  c3: {
    flex: 0.4,
    alignItems: 'center',
  },
});

export default styles;
