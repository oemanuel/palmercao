import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Bienvenida extends React.Component {
  componentDidMount() {
    setTimeout(
      () => {
        this.setState({
          texto: '¿Estas listo?',
          colorFonco: '#FACC43',
          f1: false,
          f2: true,
          f3: false,
        });
      },
      2500,
      this,
    );
    setTimeout(
      () => {
        this.setState({
          texto: 'Comencemos...',
          colorFonco: '#FF694E',
          f1: false,
          f2: false,
          f3: true,
        });
      },
      5000,
      this,
    );
  }
  state = {
    texto: 'BIENVENIDO',
    colorFonco: '#00B46B',
    f1: true,
    f2: false,
    f3: false,
  };
  render() {
    return (
      <>
        <View
          style={[styles.contain, {backgroundColor: this.state.colorFonco}]}>
          <View style={styles.info}>
            <Text style={styles.texto}>{this.state.texto}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.botones}>
              <View />
              <View style={styles.boton}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() =>
                    this.setState({
                      texto: 'Bienvenido',
                      colorFonco: '#00B46B',
                      f1: true,
                      f2: false,
                      f3: false,
                    })
                  }>
                  <Text
                    style={[
                      styles.circulo,
                      {
                        color: this.state.f1 ? '#00B46B' : 'white',
                        backgroundColor: this.state.f1
                          ? 'white'
                          : this.state.colorFonco,
                      },
                    ]}>
                    O
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.boton}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() =>
                    this.setState({
                      texto: '¿Estas listo?',
                      colorFonco: '#FACC43',
                      f1: false,
                      f2: true,
                      f3: false,
                    })
                  }>
                  <Text
                    style={[
                      styles.circulo,
                      {
                        color: this.state.f2 ? '#FACC43' : 'white',
                        backgroundColor: this.state.f2
                          ? 'white'
                          : this.state.colorFonco,
                      },
                    ]}>
                    O
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.boton}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() =>
                    this.setState({
                      texto: 'Comencemos...',
                      colorFonco: '#FF694E',
                      f1: false,
                      f2: false,
                      f3: true,
                    })
                  }>
                  <Text
                    style={[
                      styles.circulo,
                      {
                        color: this.state.f3 ? '#FF694E' : 'white',
                        backgroundColor: this.state.f3
                          ? 'white'
                          : this.state.colorFonco,
                      },
                    ]}>
                    O
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  texto: {
    color: 'white',
    fontSize: hp('5'),
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Bold',
  },
  contain: {
    flex: 1,
  },
  info: {
    flex: 0.9,
    justifyContent: 'center',
  },
  boton: {
    flex: 0.3,
    //backgroundColor: 'black',
  },
  botones: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-around',
    //backgroundColor: 'red',
  },
  footer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  b1: {
    justifyContent: 'center',
  },
  circulo: {
    fontSize: wp('4'),
    fontWeight: 'bold',
    //color: '#FACC43',
    textAlign: 'center',
    borderRadius: wp('10'),
    //backgroundColor: 'white',
  },
});
export default Bienvenida;
