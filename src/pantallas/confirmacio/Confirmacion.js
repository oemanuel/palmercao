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
            <Boton titulo="Salir" onPress={() => navigation.navigate('Login')}/>
          <View style={styles.texto2}>
          </View>
        </View>
      </View>
    </Fondo>
  );
};
export default Confimacion;
