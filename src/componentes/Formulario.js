import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Boton from './Boton';

const Formulario = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      enabled
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.contain}>
            <Text
              style={[
                styles.texto,
                {
                  color: '#FF694E',
                  marginTop: 10,
                  alignSelf: 'center',
                  fontSize: hp('3'),
                },
              ]}>
              Verifica tus datos
            </Text>
            <View style={styles.forma}>
              <Text style={styles.texto}>Pedido a nombre de:</Text>
              <TextInput style={styles.input} placeholder="Obligatorio" />
              <Text style={styles.texto}>Telefono:</Text>
              <TextInput style={styles.input} placeholder="Obligatorio" />
              <Text style={styles.texto}>Dirección:</Text>
              <TextInput style={styles.input} placeholder="Obligatorio" />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: hp('2'),
                }}>
                <View style={{width: wp('45')}}>
                  <Text style={styles.texto}>Barrio:</Text>
                  <TextInput style={styles.input} placeholder="Obligatorio" />
                </View>
                <View style={{width: wp('33')}}>
                  <Text style={styles.texto}>Apartamento:</Text>
                  <TextInput style={styles.input} placeholder="Opcional" />
                </View>
              </View>
              <Text style={styles.texto}>Comentarios:</Text>
              <TextInput style={styles.input} placeholder="Opcional" />
              <Boton titulo="Comprar" />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  texto: {
    color: '#707070',
    fontSize: hp('2.5'),
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
  contain: {
    height: hp('88'),
  },
  forma: {
    marginLeft: wp('7'),
    marginRight: wp('7'),
    marginTop: hp('2'),
  },
  input: {
    backgroundColor: 'white',
    borderRadius: wp('5'),
    elevation: 5,
    marginTop: wp('4'),
    marginBottom: wp('4'),
    color: 'black',
    fontSize: hp('2'),
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
});

export default Formulario;
