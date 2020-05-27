import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import BarraBusqueda from '../../componentes/BarraBusqueda';
import Informacion from '../../componentes/InformacionCatalogo';
import ContenedorCategoria from '../../componentes/ContenedorCategoria';
import ContenedorProducto from '../../componentes/ContenedorProducto';
import Menu from '../menu/Menu';
const Catalogo = ({navigation}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <>
      <Menu
        navigation={navigation}
        visible={menuVisible}
        setMenuVisible={setMenuVisible}
      />
      <View style={styles.fondo}>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setMenuVisible(true)}>
            <Image
              style={styles.menu}
              source={require('../../assets/Icon/menu.png')}
            />
          </TouchableOpacity>
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
