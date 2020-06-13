import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import styles from "./styles";
import Menu from "../menu/Menu";
import Boton from "../../componentes/Boton";
import CantidadProducto from "../../componentes/CantidadProducto";
import { connect } from "react-redux";
import { añadir } from "../../redux/listaCompra/reducers/listaCompra";

const InfoProducto = ({ navigation, añadir, route, itemId }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const it = () => {
    route.params.item.cantidad = route.params.item.tipo == "unitario" ? 1 : 100
    return route.params.item;
  };

  return (
    <>
      <Menu
        navigation={navigation}
        visible={menuVisible}
        setMenuVisible={setMenuVisible}
      />
      <View style={styles.contain}>
        <View style={[styles.header, { backgroundColor: route.params.color }]}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.flecha}
                source={require("../../assets/Icon/flecha.png")}
              />
            </TouchableOpacity>
            <Text style={[styles.texto, { textAlignVertical: "center" }]}>
              {route.params.item.categoria}
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setMenuVisible(true)}
          >
            <Image
              style={styles.menu}
              source={require("../../assets/Icon/menu.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.info, { backgroundColor: route.params.color }]}>
          <View style={styles.children}>
            <View style={styles.cartac}>
              <View style={styles.carta}>
                <Image
                  style={styles.imagen}
                  source={{
                    uri: route.params.item.urlImagen,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.separador} />
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            flex: 0.25,
          }}
        >
          <Text style={[styles.texto, { color: route.params.color }]}>
            {route.params.item.nombre}
          </Text>
          <Text
            style={[
              styles.texto,
              {
                color: "#707070",
                fontSize: hp("2"),
                fontFamily: "OpenSans-Regular",
              },
            ]}
          >
            {route.params.item.descripcion}
          </Text>
          <Text style={[styles.texto, { color: "#030303" }]}>
            COP {route.params.item.precio}
          </Text>
        </View>
        <CantidadProducto navigation={navigation} item={it()} />
      </View>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  añadir: (producto) => dispatch(añadir(producto)),
});
const mapStateToProps = (estado) => ({
  itemId: estado.listaCompraReducer.itemId,
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoProducto);
