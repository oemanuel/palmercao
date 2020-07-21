import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  Platform,
  StatusBar,
  FlatList,
} from 'react-native';
import styles from './styles';
import Boton from '../../componentes/Boton';
import Menu from '../menu/Menu';
import {connect} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const MiCuenta = ({navigation, usuario, pedidosObject}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [cambioVisible, secambioVisible] = useState(false);

  const CampoDeCambio = () => {
    if (cambioVisible) {
      return (
        <>
          <Text style={[styles.texto, styles.texto2]}>
            Cambio de contraseña
          </Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Ingrese la nueva contraseña"
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Confirme la contraseña"
          />
          <Boton titulo="Enviar" onPress={() => secambioVisible(false)} />
        </>
      );
    } else {
      return (
        <Boton
          titulo="Cambiar contraseña"
          onPress={() => secambioVisible(true)}
        />
      );
    }
  };
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#FFC043"
      />
      <Menu
        navigation={navigation}
        visible={menuVisible}
        setMenuVisible={setMenuVisible}
      />
      {/* <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        enabled
        style={{flex: 1, backgroundColor: 'white'}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
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
            <Text
              style={[
                styles.texto,
                {
                  marginLeft: '5%',
                },
              ]}>
              Mi cuenta
            </Text>
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
          <Image
            style={styles.persona}
            source={require('../../assets/Icon/persona.png')}
          />
          {/* <Text style={styles.texto}>Nombre persona</Text> */}
        </View>
        <View style={styles.forma}>
          <Text style={[styles.texto, styles.texto2]}>Mi correo</Text>
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            style={[styles.input, {paddingLeft: 20}]}
            defaultValue={usuario ? usuario.user.email : ''}
            editable={false}
          />
          <Text style={[styles.texto, styles.texto2]}>Mis pedidos</Text>
        </View>
      </View>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <FlatList
          data={pedidosObject}
          keyExtractor={(item, index) => item.identificador}
          contentContainerStyle={{}}
          renderItem={({item}) => (
            <View
              style={{
                elevation: 5,
                marginVertical: 5,
                alignSelf: 'center',
                width: wp(90),
                height: hp(12),
              }}>
              <View
                style={[
                  {
                    height: hp(4),
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: wp('5'),
                    elevation: 5,
                    alignSelf: 'center',
                    flexDirection: 'row',
                    marginVertical: 5,
                    fontSize: hp('2'),
                    fontFamily:
                      Platform.OS === 'ios'
                        ? 'AsCalledByFontBook'
                        : 'OpenSans-Regular',
                  },
                ]}>
                <Text
                  style={[
                    {
                      elevation: 0,
                      width: '33%',
                      textAlign: 'center',
                      color:
                        item.estado == 'en espera'
                          ? 'red'
                          : item.estado == 'en atencion'
                          ? '#FFC043'
                          : 'green',
                    },
                  ]}>
                  {item.estado}
                </Text>

                <Text
                  style={[{elevation: 0, width: '33%', textAlign: 'center'}]}>
                  {item.fecha}
                </Text>
                <Text
                  style={[{elevation: 0, width: '33%', textAlign: 'center'}]}>
                  COP {item.total}
                </Text>
              </View>
              <View
                style={[
                  {
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: wp('5'),
                    elevation: 5,
                    alignSelf: 'center',
                    fontSize: hp('2'),
                    fontFamily:
                      Platform.OS === 'ios'
                        ? 'AsCalledByFontBook'
                        : 'OpenSans-Regular',
                  },
                ]}>
                <Text
                  style={[
                    {
                      textAlign: 'center',
                      marginBottom: 4,
                    },
                  ]}>
                  A nombre de: {item.nombre}
                </Text>
                <Text
                  style={[
                    {
                      textAlign: 'center',
                    },
                  ]}>
                  Código: {item.identificador}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
      {/* </TouchableWithoutFeedback>
      </KeyboardAvoidingView> */}
    </>
  );
};

const mapStateToProps = estado => {
  return {
    usuario: estado.authReducer.entrarReducer.usuario,
    pedidosObject: estado.productosReducer.pedidos,
  };
};

export default connect(
  mapStateToProps,
  null,
)(MiCuenta);
