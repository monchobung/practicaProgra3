import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default class Contador extends Component {
  state = {
    valor: 0,
  };

  contar() {
    this.setState({ valor: this.state.valor + 1 });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Cantidad de clicks: {this.state.valor}</Text>
        <Pressable style={styles.boton} onPress={() => this.contar()}>
          <Text style={styles.textoBoton}>Click aquí para contar</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  boton: {
    padding: 7,
    backgroundColor: 'rgba(0, 255, 0, 0.5)',
    marginBottom: 10,
    borderRadius: 4,
  },
  textoBoton: {
    fontWeight: 'bold',
  },
});
