import React from 'react';
import {View} from 'react-native';
import Bn1 from '../../componentes/Bn1';
import Bn2 from '../../componentes/Bn2';
import Bn3 from '../../componentes/Bn3';
import Boton from '../../componentes/Boton';

const Bn = props => {
  const {f1, f2} = props;
  const {navigation} = props;
  if (f1) {
    return <Bn1 />;
  } else if (f2) {
    return <Bn2 />;
  } else {
    return (
      <>
        <View style={{flex: 0.8}}>
          <Bn3 />
        </View>
        <View style={{flex: 0.2, alignItems: 'center'}}>
          <Boton
            titulo="Comenzar"
            onPress={() => navigation.navigate('Catalogo')}
          />
        </View>
      </>
    );
  }
};

export default Bn;
