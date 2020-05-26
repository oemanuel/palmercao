import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import BarraBusqueda from '../../componentes/BarraBusqueda';
import ContenedorProducto from '../../componentes/ContenedorProducto';

const InfoCategoria = ({navigation}) => {
  return (
    <>
      <View style={styles.contain}>
        <View style={styles.header}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.goBack()}>
              <Image
                style={styles.flecha}
                source={require('../../assets/Icon/flecha.png')}
              />
            </TouchableOpacity>
            <Text style={styles.texto}>Nombre Categoria</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Menu')}>
            <Image
              style={styles.menu}
              source={require('../../assets/Icon/menu.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.info}>
          <View style={styles.children}>
            <BarraBusqueda />
          </View>
        </View>
        <View style={styles.separador} />
        <View style={{alignItems: 'center', flex: 0.73}}>
          <ContenedorProducto />
        </View>
      </View>
    </>
  );
};

export default InfoCategoria;
