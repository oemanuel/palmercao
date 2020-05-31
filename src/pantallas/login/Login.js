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
const Splash = ({ navigation }) => {
  return (
    <Fondo>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        enabled
        style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={styles.sociales}>
            </View>
            <View style={styles.separadores}>
              <View style={styles.c2} />
              <View style={styles.c5}>
                <Text style={styles.texto}>Bienvenido a Pa'lmercao</Text>
              </View>
              <View style={styles.c2} />
            </View>
            <View style={styles.credenciales}>
              <Credendiales type="login" navigation={navigation}/>
            </View>

            <View style={styles.recuperacion}>
              <Text onPress={() => navigation.navigate('Recuperar')} style={[styles.texto, { textDecorationLine: 'underline' }]}>
                ¿Se te olvidó la contraseña?
                </Text>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Fondo>
  );
};
export default Splash;
