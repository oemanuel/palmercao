import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import Fondo from '../../componentes/Fondo';
import Logo from '../../componentes/Logo';
import styles from './styles';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(
      () => {
        this.props.navigation.navigate('Registro');
      },
      5000,
      this,
    );
  }

  render() {
    return (
      <Fondo>
        <TouchableOpacity style={{flex: 1}}>
          <View style={styles.contain}>
            <Logo />
            <View style={{flex: 0.1, flexDirection: 'row'}}>
              <View style={{flex: 0.9}}>
                <Text style={styles.app}>app</Text>
              </View>
              <View style={{flex: 0.1}} />
            </View>
            <View style={{flex: 0.2, justifyContent: 'center'}}>
              <ActivityIndicator size="large" color="#00B46B" />
            </View>
          </View>
        </TouchableOpacity>
      </Fondo>
    );
  }
}
