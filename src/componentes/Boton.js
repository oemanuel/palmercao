import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Boton extends React.Component {
  render() {
    const {titulo} = this.props;
    return (
      <View style={styles.contain}>
        <View style={styles.button}>
          <Text style={styles.texto}> {titulo}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    width: wp('70'),
    height: hp('7'),
    flexDirection: 'row',
    backgroundColor: '#00B46B',
    borderRadius: wp('6'),
    alignItems: 'center',
  },
  contain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    flex: 2,
    color: 'white',
    fontSize: hp('2.5'),
    textAlign: 'center',
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
});
export default Boton;
