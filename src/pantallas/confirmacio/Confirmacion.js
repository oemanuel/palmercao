import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Fondo from '../../componentes/Fondo';
import styles from './styles';
import Boton from '../../componentes/Boton';
const Confimacion = ({navigation}) => {
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
          <View style={styles.texto1}>
            <Text style={[styles.texto, {color: '#FF694E'}]}>
              Tu solicitud ha sido enviada,
            </Text>
            <Text style={[styles.texto, {color: '#FF694E'}]}>
              revisa tu correo.
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Login')}>
            <Boton titulo="Salir" />
          </TouchableOpacity>
          <View style={styles.texto2}>
            <TouchableOpacity activeOpacity={0.5}>
              <Text
                style={[
                  styles.texto,
                  {color: '#00B46B', textDecorationLine: 'underline'},
                ]}>
                ¿Volver a enviar?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Fondo>
  );
};
export default Confimacion;
