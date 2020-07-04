import React, {useEffect} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Fondo from '../../componentes/Fondo';
import styles from './styles';
import Boton from '../../componentes/Boton';
const Confimacion = ({navigation, route}) => {
  console.log(route);

  return (
    <Fondo>
      <View style={styles.contain}>
        <View style={styles.aviso}>
          <View style={styles.icono}>
            <Image
              style={styles.image}
              source={require('../../assets/Icon/aviso.png')}
            />
          </View>
          <View style={[styles.texto1, {marginTop: 10}]}>
            <Text style={[styles.texto, {color: '#FF694E'}]}>
              {route.params.vengode == 'registro'
                ? 'ES OBLIGATORIO que REVISES tu CORREO y VERIFICAR tu CUENTA.'
                : 'Para cambiar la contraseña,'}
            </Text>
            <Text style={[styles.texto, {color: '#FF694E', marginTop: 10}]}>
              {route.params.vengode == 'registro'
                ? 'SI NO LO HACES no tendrás acceso a nuestra plataforma'
                : 'revisa tu correo.'}
            </Text>
          </View>
          <Boton
            titulo="Salir"
            onPress={() => {
              navigation.navigate('Registro');
            }}
          />
          <View style={styles.texto2} />
        </View>
      </View>
    </Fondo>
  );
};

export default Confimacion;
