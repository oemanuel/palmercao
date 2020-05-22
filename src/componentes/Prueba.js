import React from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Fondo from './Fondo';

const Prueba = () => {
  return (
    <Fondo>
      <KeyboardAvoidingView style={styles.contain} behavior="padding">
        <Text style={{padding: 10, fontSize: 42}}>Texto 1</Text>
        <Text style={{padding: 10, fontSize: 42}}>Texto 2</Text>
        <Text style={{padding: 10, fontSize: 42}}>Texto 3</Text>
        <Text style={{padding: 10, fontSize: 42}}>Texto 4</Text>
        <TextInput style={styles.input} placeholder="Digite texto aquí..." />
        <TextInput style={styles.input} placeholder="Digite texto aquí..." />
      </KeyboardAvoidingView>
    </Fondo>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0.1,
    backgroundColor: 'yellow',
    position: 'relative',
  },
  body: {
    flex: 0.8,
    justifyContent: 'space-around',
  },
  footer: {
    flex: 0.1,
    backgroundColor: 'pink',
  },
  contain: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
  },
  input: {
    height: 100,
    backgroundColor: 'white',
    fontSize: 42,
  },
});

export default Prueba;
