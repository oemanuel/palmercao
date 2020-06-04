import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import BarraBusqueda from '../../componentes/BarraBusqueda';
import Informacion from '../../componentes/InformacionCatalogo';
import ContenedorCategoria from '../../componentes/ContenedorCategoria';
import ContenedorProducto from '../../componentes/ContenedorProducto';
import Menu from '../menu/Menu';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
const Catalogo = ({navigation}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [lista, setLista] = useState([
    {key: '1'},
    {key: '2'},
    {key: '3'},
    {key: '4'},
    {key: '5'},
  ]);
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
          ListHeaderComponentStyle={{width: '100%'}}
          ListHeaderComponent={
            <>
              <Informacion>
                <BarraBusqueda color="#FF694E" />
              </Informacion>
              <View style={styles.textoc}>
                <Text style={styles.texto}>Categorias</Text>
              </View>
              <View style={styles.categoriac}>
                <ScrollView
                  alwaysBounceHorizontal
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  contentContainerStyle={{alignItems: 'center'}}>
                  <ContenedorCategoria
                    navigation={navigation}
                    nombre="Frutas&Vegetales"
                    color={'#00BA6A'}
                    icono={require('../../assets/IconoCategoria/Frutas&Verduras.png')}
                  />
                  <ContenedorCategoria
                    navigation={navigation}
                    nombre="Primarios"
                    color="#FFC043"
                    icono={require('../../assets/IconoCategoria/Frutas&Verduras.png')}
                  />
                  <ContenedorCategoria
                    navigation={navigation}
                    nombre="Carnes"
                    color="#FE7259"
                    icono={require('../../assets/IconoCategoria/Carnes.png')}
                  />
                  <ContenedorCategoria
                    navigation={navigation}
                    nombre="Lácteos"
                    color="#707070"
                    icono={require('../../assets/IconoCategoria/Lacteos.png')}
                  />
                  <ContenedorCategoria
                    navigation={navigation}
                    nombre="Bebidas"
                    color={'#BA64F2'}
                    icono={require('../../assets/IconoCategoria/Bebidas.png')}
                  />
                  <ContenedorCategoria
                    navigation={navigation}
                    nombre="Snacks"
                    color="#FFC043"
                    icono={require('../../assets/IconoCategoria/Frutas&Verduras.png')}
                  />
                  <ContenedorCategoria
                    navigation={navigation}
                    nombre="Aseo"
                    color="#29A2E8"
                    icono={require('../../assets/IconoCategoria/Aseo.png')}
                  />
                  <ContenedorCategoria
                    navigation={navigation}
                    nombre="Miscelanea"
                    color="#FF9750"
                    icono={require('../../assets/IconoCategoria/Miscelanea.png')}
                  />
                  <ContenedorCategoria
                    navigation={navigation}
                    nombre="Salud&Belleza"
                    color="#FF7D9F"
                    icono={require('../../assets/IconoCategoria/Salud&Belleza.png')}
                  />
                  <ContenedorCategoria
                    navigation={navigation}
                    nombre="Licoreria"
                    color="#FFC043"
                    icono={require('../../assets/IconoCategoria/Licores.png')}
                  />
                  <ContenedorCategoria
                    navigation={navigation}
                    nombre="Mascotas"
                    color="#29A2E8"
                    icono={require('../../assets/IconoCategoria/Frutas&Verduras.png')}
                  />
                  <ContenedorCategoria
                    navigation={navigation}
                    nombre="Otras"
                    color="#29A2E8"
                    icono={require('../../assets/IconoCategoria/Frutas&Verduras.png')}
                  />
                </ScrollView>
              </View>
              <View style={styles.textoc}>
                <Text style={styles.texto}>Populares</Text>
              </View>
            </>
          }
          data={lista}
          contentContainerStyle={{alignItems: 'center'}}
          renderItem={() => {
            return (
              <ContenedorProducto navigation={navigation} color="#FF694E" />
            );
          }}
        />
      </View>
    </>
  );
};
export default Catalogo;
