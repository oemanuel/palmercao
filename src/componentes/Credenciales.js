import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Splash = () => {
  return (
    <>
      <View style={styles.contain}>
        <View style={styles.c1}>
          <Text style={styles.texto}>Correo:</Text>
          <TextInput
            style={styles.input}
            returnKeyLabel="Sig."
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            blurOnSubmit={false}
            // onSubmitEditing={() => this.refs.pass.focus()}
          />
          <Text style={styles.texto}>Contraseña:</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            returnKeyLabel="Enviar"
            //ref="pass"
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  texto: {
    color: 'white',
    fontSize: hp('2.5'),
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
  contain: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  c1: {
    flex: 0.8,
    justifyContent: 'space-around',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: wp('5'),
    color: 'black',
    fontSize: hp('2.5'),
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
});
export default Splash;
