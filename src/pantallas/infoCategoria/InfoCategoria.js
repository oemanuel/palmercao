import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import styles from './styles';
import BarraBusqueda from '../../componentes/BarraBusqueda';
import ContenedorProducto from '../../componentes/ContenedorProducto';
import Menu from '../menu/Menu';
import ListaDeProductos from '../../componentes/ListaDeProductos';
import {connect} from 'react-redux';
import {busquedaProductos} from '../../redux/productos/productos.action';
const InfoCategoria = props => {
  const {navigation, route, busquedaProducto} = props;
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={route.params.color}
        //translucent={true}
      />
      <Menu
        navigation={navigation}
        visible={menuVisible}
        setMenuVisible={setMenuVisible}
      />
      <View style={styles.contain}>
        <View style={[styles.header, {backgroundColor: route.params.color}]}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                busquedaProducto('');
                navigation.goBack();
              }}>
              <Image
                style={styles.flecha}
                source={require('../../assets/Icon/flecha.png')}
              />
            </TouchableOpacity>
            <Text style={styles.texto}>{route.params.nombre}</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setMenuVisible(true)}>
            <Image
              style={styles.menu}
              source={require('../../assets/Icon/menu.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.info, {backgroundColor: route.params.color}]}>
          <View style={styles.children}>
            <BarraBusqueda color={route.params.color} />
          </View>
        </View>
        <View style={styles.separador} />
        <ListaDeProductos
          navigation={navigation}
          nombreCategoria={route.params.nombre}
          iscatalogo={false}
          color={route.params.color}
        />
      </View>
    </>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    busquedaProducto: value => dispatch(busquedaProductos(value)),
  };
};
export default connect(
  null,
  mapDispatchToProps,
)(InfoCategoria);
