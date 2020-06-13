import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Bn from './Bn';
const Bienvenida = ({navigation}) => {
  const [colorFondo, setColorFondo] = useState('#00B46B');
  const [f1, setF1] = useState(true);
  const [f2, setF2] = useState(false);
  const [f3, setF3] = useState(false);
  const [cambiof2, setCambioF2] = useState(false);
  const [cambiof3, setCambioF3] = useState(false);

  const cambioF1 = () => {
    setColorFondo('#00B46B');
    setF1(true);
    setF2(false);
    setF3(false);
  };
  const cambioF2 = cambio => {
    if (!cambio) {
      setColorFondo('#FACC43');
      setF1(false);
      setF2(true);
      setF3(false);
    }
  };
  const cambioF3 = cambio => {
    if (!cambio) {
      setColorFondo('#FF694E');
      setF1(false);
      setF2(false);
      setF3(true);
    }
  };

  useEffect(() => {
    if (!cambiof2) {
      setTimeout(
        () => {
          setCambioF2(true);
          cambioF2(cambiof2);
        },
        2500,
        this,
      );
    }
    if (!cambiof3) {
      setTimeout(
        () => {
          setCambioF3(true);
          cambioF3(cambiof3);
        },
        5000,
        this,
      );
    }
  });
  return (
    <>
      <View style={[styles.contain, {backgroundColor: colorFondo}]}>
        <View style={styles.info}>
          <Bn f1={f1} f2={f2} navigation={navigation} />
        </View>
        <View style={styles.footer}>
          <View style={styles.botones}>
            <View />
            <View style={styles.boton}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => cambioF1()}>
                <Text
                  style={[
                    styles.circulo,
                    {
                      color: f1 ? '#00B46B' : 'white',
                      backgroundColor: f1 ? 'white' : colorFondo,
                    },
                  ]}>
                  O
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boton}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => cambioF2()}>
                <Text
                  style={[
                    styles.circulo,

                    {
                      color: f2 ? '#FACC43' : 'white',
                      backgroundColor: f2 ? 'white' : colorFondo,
                    },
                  ]}>
                  O
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boton}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => cambioF3()}>
                <Text
                  style={[
                    styles.circulo,
                    {
                      color: f3 ? '#FF694E' : 'white',
                      backgroundColor: f3 ? 'white' : colorFondo,
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
};
export default Bienvenida;
