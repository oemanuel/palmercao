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
          <Image
            style={styles.menu}
            source={require('../../assets/Icon/menu.png')}
          />
        </View>
        <View style={styles.info}>
          <View style={styles.children}>
            <View style={styles.cartac}>
              <View style={styles.carta}>
                <Image
                  style={styles.imagen}
                  source={{
                    uri:
                      'https://m.lopido.com/images/productos/sii/F/300x300/arroz_diana_premium-130127-1557347133.png',
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.separador} />
        <View style={{alignItems: 'center', flex: 0.73}}>
          <Text style={[styles.texto, {color: '#FF694E'}]}>
            Nombre producto
          </Text>
        </View>
      </View>
    </>
  );
};

export default InfoCategoria;
