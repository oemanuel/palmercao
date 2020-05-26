import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
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
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Bienvenida')}>
            <BotonGoogle titulo="Entrar con google" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Bienvenida')}>
            <BotonFace titulo="Entrar con Facebook" />
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.1}} />
        <View style={styles.c3} />
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
      </Fondo>
    </>
  );
};

export default Registro;
