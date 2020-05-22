import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  ScrollView,
} from 'react-native';
import Fondo from '../../componentes/Fondo';
import styles from './styles';
import BotonGoogle from '../../componentes/BotonGoogle';
import BotonFace from '../../componentes/BotonFace';
import Credendiales from '../../componentes/Credenciales';
import Boton from '../../componentes/Boton';
const Splash = ({navigation}) => {
  return (
    <Fondo>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        enabled
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={styles.sociales}>
              <View style={styles.c1}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('Bienvenida')}>
                  <BotonGoogle titulo="Iniciar con Google" />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('Bienvenida')}>
                  <BotonFace titulo="Iniciar con Facebook" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.separadores}>
              <View style={styles.c2} />
              <View style={styles.c5}>
                <Text style={styles.texto}>O con tu correo electrónico</Text>
              </View>
              <View style={styles.c2} />
            </View>
            <View style={styles.credenciales}>
              <Credendiales />
            </View>
            <View style={styles.enviar}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('Bienvenida')}>
                <Boton titulo="Enviar" />
              </TouchableOpacity>
            </View>
            <View style={styles.recuperacion}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('Recuperar')}>
                <Text style={[styles.texto, {textDecorationLine: 'underline'}]}>
                  ¿Se te olvidó la contraseña?
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Fondo>
  );
};
export default Splash;
