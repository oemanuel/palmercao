import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import styles from './styles';
import ListaDeProductos from '../../componentes/ListaDeProductos';
import Menu from '../menu/Menu';
import Horario from '../../componentes/Horario';
import {ScrollView, FlatList} from 'react-native-gesture-handler';

const Catalogo = ({navigation}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [horario, setHorario] = useState(true);
  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={'#FF694E'}
        //translucent={true}
      />
      <Menu
        navigation={navigation}
        visible={menuVisible}
        setMenuVisible={setMenuVisible}
      />
      <Horario visible={horario} />
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

export default Catalogo;
