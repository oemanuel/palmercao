import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
class BotonGoogle extends React.Component {
  render() {
    const {titulo} = this.props;
    return (
      <>
        <View style={styles.contain}>
          <View style={styles.button}>
            <Image
              style={styles.icono}
              source={require('../assets/social/google.png')}
            />
            <Text style={styles.texto}> {titulo}</Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: wp('70'),
    height: hp('7'),
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: wp('6'),
    alignItems: 'center',
  },
  contain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icono: {
    flex: 1,
    width: wp('5'),
    height: wp('5'),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  texto: {
    flex: 2,
    color: 'black',
    fontSize: hp('2.2'),
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
});
export default BotonGoogle;
