import React, { Component } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  onSubmit() {
    console.log({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Formulario de login</Text>
       
       <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="email"
          onChangeText={(text) => this.setState({ email: text })}
          value={this.state.email}
        />

        <TextInput
          style={styles.input}
          keyboardType="default"
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({ password: text })}
          value={this.state.password}
        />

        <Pressable style={styles.button} onPress={() => this.onSubmit()}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        <View>
          <Text>Email: {this.state.email}</Text>
          <Text>Password: {this.state.password}</Text>
        </View>

        <Pressable onPress={() => this.props.navigation.navigate('Register')}>
          <Text>Ir al registro</Text>
        </Pressable>

        <Pressable onPress={() => this.props.navigation.navigate('HomeMenu')}>
          <Text>Entrar en la app</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10, marginTop: 20 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 6,
    paddingHorizontal: 10, paddingVertical: 6, marginVertical: 8,
  },
  button: {
    backgroundColor: '#28a745',
    paddingHorizontal: 10, paddingVertical: 6,
    borderRadius: 4, borderWidth: 1, borderColor: '#28a745',
    alignItems: 'center', marginTop: 4,
  },
  buttonText: { color: '#fff' },
});

