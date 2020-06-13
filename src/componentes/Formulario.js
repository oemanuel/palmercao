import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from './Modal';
import Boton from './Boton';
import * as validante from 'validate.js';
import {connect} from 'react-redux';
import {
  enviar_solicitud,
  limpiaresponse,
} from '../redux/listaCompra/reducers/listaCompra';
const Formulario = ({
  carrito,
  total,
  enviar,
  error,
  response,
  cargando,
  limpiaresponse,
}) => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [barrio, setBarrio] = useState('');
  const [apartamento, setApartamento] = useState('');
  const [comentario, setComentario] = useState('');
  const [visible, setModalVisible] = useState(false);

  const constraints = {
    nombre: {
      presence: {allowEmpty: false},
    },
    telefono: {
      presence: {allowEmpty: false},
    },
    direccion: {
      presence: {allowEmpty: false},
    },
    barrio: {
      presence: {allowEmpty: false},
    },
  };
  const reset = () => {
    setNombre('');
    setTelefono('');
    setDireccion('');
    setBarrio('');
    setApartamento('');
    setComentario('');
  };
  useEffect(() => {
    if (error) {
      console.log('ha ocurrido un error: ', error);
      setModalVisible(true);
    }
    if (response) {
      console.log('genial: ', response);
      reset();
      setModalVisible(true);
    }
  }, [error, response]);

  if (!cargando) {
    console.log('Soy el response jejej ', response, '\n');
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        enabled
        style={{flex: 1}}>
        <Modal
          exito={response && !error}
          visible={visible}
          setModalVisible={setModalVisible}
          limpiaresponse={limpiaresponse}
        />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={styles.contain}>
              <Text
                style={[
                  styles.texto,
                  {
                    color: '#FF694E',
                    marginTop: 10,
                    alignSelf: 'center',
                    fontSize: hp('3'),
                  },
                ]}>
                Verifica tus datos
              </Text>
              <View style={styles.forma}>
                <Text style={styles.texto}>Pedido a nombre de:</Text>
                <TextInput
                  keyboardType="url"
                  style={styles.input}
                  placeholder="Obligatorio"
                  onChangeText={value => setNombre(value)}
                  value={nombre}
                />
                <Text style={styles.texto}>Telefono:</Text>
                <TextInput
                  keyboardType="numeric"
                  style={styles.input}
                  placeholder="Obligatorio"
                  onChangeText={value => setTelefono(value)}
                  value={telefono}
                />
                <Text style={styles.texto}>Dirección:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Obligatorio"
                  onChangeText={value => setDireccion(value)}
                  value={direccion}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: hp('2'),
                  }}>
                  <View style={{width: wp('45')}}>
                    <Text style={styles.texto}>Barrio:</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Obligatorio"
                      onChangeText={value => setBarrio(value)}
                      value={barrio}
                    />
                  </View>
                  <View style={{width: wp('33')}}>
                    <Text style={styles.texto}>Apartamento:</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Opcional"
                      onChangeText={value => setApartamento(value)}
                      value={apartamento}
                    />
                  </View>
                </View>
                <Text style={styles.texto}>Comentarios:</Text>
                <TextInput
                  multiline={true}
                  style={styles.input}
                  placeholder="Opcional"
                  onChangeText={value => setComentario(value)}
                  value={comentario}
                />
                <Boton
                  titulo="Comprar"
                  onPress={() => {
                    if (
                      typeof validante.validate(
                        {
                          nombre: nombre,
                          telefono: telefono,
                          direccion: direccion,
                          barrio: barrio,
                        },
                        constraints,
                      ) !== 'undefined' ||
                      carrito.filter(item => item.cantidad !== 0).length === 0
                    ) {
                      Alert.alert(
                        'Oops!',
                        'Su carrito está vacío, de no ser así verifique si hay campos obligatorios vacíos!',
                        [
                          {
                            text: 'Ok, lo verificaré de nuevo',
                            onPress: () => {},
                            style: 'cancel',
                          },
                        ],
                        {cancelable: false},
                      );
                    } else {
                      enviar({
                        nombre: nombre,
                        telefono: telefono,
                        direccion: direccion,
                        barrio: barrio,
                        comentario: comentario,
                        apartamento: apartamento,
                        carrito: carrito.filter(item => item.cantidad !== 0),
                        total: total,
                      });
                    }
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  } else {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#FF694E" />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  texto: {
    color: '#707070',
    fontSize: hp('2.5'),
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
  contain: {
    paddingBottom: hp(5),
  },
  forma: {
    marginLeft: wp('7'),
    marginRight: wp('7'),
    marginTop: hp('2'),
  },
  input: {
    backgroundColor: 'white',
    borderRadius: wp('5'),
    elevation: 5,
    marginTop: wp('4'),
    marginBottom: wp('4'),
    color: 'black',
    fontSize: hp('2'),
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
});
const mapDispatchToProps = dispatch => {
  return {
    enviar: value => dispatch(enviar_solicitud(value)),
    limpiaresponse: () => dispatch(limpiaresponse()),
  };
};

const mapStateToProps = estado => {
  return {
    carrito: estado.listaCompraReducer.carrito,
    total: estado.listaCompraReducer.total,
    cargando: estado.listaCompraReducer.cargando,
    response: estado.listaCompraReducer.response,
    error: estado.listaCompraReducer.error,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Formulario);
