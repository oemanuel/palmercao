import React from 'react';
import {Image, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
class BotonFace extends React.Component {
  render() {
    const {titulo, onPressAction} = this.props;
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.contain}
          onPress={onPressAction}>
          <View style={styles.button}>
            <Image
              style={styles.icono}
              source={require('../assets/social/face.png')}
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
    backgroundColor: '#059CE5',
    borderRadius: wp('6'),
    alignItems: 'center',
  },
  contain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icono: {
    flex: 1,
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  texto: {
    flex: 2,
    color: 'white',
    fontSize: hp('2.2'),
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
});
export default BotonFace;
