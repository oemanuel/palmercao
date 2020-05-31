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
import styles from '../login/styles';
import Credendiales from '../../componentes/Credenciales';





const Splash = ({ navigation}) => {
  
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
                <Text style={styles.texto}>Registrate en Pa'lmercao</Text>
              </View>
              <View style={styles.c2} />
            </View>
            <View style={styles.credenciales}>
              <Credendiales type="crear" navigation={navigation}/>
            </View>
            <View style={styles.recuperacion}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('Login')}>
                <Text style={[styles.texto, { textDecorationLine: 'underline' }]}>
                  Inicia sesión
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
// const mapStateToProps = state => {

//   return {
//     email: state.registrar.email,
//     password: state.registrar.password,
//     error: state.auth.error,
//   }
// }
// const mapDispatchToProps = dispatch => {

//   return {
//     registrar: value => dispatch(fetch_register(value))
    
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Splash);
