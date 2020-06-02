import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import BarraInfoCompra from '../../componentes/BarraInfoCompra';
import ContenedorProducto from '../../componentes/ContenedorProducto';
import Boton from '../../componentes/Boton';
import Modal from '../../componentes/Modal';
import Menu from '../menu/Menu';

const ListaCompras = ({navigation}) => {
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
            <Text style={styles.texto}>1</Text>
          </View>
          <View style={styles.children}>
            <BarraInfoCompra />
          </View>
        </View>
        <View style={styles.separador} />
        <View style={{alignItems: 'center', flex: 0.73}}>
          <ContenedorProducto />
        </View>
        <View style={styles.boton}>
          <Boton
            titulo="Comprar"
            onPress={() =>
              /*{
              setModalVisible(true);
              setTimeout(
                () => {
                  setModalVisible(false);
                },
                5000,
                this,
              );
            }*/ navigation.navigate(
                'DatosPedidos',
              )
            }
          />
        </View>
      </View>
    </>
  );
};
export default ListaCompras;
