import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import ContenedorProducto from './ContenedorProducto';
import ContenedorCategoria from './ContenedorCategoria';
import BarraBusqueda from './BarraBusqueda';
import Informacion from './InformacionCatalogo';
import styles2 from '../pantallas/infoCategoria/styles';
import styles from '../pantallas/catalogo/styles';

const ListaDeProductos = props => {
  const {productosObject, navigation, nombreCategoria, iscatalogo} = props;
  const [lista, setLista] = useState([]);

  //----------------------------Filtros----------------------------------

  const categoriaFiltro = producto => {
    return producto.categoria == nombreCategoria.toLowerCase();
  };

  const popularFiltro = producto => {
    return producto.popular == 'si';
  };

  //----------------------------------------------------------------
  useEffect(() => {
    if (productosObject.productos !== null) {
      if (iscatalogo) {
        setLista(productosObject.productos.filter(popularFiltro));
      } else {
        setLista(productosObject.productos.filter(categoriaFiltro));
      }
    } else {
      setLista([]);
    }
  }, [productosObject]);
  //----------------------------------------------------------------
  const ListaHeader = () => {
    if (iscatalogo) {
      return (
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
                nombre="Frutas & Verduras"
                color={'#00BA6A'}
                icono={require('../assets/IconoCategoria/Frutas&Verduras.png')}
              />
              <ContenedorCategoria
                navigation={navigation}
                nombre="Primarios"
                color="#FFC043"
                icono={require('../assets/IconoCategoria/Frutas&Verduras.png')}
              />
              <ContenedorCategoria
                navigation={navigation}
                nombre="Carnes"
                color="#FE7259"
                icono={require('../assets/IconoCategoria/Carnes.png')}
              />
              <ContenedorCategoria
                navigation={navigation}
                nombre="Lácteos"
                color="#707070"
                icono={require('../assets/IconoCategoria/Lacteos.png')}
              />
              <ContenedorCategoria
                navigation={navigation}
                nombre="Bebidas"
                color={'#BA64F2'}
                icono={require('../assets/IconoCategoria/Bebidas.png')}
              />
              <ContenedorCategoria
                navigation={navigation}
                nombre="Snacks"
                color="#FFC043"
                icono={require('../assets/IconoCategoria/Frutas&Verduras.png')}
              />
              <ContenedorCategoria
                navigation={navigation}
                nombre="Aseo"
                color="#29A2E8"
                icono={require('../assets/IconoCategoria/Aseo.png')}
              />
              <ContenedorCategoria
                navigation={navigation}
                nombre="Miscelanea"
                color="#FF9750"
                icono={require('../assets/IconoCategoria/Miscelanea.png')}
              />
              <ContenedorCategoria
                navigation={navigation}
                nombre="Salud&Belleza"
                color="#FF7D9F"
                icono={require('../assets/IconoCategoria/Salud&Belleza.png')}
              />
              <ContenedorCategoria
                navigation={navigation}
                nombre="Licoreria"
                color="#FFC043"
                icono={require('../assets/IconoCategoria/Licores.png')}
              />
              <ContenedorCategoria
                navigation={navigation}
                nombre="Mascotas"
                color="#29A2E8"
                icono={require('../assets/IconoCategoria/Frutas&Verduras.png')}
              />
              <ContenedorCategoria
                navigation={navigation}
                nombre="Otros"
                color="#29A2E8"
                icono={require('../assets/IconoCategoria/Frutas&Verduras.png')}
              />
            </ScrollView>
          </View>
          <View style={styles.textoc}>
            <Text style={styles.texto}>Populares</Text>
          </View>
        </>
      );
    } else {
      return <></>;
    }
  };

  ///-------------------------------------------------------------------
  const Cargando = () => {
    if (lista.length == 0) {
      return (
        <>
          <View style={{alignItems: 'center'}}>
            <Text
              style={[
                styles2.texto,
                {color: 'black', fontFamily: 'OpenSans-Regular'},
              ]}>
              No hay productos cargados...
            </Text>
          </View>
        </>
      );
    } else {
      return (
        <FlatList
          ListHeaderComponentStyle={{width: '100%'}}
          ListHeaderComponent={<ListaHeader />}
          data={lista}
          contentContainerStyle={{alignItems: 'center'}}
          keyExtractor={item => item.identificador}
          renderItem={item => {
            return (
              <ContenedorProducto navigation={navigation} item={item.item} />
            );
          }}
        />
      );
    }
  };
  //------------------------------------------------------------------

  return <Cargando />;
};

const mapStateToProps = state => {
  return {
    productosObject: state.productosReducer.productos,
  };
};

export default connect(mapStateToProps)(ListaDeProductos);
