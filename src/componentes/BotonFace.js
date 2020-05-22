import React from 'react';
import {Image, Text, StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
class BotonFace extends React.Component {
  render() {
    const {titulo} = this.props;
    return (
      <>
        <View style={styles.contain}>
          <View style={styles.button}>
            <Image
              style={styles.icono}
              source={require('../assets/social/face.png')}
            />
            <Text style={styles.texto}>{titulo} </Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: wp('70'),
    height: hp('6'),
    flexDirection: 'row',
    backgroundColor: '#059CE5',
    borderRadius: wp('6'),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  contain: {
    justifyContent: 'center', //Centered vertically
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
    color: 'white',
    fontSize: hp('2'),
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
});
export default BotonFace;
