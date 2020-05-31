import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as validante from 'validate.js';
import Boton from './Boton';

//cositas de redux
// import { connect } from 'react-redux';
// import { crear_usuario } from "../redux/actions/auth.action";

const constraints = {
  clave: {
    presence: true,
    length: {
      minimum: 5,
      maximum: 10,
      message: ': La clave debe tener mínimo 6 carácteres y máximo 10.',
    },
  },
  correo: {
    presence: true,
    email: {message: ': El correo debe tener un formato válido.'},
  },
};

const Splash = props => {
  const {type, navigation} = props;

  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');

  const BotonD = () => {
    if (type == 'crear') {
      return (
        <Boton
          titulo="Crear mi cuenta"
          onPress={() => {
            let msj = '';
            let validadorEmail = validante.validate(
              {correo: correo},
              constraints,
            );
            let validadorPwd = validante.validate({clave: clave}, constraints);

            if (validadorEmail.correo) {
              msj += '\n * ' + validadorEmail.correo + ' \n ';
              setCorreo('');
            }

            if (validadorPwd.clave) {
              msj += '\n * ' + validadorPwd.clave + ' \n ';
              setClave('');
            }
            //console.log("anterior: " + user_success);

            if (msj == '') {
              //crear peticion de registro
              // registrar({ email: correo, password: clave });
            } else {
              alert('Errores en algunos campos: \n  ' + msj);
            }
          }}
        />
      );
    } else {
      return (
        <Boton
          titulo="Entrar"
          onPress={() => {
            let msj = '';
            let validadorEmail = validante.validate(
              {correo: correo},
              constraints,
            );
            let validadorPwd = validante.validate({clave: clave}, constraints);

            if (validadorEmail.correo) {
              msj += '\n * ' + validadorEmail.correo + ' \n ';
            }

            if (validadorPwd.clave) {
              msj += '\n * ' + validadorPwd.clave + ' \n ';
            }

            if (msj == '') {
              //crear peticion de login
              navigation.navigate('Bienvenida');
            } else {
              alert('Errores en algunos campos: \n  ' + msj);
            }
          }}
        />
      );
    }
  };

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
            style={styles.input}
            secureTextEntry={true}
            returnKeyLabel="Enviar"
            onChangeText={value => setClave(value)}
            value={clave}
          />
        </View>
        <View style={styles.enviar}>
          <BotonD />
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
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(41),
    justifyContent: 'space-evenly',
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
  enviar: {
    flex: 0.2,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Splash;
// const mapStateToProps = state => {

//   return {
//     user_success: state.auth.usuario_creado,
//     loading: state.auth.loading,
//   }

// }
// const mapDispatchToProps = dispatch => {

//   return {
//     registrar: value => dispatch(crear_usuario(value)),
//   }

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Splash);
