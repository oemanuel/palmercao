import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  ScrollView,
} from 'react-native';
import Fondo from '../../componentes/Fondo';
import styles from './styles';
import Credendiales from '../../componentes/Credenciales';
const Splash = ({navigation}) => {
  return (
    <Fondo>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        enabled
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={styles.sociales} />
            <View style={styles.separadores}>
              <View style={styles.c2} />
              <View style={styles.c5}>
                <Text style={styles.texto}>Bienvenido a Pa'lmercao</Text>
              </View>
              <View style={styles.c2} />
            </View>
            <View style={styles.credenciales}>
              <Credendiales type="login" navigation={navigation} />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Fondo>
  );
};
export default Splash;
