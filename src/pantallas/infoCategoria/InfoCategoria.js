import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import BarraBusqueda from '../../componentes/BarraBusqueda';
import ContenedorProducto from '../../componentes/ContenedorProducto';
import Menu from '../menu/Menu';

const InfoCategoria = props => {
  const {navigation, route} = props;
  const [menuVisible, setMenuVisible] = useState(false);
  const [lista, setLista] = useState([
    {key: '1'},
    {key: '2'},
    {key: '3'},
    {key: '4'},
    {key: '5'},
  ]);
  return (
    <>
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
              onPress={() => navigation.goBack()}>
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
        <FlatList
          data={lista}
          contentContainerStyle={{alignItems: 'center'}}
          renderItem={() => {
            return (
              <ContenedorProducto
                navigation={navigation}
                color={route.params.color}
                nombre={route.params.nombre}
              />
            );
          }}
        />
      </View>
    </>
  );
};

export default InfoCategoria;
