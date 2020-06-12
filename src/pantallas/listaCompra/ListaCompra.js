import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import BarraInfoCompra from '../../componentes/BarraInfoCompra';
import ContenedorProducto from '../../componentes/ContenedorProducto';
import Boton from '../../componentes/Boton';
import Modal from '../../componentes/Modal';
import Menu from '../menu/Menu';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {connect} from "react-redux"

const ListaCompras = ({navigation, carrito, total}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <Menu
        navigation={navigation}
        visible={menuVisible}
        setMenuVisible={setMenuVisible}
      />
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
        <View style={styles.info}>
          <Image
            style={styles.canasta}
            source={require('../../assets/Img/canastaCompra.png')}
          />
          <Text style={[styles.texto, styles.titulo]}>Lista de compra</Text>
          <View style={styles.ccantidad}>
            <Text style={styles.texto}>{carrito.length}</Text>
          </View>
          <View style={styles.children}>
            <BarraInfoCompra cantidad={total}/>
          </View>
        </View>
        <View style={styles.separador1} />
        <FlatList
          data={carrito}
          contentContainerStyle={{alignItems: 'center'}}
          keyExtractor={item=> item.identificador}
          renderItem={(item) => {
            let {item:p}= item
            
            return (
              <ContenedorProducto item={p} isComprar={true}/>
            );
          }}
        />
        <View style={styles.separador} />
        <View style={styles.boton}>
          <Boton
            titulo="Comprar"
            onPress={() =>
              navigation.navigate(
                'DatosPedidos',
              )
            }
          />
        </View>
      </View>
    </>
  );
};


const mapStateToProps= estado => {

  return{
    carrito: estado.listaCompraReducer.carrito,
    total:estado.listaCompraReducer.total,
  }
}


export default connect(mapStateToProps, null)(ListaCompras);
