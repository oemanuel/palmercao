import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Bn from './Bn';
class Bienvenida extends React.Component {
  componentDidMount() {
    setTimeout(
      () => {
        this.setState({
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
            <Bn
              f1={this.state.f1}
              f2={this.state.f2}
              navigation={this.props.navigation}
            />
          </View>
          <View style={styles.footer}>
            <View style={styles.botones}>
              <View />
              <View style={styles.boton}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() =>
                    this.setState({
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

export default Bienvenida;
