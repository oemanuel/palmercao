import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import BarraBusqueda from '../../componentes/BarraBusqueda';
import Informacion from '../../componentes/InformacionCatalogo';
import ContenedorCategoria from '../../componentes/ContenedorCategoria';
import ContenedorProducto from '../../componentes/ContenedorProducto';
import ListaDeProductos from '../../componentes/ListaDeProductos';
import {connect} from 'react-redux';
import Menu from '../menu/Menu';
import {ScrollView, FlatList} from 'react-native-gesture-handler';

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
        <ListaDeProductos
          navigation={navigation}
          iscatalogo={true}
          nombreCategoria={'otros'}
        />
      </View>
    </>
  );
};

const mapStateToProps = state => {
  return {
    productosObject: state.productosReducer.productos,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Catalogo);
