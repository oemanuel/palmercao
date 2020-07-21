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
  const {exito, visible, setModalVisible, limpiaresponse} = props;
  var imagencarreta = '',
    tx1 = '',
    tx2 = '';
  if (exito) {
    imagencarreta =
      'https://prodsbucket.s3-sa-east-1.amazonaws.com/PedidoExitoso.png';
    tx1 = '¡Su pedido fue exitoso!';
    tx2 = 'Gracias por su compra';
  } else {
    imagencarreta =
      'https://prodsbucket.s3-sa-east-1.amazonaws.com/PedidoFallo.png';
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
        limpiaresponse();
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
              limpiaresponse();
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
