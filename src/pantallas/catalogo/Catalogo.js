import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import BarraBusqueda from '../../componentes/BarraBusqueda';
import Informacion from '../../componentes/InformacionCatalogo';
import ContenedorCategoria from '../../componentes/ContenedorCategoria';
import ContenedorProducto from '../../componentes/ContenedorProducto';
const Catalogo = ({navigation}) => {
  return (
    <>
      <View style={styles.fondo}>
        <View style={styles.header}>
          <Image
            style={styles.menu}
            source={require('../../assets/Icon/menu.png')}
          />
        </View>
        <Informacion>
          <BarraBusqueda />
        </Informacion>
        <View style={styles.textoc}>
          <Text style={styles.texto}>Categorias</Text>
        </View>
        <View style={styles.categoriac}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('InfoCategoria')}>
            <ContenedorCategoria />
          </TouchableOpacity>
        </View>
        <View style={styles.textoc}>
          <Text style={styles.texto}>Populares</Text>
        </View>

        <View style={styles.productoc}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('InfoProducto')}>
            <ContenedorProducto />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default Catalogo;
