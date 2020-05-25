import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Bn2 = () => {
  return (
    <View style={styles.contain}>
      <View style={styles.figuras}>
        <Image
          style={styles.icon}
          source={require('../assets/Img/cubos.png')}
        />
      </View>
      <View style={styles.texto1}>
        <Text
          style={[
            styles.texto,
            {
              fontSize: hp('5'),
            },
          ]}>
          Categorias
        </Text>
      </View>
      <View>
        <Text
          style={[
            styles.texto,
            {
              fontSize: hp('3'),
            },
          ]}>
          ¡Busca por medio de categorías!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  figuras: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    resizeMode: 'contain',
  },
  texto: {
    color: 'white',
    textAlign: 'center',
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
  },
  texto1: {
    flex: 0.15,
    justifyContent: 'flex-start',
  },
});

export default Bn2;
