import React, { Component } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native';

export default class Register extends Component {
  state = {
    email: '',
    username: '',
    password: '',
  };

  onSubmit() {
    console.log( {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Formulario de registro</Text>

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
          placeholder="userName"
          onChangeText={(text) => this.setState({ username: text })}
          value={this.state.username}
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
          <Text style={styles.buttonText}>Registrate</Text>
        </Pressable>

        <View>
          <Text>Email: {this.state.email}</Text>
          <Text>UserName: {this.state.username}</Text>
          <Text>Password: {this.state.password}</Text>
        </View>
        <Pressable onPress={() => this.props.navigation.navigate('Login')}>
          <Text>Ir al Login</Text>
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
