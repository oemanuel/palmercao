import React, {useState, useEffect} from 'react';
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
  ActivityIndicator,
  Alert,
} from 'react-native';
import Fondo from '../../componentes/Fondo';
import styles from './styles';
import Boton from '../../componentes/Boton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import * as validante from 'validate.js';
import {connect} from 'react-redux';
import {
  limpiar_error_recuperar,
  recuperar,
} from '../../redux/auth/recuperar/actions/recuperar.actions';

const constraints = {
  correo: {
    presence: true,
    email: {message: ': El correo debe tener un formato válido.'},
  },
};

const Confimacion = ({
  navigation,
  enviado,
  limpiar_error,
  recuperar,
  error,
  cargando,
}) => {
  const [correo, setCorreo] = useState('');
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    if (enviado) {
      limpiar_error();
      navigation.navigate('Confirmacion', {vengode: 'recuperar'});
    }
  }, [enviado, limpiar_error, navigation]);
  useEffect(() => {
    if (cargando) {
      setShowIndicator(true);
    } else {
      setShowIndicator(false);
    }
  }, [cargando]);
  useEffect(() => {
    if (error) {
      Alert.alert(
        'Oops!',
        'ha ocurrido un error al recuperar tu clave',
        [
          {
            text: 'Ok, lo intentaré despues',
            onPress: () => {
              limpiar_error();
              setCorreo('');
            },
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
    }
  }, [error, limpiar_error]);
  if (!showIndicator) {
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
                  style={[
                    styles.texto,
                    {fontSize: hp('2'), marginTop: hp('2')},
                  ]}>
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
                    value={correo}
                    onChangeText={value => setCorreo(value)}
                  />
                </View>
              </View>
              <View style={styles.boton}>
                <Boton
                  titulo="Enviar"
                  onPress={() => {
                    let msj = '';
                    let validadorEmail = validante.validate(
                      {correo: correo},
                      constraints,
                    );

                    if (typeof validadorEmail !== 'undefined') {
                      msj += '\n * ' + validadorEmail.correo + ' \n ';
                    }

                    if (msj == '') {
                      recuperar(correo);
                    } else {
                      alert('Errores en algunos campos: \n  ' + msj);
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
  } else {
    return (
      <>
        <ActivityIndicator size="large" color="white" />
      </>
    );
  }
};
const mapStateToProps = estado => {
  return {
    enviado: estado.authReducer.recuperarReducer.enviado,
    error: estado.authReducer.recuperarReducer.error,
    cargando: estado.authReducer.recuperarReducer.cargando,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    limpiar_error: () => dispatch(limpiar_error_recuperar()),
    recuperar: value => dispatch(recuperar(value)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Confimacion);
