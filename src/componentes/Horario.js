import React, {useState} from 'react';
import {Modal, StyleSheet, Text, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Horario = props => {
  const {visible} = props;

  return (
    <Modal
      style={styles.moda}
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        //setModalVisible(false);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            style={styles.imagen}
            source={require('../assets/Img/canastaVerduras.png')}
          />
          <Text style={[styles.text, {color: '#707070', fontSize: wp('5')}]}>
            Lo sentimos Pa'l mercao está cerrado,
          </Text>
          <Text style={[styles.text, {color: '#707070', fontSize: wp('4')}]}>
            Intente nuevamente más tarde.
          </Text>
          <Text style={styles.text}>Horario de atencion</Text>

          <Text style={[styles.text, {color: '#707070', fontSize: wp('5')}]}>
            7:00 am - 8:00 pm
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  moda: {
    backgroundColor: 'red',
  },
  imagen: {
    resizeMode: 'cover',
    width: wp('90%'),
    height: hp('60%'),
    position: 'absolute',
    opacity: 0.3,
    borderRadius: wp('20'),
  },
  text: {
    color: '#FF694E',
    fontSize: wp('7'),
    fontFamily: Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Bold',
    marginVertical: hp('1%'),
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: wp('90%'),
    height: hp('60%'),
    backgroundColor: 'white',
    borderRadius: wp('20'),
    marginTop: hp('10'),
    padding: wp('5'),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 100,

    elevation: 24,
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Horario;
