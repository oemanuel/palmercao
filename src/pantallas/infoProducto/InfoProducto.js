import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from './styles';
import Menu from '../menu/Menu';
import Boton from '../../componentes/Boton';
import CantidadProducto from '../../componentes/CantidadProducto';

const InfoProducto = ({navigation}) => {
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
            <Text style={styles.texto}>Nombre Categoria</Text>
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
          <View style={styles.children}>
            <View style={styles.cartac}>
              <View style={styles.carta}>
                <Image
                  style={styles.imagen}
                  source={{
                    uri:
                      'https://m.lopido.com/images/productos/sii/F/300x300/arroz_diana_premium-130127-1557347133.png',
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.separador} />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 0.25,
          }}>
          <Text style={[styles.texto, {color: '#FF694E'}]}>
            Nombre producto
          </Text>
          <Text
            style={[
              styles.texto,
              {
                color: '#707070',
                fontSize: hp('2'),
                fontFamily: 'OpenSans-Regular',
              },
            ]}>
            correo
          </Text>
          <Text style={[styles.texto, {color: '#030303'}]}>$1500</Text>
        </View>
        <CantidadProducto />
        <View style={{flex: 0.1, justifyContent: 'flex-start'}}>
          <Boton titulo="Agregar a la lista" />
        </View>
      </View>
    </>
  );
};

export default InfoProducto;
