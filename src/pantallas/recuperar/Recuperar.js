import React, { useState } from 'react';
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

import * as validante from "validate.js"


const constraints = {
  correo: {
    presence: true,
    email: { message: ": El correo debe tener un formato válido." },
  }
}


const Confimacion = ({ navigation }) => {

  const [correo, setCorreo] = useState("");
  return (
    <Fondo>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        enabled
        style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>

            <View style={styles.icono}>
              <Image
                style={styles.image}
                source={require('../../assets/Icon/carta.png')}
              />
            </View>
            <View style={styles.texto1}>
              <Text style={[styles.texto, { fontSize: hp('3') }]}>
                Recuperar contraseña
              </Text>
              <Text
                style={[styles.texto, { fontSize: hp('2'), marginTop: hp('2') }]}>
                Introduce la dirección de correo electrónico
              </Text>
              <Text style={[styles.texto, { fontSize: hp('2') }]}>
                que proporcionaste al registrarte.
              </Text>
            </View>
            <View style={styles.seccorreo}>
              <View style={styles.c1}>
                <Text
                  style={[
                    styles.texto,
                    { fontSize: hp('2.5'), textAlign: 'left' },
                  ]}>
                  Correo:
                </Text>
                <TextInput
                  style={styles.input}
                  returnKeyLabel="Enviar"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={correo}
                  onChangeText={(value)=> setCorreo(value)}
                />
              </View>
            </View>
            <View style={styles.boton}>
              <Boton titulo="Enviar" onPress={() =>
              {
                let msj = "";
                let validadorEmail = validante.validate({ correo: correo }, constraints);
                
                if (typeof  validadorEmail !== 'undefined') {
                  msj += ("\n * " + validadorEmail.correo + " \n ");
                  
                }


                if (msj == "") {
                  //crear peticion de recuperación

                } else {
                  alert("Errores en algunos campos: \n  " + msj);
                }


              }}

              />
            </View>
            <View style={styles.texto2}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('Login')}>
                <Text
                  style={[
                    styles.texto,
                    { fontSize: hp('3'), textDecorationLine: 'underline' },
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
