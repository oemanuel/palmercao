import React, {useState} from 'react';
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
} from 'react-native';
import styles from './styles';
import Boton from '../../componentes/Boton';
import Menu from '../menu/Menu';

const MiCuenta = ({navigation}) => {
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
            placeholder="Ingrese la nueva contraseña"
          />
          <TextInput
            style={styles.input}
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
      <Menu
        navigation={navigation}
        visible={menuVisible}
        setMenuVisible={setMenuVisible}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        enabled
        style={{flex: 1, backgroundColor: 'white'}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
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
                <Text style={styles.texto}>Nombre persona</Text>
              </View>
              <View style={styles.forma}>
                <Text style={[styles.texto, styles.texto2]}>Mi correo</Text>
                <TextInput
                  style={styles.input}
                  defaultValue="Tugorditobeelo@gmail.com"
                  editable={false}
                />
                <CampoDeCambio />
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default MiCuenta;
