import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const VistaImagen = props => {
  const {route, navigation} = props;
  return (
    <>
      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageWidth={wp('100')}
        imageHeight={hp('100')}>
        <Image
          style={{width: wp('100'), height: hp('100'), resizeMode: 'contain'}}
          source={
            route.params.imagen.includes('firebasestorage')
              ? require('../../assets/Img/CarretaFondoBlanco.png')
              : {uri: route.params.imagen}
          }
        />
      </ImageZoom>

      <View
        style={{
          borderColor: 'white',
          borderWidth: wp('1.5'),
          position: 'absolute',
          top: hp('2.5'),
          left: hp('2.5'),
          padding: wp('1'),
          borderRadius: wp('5'),
          elevation: 5,
        }}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.goBack()}>
          <Text
            style={{
              fontFamily: 'OpenSans-Bold',
              color: 'white',
              elevation: 5,
              fontSize: wp('6'),
            }}>
            X
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default VistaImagen;
