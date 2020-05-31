import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import BarraBusqueda from '../../componentes/BarraBusqueda';
import Informacion from '../../componentes/InformacionCatalogo';
import ContenedorCategoria from '../../componentes/ContenedorCategoria';
import ContenedorProducto from '../../componentes/ContenedorProducto';
import Menu from '../menu/Menu';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
const Catalogo = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [lista, setLista] = useState([{key:"1"}, {key:"2"}, {key:"3"}, {key:"4"}, {key:"5"}]);
  return (
    <>
      <Menu
        navigation={navigation}
        visible={menuVisible}
        setMenuVisible={setMenuVisible}
      />
      <View style={styles.fondo}>
        <View style={styles.header}>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setMenuVisible(true)}>
            <Image
              style={styles.menu}
              source={require('../../assets/Icon/menu.png')}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          ListHeaderComponent={

            <>
              <Informacion />
              <View style={styles.textoc}>
                <Text style={styles.texto}>Categorias</Text>
              </View>
              <View style={styles.categoriac}>
                <ScrollView alwaysBounceHorizontal showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{ alignItems: "center" }}>
                  <ContenedorCategoria navigation={navigation} />
                  <ContenedorCategoria navigation={navigation} />
                  <ContenedorCategoria navigation={navigation} />
                  <ContenedorCategoria navigation={navigation} />
                </ScrollView>
              </View>
              <View style={styles.textoc}>
                <Text style={styles.texto}>Populares</Text>
              </View>
            </>}
          data={lista}
          contentContainerStyle={{alignItems:"center"}}
          renderItem={() => { return <ContenedorProducto/> }}

          
        />
      </View>
    </>
  );
};
export default Catalogo;
