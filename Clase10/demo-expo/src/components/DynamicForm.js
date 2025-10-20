import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default class DynamicForm extends Component {
  state = {
    comment: '',
  };

  onSubmit() {
    console.log( { comment: this.state.comment });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Escribí tu comentario</Text>

        
        <TextInput
          style={styles.field}
          placeholder="comentario"
          onChangeText={(text) => this.setState({ comment: text })}
          value={this.state.comment}
        />

        
        <Pressable style={styles.button} onPress={() => this.onSubmit()}>
          <Text style={styles.buttonText}>Enviar</Text>
        </Pressable>

      
        <View>
          <Text>Comentario: {this.state.comment}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10, marginTop: 20 },
  field: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 6,
    paddingHorizontal: 10, paddingVertical: 6, marginVertical: 8,
    height: 20,
  },
  button: {
    backgroundColor: '#28a745',
    paddingHorizontal: 10, paddingVertical: 6,
    borderRadius: 4, borderWidth: 1, borderColor: '#28a745',
    alignItems: 'center',
  },
  buttonText: { color: '#fff' },
});
