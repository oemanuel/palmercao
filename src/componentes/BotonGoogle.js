import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
class BotonGoogle extends React.Component {
  render() {
    const {titulo, onPressAction} = this.props;
    return (
      <>
        <TouchableOpacity style={styles.contain} onPress={onPressAction}>
          <View style={styles.button}>
            <Image
              style={styles.icono}
              source={require('../assets/social/google.png')}
            />
            <Text style={styles.texto}> {titulo}</Text>
          </View>
        </TouchableOpacity>
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
    // backgroundColor: 'green',
  },
  icono: {
    flex: 1,
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
    alignSelf: 'center',
    // backgroundColor: 'blue',
  },
  texto: {
    flex: 2,
    color: 'black',
    fontSize: hp('2.2'),
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
    // backgroundColor: 'yellow',
  },
});
export default BotonGoogle;
