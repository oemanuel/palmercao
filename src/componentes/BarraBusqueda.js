import React from 'react';
import {Text, StyleSheet, View, Image, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class BarraBusqueda extends React.Component {
  render() {
    const {titulo} = this.props;
    return (
      <View style={styles.contain}>
        <View style={styles.barra}>
          <Image
            style={styles.lupa}
            source={require('../assets/Icon/Lupa.png')}
          />
        </View>
        <TextInput style={styles.input} placeholder="Buscar producto" />
{/* 
        <View style={styles.filtroc}>
          <Image
            style={styles.filtro}
            source={require('../assets/Icon/filtro.png')}
          />
        </View> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  barra: {
    width: wp('7'),
    height: hp('7'),
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: wp('5'),
    borderBottomLeftRadius:wp('5'),
    alignItems: 'center',
    justifyContent:"center",
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 12,
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 16.0,

    elevation: 10,
  },
  contain: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"blue"
  },
  lupa: {
    
    resizeMode: 'contain',
    tintColor: '#FF694E',
    width: "80%",
    height: "80%",
    
    // backgroundColor:"yellow"

  },
  filtro: {
    resizeMode: 'contain',
    tintColor: '#FF694E',
    width: wp('4'),
    height: hp('4'),
    // backgroundColor:"green"

  },
  input: {
    width: "60%",
    height: "100%",
    color: '#FF694E',
    fontSize: hp('2.5'),
    borderTopRightRadius: wp('5'),
    borderBottomRightRadius:wp('5'),
    
    fontFamily:
      Platform.OS === 'ios' ? 'AsCalledByFontBook' : 'OpenSans-Regular',
      backgroundColor:"white",
      elevation: 10,
    
  },
  filtroc: {
    width: hp('7'),
    height: hp('7'),
    backgroundColor: 'white',
    borderRadius: wp('6'),
    marginLeft: wp('1'),
    justifyContent: 'center',
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 12,
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 16.0,
    // backgroundColor:"pink",

    elevation: 10,
  },
});
export default BarraBusqueda;
