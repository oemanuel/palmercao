import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import styles from './styles';
import ListaDeProductos from '../../componentes/ListaDeProductos';
import Menu from '../menu/Menu';
import Horario from '../../componentes/Horario';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

const Catalogo = ({navigation, estado}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [horario, setHorario] = useState(true);

  useEffect(() => {
    if (estado === true) {
      setHorario(false);
    } else {
      setHorario(true);
    }
  }, [estado]);
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
const mapStateToProps = estado => {
  console.log('estado: a ver: ', estado.estadoReducer.estado);
  return {
    estado: estado.estadoReducer.estado,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Catalogo);
