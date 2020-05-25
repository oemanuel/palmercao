import React from 'react';
import {View, TouchableOpacity} from 'react-native';
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
          <TouchableOpacity activeOpacity={0.5}>
            <Boton titulo="Comenzar" />
          </TouchableOpacity>
        </View>
      </>
    );
  }
};

export default Bn;
