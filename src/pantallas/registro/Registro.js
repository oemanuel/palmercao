import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Fondo from '../../componentes/Fondo';
import Logo from '../../componentes/Logo';
import styles from './styles';
import Boton from '../../componentes/Boton';

//cositas de redux
import { connect } from 'react-redux';

const Registro = ({ navigation, usuario }) => {



  useEffect(() => {

    if (usuario) {
      navigation.navigate("Bienvenida")
    }
  }, [usuario]);
  return (
    <>
      <Fondo>
        <View style={styles.contain}>
          <Logo />
        </View>
        <View style={styles.c1}>
          <Text style={styles.texto}>¡Todos tus productos a la mano!</Text>
        </View>
        <View style={styles.c2}>
          <Boton titulo="Iniciar sesión" onPress={() => navigation.navigate('Login')} />
          <Text onPress={() => navigation.navigate('Registro2')} style={[styles.texto, { textDecorationLine: 'underline', }]}>¡registrarse!</Text>

        </View>
        <View style={{ flex: 0.1 }} />
        <View style={styles.c3}>
          <View style={styles.v1}>
            <Image
              style={styles.verdura}
              source={require('../../assets/verduras/verdura1.png')}
            />
          </View>
          <View style={styles.v2}>
            <Image
              style={styles.verdura}
              source={require('../../assets/verduras/verdura2.png')}
            />
          </View>
        </View>
      </Fondo>
    </>
  );
};

const mapStateToProps = state => {
  return {
    usuario: state.auth.user
  }
}
export default connect(mapStateToProps, null)(Registro);
