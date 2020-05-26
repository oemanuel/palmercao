import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import BarraInfoCompra from '../../componentes/BarraInfoCompra';
import ContenedorProducto from '../../componentes/ContenedorProducto';
import Boton from '../../componentes/Boton';
import Modal from '../../componentes/Modal';
const InfoCategoria = ({navigation}) => {
  return (
    <>
      <Modal exito={true} />
      <View style={styles.contain}>
        <View style={styles.header}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate('Catalogo')}>
              <Image
                style={styles.flecha}
                source={require('../../assets/Icon/flecha.png')}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Catalogo')}>
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
          <TouchableOpacity style={{alignItems: 'center'}} activeOpacity={0.5}>
            <Boton titulo="Comprar" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default InfoCategoria;
