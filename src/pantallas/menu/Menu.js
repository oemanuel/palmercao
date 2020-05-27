import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Boton from '../../componentes/Boton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Menu = props => {
  const {navigation, visible, setMenuVisible} = props;
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={() => {
        setMenuVisible(false);
      }}>
      <View style={styles.contain}>
        <View style={styles.barra}>
          <View>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                setMenuVisible(false);
              }}>
              <Image
                style={styles.menu}
                source={require('../../assets/Icon/menu.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.logoc}>
            <Image
              style={styles.logo}
              source={require('../../assets/logo/Componente2.png')}
            />
          </View>

          <Boton
            titulo="Lista de compra"
            onPress={() => {
              setMenuVisible(false);
              navigation.navigate('ListaCompra');
            }}
          />
          <View style={styles.textoc}>
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={styles.texto}>Cerrar cesision</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.4, justifyContent: 'flex-end'}}>
            <Text style={styles.texto2}>Pa'l Mercado App</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  contain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  barra: {
    flex: 0.8,
    backgroundColor: '#FFC043',
    marginTop: hp('5'),
    marginBottom: hp('5'),
    borderBottomLeftRadius: hp('5'),
    borderTopLeftRadius: hp('5'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  logoc: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: wp('50'),
    height: hp('20'),
  },
  textoc: {
    flex: 0.15,
    justifyContent: 'center',
  },
  texto: {
    textDecorationLine: 'underline',
    color: 'white',
    fontSize: hp('3'),
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Bold',
  },
  texto2: {
    color: '#707070',
    fontSize: hp('2'),
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Bold',
  },
  menu: {
    height: hp('6'),
    width: wp('6'),
    resizeMode: 'contain',
    marginLeft: wp('7'),
    marginTop: hp('2'),
  },
});

export default Menu;
