import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Clipboard,
  ToastAndroid,
} from 'react-native';
import Boton from '../../componentes/Boton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {connect} from 'react-redux';
import {salir} from '../../redux/auth/login/actions/entrar.actions';

const Menu = props => {
  const {navigation, visible, setMenuVisible, salir} = props;
  const showToast = () => {
    ToastAndroid.show('Copiado en el portapapeles', ToastAndroid.SHORT);
  };
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
          <View style={styles.botones}>
            <Boton
              titulo="Lista de compra"
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate('ListaCompra');
              }}
            />
            <Boton
              titulo="Mi cuenta"
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate('MiCuenta');
              }}
            />
            <Boton
              titulo="Catalogo"
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate('Catalogo');
              }}
            />
          </View>
          <View style={styles.textoc}>
            <TouchableOpacity activeOpacity={0.5}>
              <Text
                onPress={() => {
                  setMenuVisible(false);
                  salir();
                }}
                style={[
                  styles.texto,
                  {
                    textDecorationLine: 'underline',
                  },
                ]}>
                Cerrar sesión
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.texto, {fontSize: hp('2')}]}>
            ¿Tu domicilio no llega?, llama
          </Text>
          <Text
            style={[styles.texto, {fontSize: hp('2')}]}
            onPress={() => {
              Clipboard.setString('3192059');
              showToast();
            }}>
            3192059
          </Text>
          <Text
            style={[styles.texto, {fontSize: hp('2')}]}
            onPress={() => {
              Clipboard.setString('3128206676');
              showToast();
            }}>
            3128206676
          </Text>
          <Text style={[styles.texto, {fontSize: hp('1.5')}]}>
            ¿Quejas, reclamos o sugerencias?, escribenos
          </Text>
          <Text
            style={[styles.texto, {fontSize: hp('1.5')}]}
            onPress={() => {
              Clipboard.setString('palmercao.atencionalusuario@gmail.co');
              showToast();
            }}>
            palmercao.atencionalusuario@gmail.com
          </Text>
          <View style={{flex: 0.2, justifyContent: 'flex-end'}}>
            <Text style={styles.texto2}>Pa'l Mercao App</Text>
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
  botones: {
    flex: 0.45,
    justifyContent: 'space-between',
  },
});

const mapDispatchToProps = dispatch => {
  return {
    salir: () => dispatch(salir()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Menu);
