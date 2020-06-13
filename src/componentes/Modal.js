import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Modales = props => {
  const {exito, visible, setModalVisible} = props;
  var imagencarreta = '',
    tx1 = '',
    tx2 = '';
  if (exito) {
    imagencarreta =
      'https://firebasestorage.googleapis.com/v0/b/palmercao-3c01f.appspot.com/o/imagenes%2FPedidoExitoso.png?alt=media&token=6f50f0b1-fe3e-4314-b0bc-b7d96fd2fc06';
    tx1 = '¡Su pedido fue exitoso!';
    tx2 = 'Gracias por su compra';
  } else {
    imagencarreta =
      'https://firebasestorage.googleapis.com/v0/b/palmercao-3c01f.appspot.com/o/imagenes%2FPedidoFallo.png?alt=media&token=d8cf1602-e085-4424-84e7-a52737e89be0';
    tx1 = '¡Falla en el pedido!';
    tx2 = 'Intente nuevamente';
  }
  return (
    <Modal
      style={styles.moda}
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image style={styles.imagen} source={{uri: imagencarreta}} />
          <Text style={styles.text}>{tx1}</Text>
          <Text style={[styles.text, {color: '#707070', fontSize: hp('2')}]}>
            {tx2}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}>
            <Text style={[styles.text, {color: '#000', fontSize: hp('2')}]}>
              Cerrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  moda: {
    flex: 1,
  },
  imagen: {
    width: wp('50'),
    height: wp('40'),
    resizeMode: 'contain',
    alignSelf: 'flex-start',
  },
  text: {
    color: '#FF694E',
    fontSize: hp('3'),
    fontFamily: Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: wp('20'),
    marginTop: hp('10'),
    padding: wp('10'),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 100,

    elevation: 24,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Modales;
