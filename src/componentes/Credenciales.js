import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as validante from "validate.js"
import Boton from './Boton';


//cositas de redux
import { connect } from 'react-redux';
import { crear_usuario, entrar_usuario, limpiar_auth } from "../redux/actions/auth.action";


const constraints = {
  clave: {
    presence: true,
    length: {
      minimum: 5,
      maximum: 10,
      message: ": La clave debe tener mínimo 6 carácteres y máximo 10."
    }
  },
  correo: {
    presence: true,
    email: { message: ": El correo debe tener un formato válido." },
  }
}



const Splash = props => {

  const { type, navigation, registrar, ingresar, error, loading, inicio, usuario, limpiar } = props;


  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [showIndicator, setShowIndicator] = useState(false)

  useEffect(() => {
    if (usuario) {
      navigation.navigate("Bienvenida")
    }
  }, [usuario]);




  useEffect(() => {
    if (loading) {
      setShowIndicator(true);
    } else {
      setShowIndicator(false);
    }
  }, [loading]);

  useEffect(() => {

    if (error) {
      // limpiar 
      if (type == "crear" && !loading && !inicio) { console.log("Ha ocurrido un error al Registrarse")}
      if (type == "login" && !loading && !inicio && usuario==null ) { console.log("Ha ocurrido un error al ingresar")}
      limpiar();
      setCorreo("");
      setClave("");
    }
  }, [error]);

  const TextoUnderline = () => {
    if (type == "crear") {
      return (<Text onPress={() => navigation.navigate('Login')} style={[styles.texto, { textDecorationLine: 'underline' }]}>
        Iniciar sesión
      </Text>);
    } else {
      return (<Text onPress={() => navigation.navigate('Recuperar')} style={[styles.texto, { textDecorationLine: 'underline' }]}>
        ¿Se te olvidó la contraseña?
      </Text>);
    }

  }


  const BotonD = () => {


    if (type == "crear") {
      return <Boton titulo="Crear mi cuenta" onPress={() => {
        let msj = "";
        let validadorEmail = validante.validate({ correo: correo }, constraints);
        let validadorPwd = validante.validate({ clave: clave }, constraints);



        if (validadorEmail.correo) {
          msj += ("\n * " + validadorEmail.correo + " \n ");
          setCorreo("");

        }

        if (validadorPwd.clave) {
          msj += ("\n * " + validadorPwd.clave + " \n ");
          setClave("");
        }


        if (msj == "") {
          //crear peticion de registro

          registrar({ email: correo, password: clave });

        } else {
          alert("Errores en algunos campos: \n  " + msj);
        }


      }} />
    } else {
      return <Boton titulo="Entrar" onPress={() => {

        let msj = "";
        let validadorEmail = validante.validate({ correo: correo }, constraints);
        let validadorPwd = validante.validate({ clave: clave }, constraints);



        if (validadorEmail.correo) {
          msj += ("\n * " + validadorEmail.correo + " \n ");
          setCorreo("");
        }

        if (validadorPwd.clave) {
          msj += ("\n * " + validadorPwd.clave + " \n ");
          setClave("");

        }


        if (msj == "") {
          //crear peticion de login
          ingresar({ email: correo, password: clave });


        } else {
          alert("Errores en algunos campos: \n  " + msj);
        }

      }} />
    }
  }


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
              onChangeText={(value) => setCorreo(value)}
              value={correo}

            />
            <Text style={styles.texto}>Contraseña:</Text>
            <TextInput
              style={[styles.input]}
              secureTextEntry={true}
              returnKeyLabel="Enviar"
              onChangeText={(value) => setClave(value)}
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
    return (<>
      <ActivityIndicator size="large" />
    </>);
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
    alignItems: "center",
    height: hp(50),
    justifyContent: "space-around",
    // backgroundColor: "blue",
  },
  c1: {
    width: "80%",
    height: "65%",
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

const mapStateToProps = state => {

  return {
    error: state.auth.error,
    loading: state.auth.loading,
    inicio: state.auth.inicio,
    usuario: state.auth.user,
  }


}
const mapDispatchToProps = dispatch => {

  return {
    registrar: value => dispatch(crear_usuario(value)),
    ingresar: value => dispatch(entrar_usuario(value)),
    limpiar:()=> dispatch(limpiar_auth())
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(Splash);
