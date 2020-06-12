import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as validante from 'validate.js';
import Boton from './Boton';

//cositas de redux
import {connect} from 'react-redux';
import {
  entrar,
  limpiar_error,
} from '../redux/auth/login/actions/entrar.actions';
import {
  registrar,
  limpiar_error as limpiar_error_r,
} from '../redux/auth/registrar/actions/registrar.actions';

const constraintsEmail = {
  correo: {
    presence: true,
    email: {message: ': El correo debe tener un formato válido.'},
  },
};
const constraintsPwd = {
  clave: {
    presence: true,
    length: {
      minimum: 6,
      maximum: 10,
      message: ': La clave debe tener mínimo 6 carácteres y máximo 10.',
    },
  },
};

const Splash = props => {
  const {type, navigation} = props;
  const {
    usuario,
    error_entrar,
    entrar,
    cargando_entrar,
    limpiar_error_entrar,
  } = props;
  const {
    registrado,
    error_registrar,
    registrar,
    cargando_registrar,
    limpiar_error_registrar,
  } = props;

  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [showIndicator, setShowIndicator] = useState(false);

  const TextoUnderline = () => {
    if (type == 'crear') {
      return (
        <Text
          onPress={() => navigation.navigate('Login')}
          style={[styles.texto, {textDecorationLine: 'underline'}]}>
          Iniciar sesión
        </Text>
      );
    } else {
      return (
        <Text
          onPress={() => navigation.navigate('Recuperar')}
          style={[styles.texto, {textDecorationLine: 'underline'}]}>
          ¿Se te olvidó la contraseña?
        </Text>
      );
    }
  };
  useEffect(() => {
    if (registrado) {
      limpiar_error_registrar();
      navigation.navigate('Confirmacion');
    }
  }, [registrado]);
  useEffect(() => {
    if (error_registrar) {
      Alert.alert(
        'Oops!',
        'ha ocurrido un error al registrar',
        [
          {
            text: 'Ok, lo intentaré despues',
            onPress: () => {
              limpiar_error_registrar();
              setClave(''), setCorreo('');
            },
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
    }
  }, [error_registrar]);
  useEffect(() => {
    if (error_entrar) {
      Alert.alert(
        'Oops!',
        'ha ocurrido un error al ingresar',
        [
          {
            text: 'Ok, lo intentaré despues',
            onPress: () => {
              limpiar_error_entrar();
              setClave(''), setCorreo('');
            },
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
    } else {
      if (usuario) {
        setClave('');
        setCorreo('');
      }
    }
  }, [error_entrar]);

  useEffect(() => {
    if (cargando_entrar) {
      setShowIndicator(true);
    } else {
      setShowIndicator(false);
    }
  }, [cargando_entrar]);
  useEffect(() => {
    if (cargando_registrar) {
      setShowIndicator(true);
    } else {
      setShowIndicator(false);
    }
  }, [cargando_registrar]);

  const BotonD = () => {
    const action = () => {
      let msj = '';
      let validadorEmail = validante.validate(
        {correo: correo},
        constraintsEmail,
      );
      let validadorPwd = validante.validate({clave: clave}, constraintsPwd);

      if (typeof validadorEmail !== 'undefined') {
        msj += '\n * ' + validadorEmail.correo + ' \n ';
        setCorreo('');
      }

      if (typeof validadorPwd !== 'undefined') {
        msj += '\n * ' + validadorPwd.clave + ' \n ';
        setClave('');
      }

      if (msj == '') {
        if (type == 'crear') {
          registrar({correo: correo, clave: clave});
        }
        if (type == 'login') {
          entrar({correo: correo, clave: clave});
        }
      } else {
        alert('Errores en algunos campos: \n  ' + msj);
      }
    };

    if (type == 'crear') {
      return <Boton titulo="Crear mi cuenta" onPress={() => action()} />;
    } else {
      return <Boton titulo="Entrar" onPress={() => action()} />;
    }
  };

  if (!showIndicator) {
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
              onChangeText={value => setCorreo(value)}
              value={correo}
            />
            <Text style={styles.texto}>Contraseña:</Text>
            <TextInput
              style={[styles.input]}
              secureTextEntry={true}
              returnKeyLabel="Enviar"
              onChangeText={value => setClave(value)}
              value={clave}
            />
          </View>
          <BotonD />
          <View style={styles.recuperacion}>
            <TextoUnderline />
          </View>
        </View>
      </>
    );
  } else {
    return (
      <>
        <ActivityIndicator size="large" color="white" />
      </>
    );
  }
};

const styles = StyleSheet.create({
  texto: {
    color: 'white',
    fontSize: hp('2.5'),
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
  contain: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(50),
    justifyContent: 'space-around',
    // backgroundColor: "blue",
  },
  c1: {
    width: '80%',
    height: '65%',
    justifyContent: 'space-evenly',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: wp('5'),
    color: 'black',
    fontSize: hp('2.5'),
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
  recuperacion: {
    height: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"yellow"
  },
});

const mapDispatchToProps = dispatch => {
  return {
    entrar: value => dispatch(entrar(value)),
    registrar: value => dispatch(registrar(value)),
    limpiar_error_entrar: () => dispatch(limpiar_error()),
    limpiar_error_registrar: () => dispatch(limpiar_error_r()),
  };
};
const mapStateToProps = estado => {
  return {
    usuario: estado.authReducer.entrarReducer.usuario,
    error_entrar: estado.authReducer.entrarReducer.error,
    cargando_entrar: estado.authReducer.entrarReducer.cargando,
    cargando_registrar: estado.authReducer.registrarReducer.cargando,
    error_registrar: estado.authReducer.registrarReducer.error,
    registrado: estado.authReducer.registrarReducer.registrado,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Splash);
