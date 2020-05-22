import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  ScrollView,
} from 'react-native';
import Fondo from '../../componentes/Fondo';
import styles from './styles';
import Boton from '../../componentes/Boton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Confimacion = ({navigation}) => {
  return (
    <Fondo>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        enabled
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={styles.icono}>
              <Image
                style={styles.image}
                source={require('../../assets/Icon/carta.png')}
              />
            </View>
            <View style={styles.texto1}>
              <Text style={[styles.texto, {fontSize: hp('3')}]}>
                Recuperar contraseña
              </Text>
              <Text
                style={[styles.texto, {fontSize: hp('2'), marginTop: hp('2')}]}>
                Introduce la dirección de correo electrónico
              </Text>
              <Text style={[styles.texto, {fontSize: hp('2')}]}>
                que proporcionaste al registrarte.
              </Text>
            </View>
            <View style={styles.seccorreo}>
              <View style={styles.c1}>
                <Text
                  style={[
                    styles.texto,
                    {fontSize: hp('2.5'), textAlign: 'left'},
                  ]}>
                  Correo:
                </Text>
                <TextInput
                  style={styles.input}
                  returnKeyLabel="Enviar"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onSubmitEditing={() => navigation.navigate('Confirmacion')}
                />
              </View>
            </View>
            <View style={styles.boton}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('Confirmacion')}>
                <Boton titulo="Enviar" />
              </TouchableOpacity>
            </View>
            <View style={styles.texto2}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('Login')}>
                <Text
                  style={[
                    styles.texto,
                    {fontSize: hp('3'), textDecorationLine: 'underline'},
                  ]}>
                  Volver
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Fondo>
  );
};
export default Confimacion;
