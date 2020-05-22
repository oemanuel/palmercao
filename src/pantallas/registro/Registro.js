import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Fondo from '../../componentes/Fondo';
import Logo from '../../componentes/Logo';
import styles from './styles';
import BotonGoogle from '../../componentes/BotonGoogle';
import BotonFace from '../../componentes/BotonFace';

const Registro = ({navigation}) => {
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
          <TouchableOpacity activeOpacity={0.5}>
            <BotonGoogle titulo="Regístrar con google" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <BotonFace titulo="Regístrar con Facebook" />
          </TouchableOpacity>
          <Text style={styles.texto}>Regístrar con e-mail</Text>
        </View>
        <View style={styles.c3}>
          <Text style={styles.texto}>¿Ya tienes una cuenta?</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Login')}>
            <Text
              style={[
                styles.texto,
                {color: '#00B46B', textDecorationLine: 'underline'},
              ]}>
              Inicia sesíon
            </Text>
          </TouchableOpacity>
        </View>
      </Fondo>
    </>
  );
};

export default Registro;
