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
  const {exito} = props;
  const [modalVisible, setModalVisible] = useState(true);
  var imagencarreta = '',
    tx1 = '',
    tx2 = '';
  if (exito) {
    imagencarreta =
      'https://lh3.googleusercontent.com/SC5UtJE4fsjHAZFeNSEBZQ-TrBihwNRyEs_vd-YHYk8gSKIpkgpI6xBrF9l4YA0QKxffwIs8GwcJ8frf-poXZIa7s1XxQlLaqHGIsW9_8W3smumq-6AefgD8O4wyrWSItTiZ3b-uCBaSaoMkvAoZOPJ1TNoqaNdU0KdT6q8BDLvKXYDuJpF_q0Jtx8pu8G43Np4QGkJsk2de47EDy0aMkN9Svszpedn7DaPXzf43PpUa1rcShcMg8YhBZqFqYnWMu6WJbPHOpEVMyWk6n2xy9QvB1DvPjmm-y5UJiHcqmrV9NML-KWckeq6ZvduCJzgKu9GOSOLE1vX4dM91G7XXPAV7R9JOyii1E4mvyX5kfzxcVgSBJTMZNr9Q32U4V3ShP4vZbQCUkzbQ832B1qljBnWYVDvJGZXKsf8QLCyBtTQwS3hYMMPjYfpbYzmwTz4-x0QgsONQn5irRkmvkTizeUOudCf4bIyxwE_bj2nlmn1ZlOq8FgKJIX27a0rp_C7MlCbxd4EBEoHmUlG3csQFwYaV9yMKDw-nDBWio7hyRd3nzrL2QBbxHLfc1_hRVeTcGBzlPCEeh7EGVwK0Vxg4YVWfU2XVtLTxoGsWhcoWlJtDnQ2zZZ9w-ws7TZkQmyj-OXh-uyZ-1-LboN6OFUYaE_xB9rpiJl4Frg7-Oyu8l8BG6jHRL_tVxr2sq5aXQg=w305-h203-no?authuser=1';
    tx1 = '¡Su pedido fue exitoso!';
    tx2 = 'Gracias por su compra';
  } else {
    imagencarreta =
      'https://lh3.googleusercontent.com/XUAX4D44Db7e-Cam8hnDzy2v4wD0n3H6xreeVvRWj8iWmIngrVoIgP2NMVZc78KPlxLhedBNDB5azpGPeRqjvLLJTw_tMuiFrpejNUY8AekInDqepxIvO677NJaiB8Mz6ru-h2NHoKRnSThKkHN0_3DT7gIAUyTpgFqSjgu32UE6bx3Smqt21-LLmJag29438ivgV8Wnlcug_lT9RhKzJIKkrntH67iuvk21Snkh5UGaIcaH9oqHHjAWXwNkNU3MVIS0TwauuHWhifn9c5JxZScBb6DnCJecjq0lXJQf2W05LSaWkD7sfwoOg4wStKDlVWMS6Y6ENiGw6di5zufeudzRI9KwKVkiHbHTapHxy14lkDOV3hXU_rABwG8TeJwiz12M8YcPnASY9iFzEOwiHet_4q77ZJX4F8xSbrC72Wf91WZFqptjroGpeQPZQY4VP8_PWDQohTaE9cYgvn6irYW4ByPnm9W5_3eJFQCSPy3PAJOezbxMNvViqsXZcqDLbPAI2DZj9bsZimJgp-0npjmKfmb1ish_NrKh6GG9H3YKvJpJU63BEdMXsUtQZQzEcYfO-qbIQ7tkiWkDOXJfegTkgGL1PXVKB90NAmAoYyR8bcWZHmxWCBVwY-HgONwSCbLKwj7hENeR0jQfRyevt1ruYnT6lITP4upGRfk3_4P_V2WRrKXCXmXC4DL1ag=w298-h133-no?authuser=1';
    tx1 = '¡Falla en el pedido!';
    tx2 = 'Intente nuevamente';
  }
  return (
    <Modal
      style={styles.moda}
      visible={modalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
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
              setModalVisible(!modalVisible);
            }}>
            <Text style={[styles.text, {color: 'black', fontSize: hp('2')}]}>
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
  },
  modalView: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: wp('20'),
    marginTop: hp('37'),
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
