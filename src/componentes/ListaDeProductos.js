import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ScrollView, BackHandler} from 'react-native';
import {connect} from 'react-redux';
import ContenedorProducto from './ContenedorProducto';
import ContenedorCategoria from './ContenedorCategoria';
import BarraBusqueda from './BarraBusqueda';
import Informacion from './InformacionCatalogo';
import styles2 from '../pantallas/infoCategoria/styles';
import styles from '../pantallas/catalogo/styles';

const ListaDeProductos = props => {
  const {
    productosObject,
    navigation,
    nombreCategoria,
    iscatalogo,
    textoBusqueda,
    color,
  } = props;
  const [lista, setLista] = useState([]);
  const [isBusqueda, setIsBusqueda] = useState(false);
  //---------------------------------------------------------------------

  //----------------------------Filtros----------------------------------

  const categoriaFiltro = producto => {
    return producto.categoria == nombreCategoria.toLowerCase();
  };

  const popularFiltro = producto => {
    return producto.popular == 'si';
  };
  const nombreFiltro = producto => {
    return producto.nombre.toLowerCase().includes(textoBusqueda.toLowerCase());
  };

  //----------------------------------------------------------------

  useEffect(() => {
    if (productosObject.productos !== null) {
      if (textoBusqueda.length !== 0) {
        if (iscatalogo) {
          setLista(productosObject.productos.filter(nombreFiltro));
        } else {
          setLista(
            productosObject.productos
              .filter(categoriaFiltro)
              .filter(nombreFiltro),
          );
        }
        setIsBusqueda(true);
      } else {
        if (iscatalogo) {
          setLista(productosObject.productos.filter(popularFiltro));
        } else {
          setLista(productosObject.productos.filter(categoriaFiltro));
        }
        setIsBusqueda(false);
      }
    } else {
      setLista([]);
    }
  }, [textoBusqueda, productosObject]);
  //----------------------------------------------------------------
  const ListaHeader = () => {
    if (iscatalogo) {
      return (
        <>
          <Informacion>
            <BarraBusqueda color="#FF694E" />
          </Informacion>
          {isBusqueda ? (
            <>
              <View style={styles.textoc}>
                <Text style={styles.texto}>Resultados</Text>
              </View>
            </>
          ) : (
            <>
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
                    nombre="Salud & Belleza"
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
          )}
        </>
      );
    } else {
      return <></>;
    }
  };

  ///-------------------------------------------------------------------
  const Cargando = () => {
    if (lista.length == 0 && !isBusqueda) {
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
              <ContenedorProducto
                navigation={navigation}
                item={item.item}
                color={color}
              />
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
  console.log('soy el estado:', state);
  return {
    productosObject: state.productosReducer.productos,
    textoBusqueda: state.productosReducer.textoBusqueda,
  };
};

export default connect(
  mapStateToProps,
  null,
)(ListaDeProductos);
