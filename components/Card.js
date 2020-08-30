import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import { getDecks } from '../utils/helpers';

class Card extends Component {
  buttonPressed = (e) => {
    Alert.alert('hi');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add a title to your new deck</Text>
        <View style={{ flexDirection: 'row' }}>
          <TextInput placeholder='Deck Title' style={styles.textInput} />
        </View>

        <View style={{ flexDirection: 'row', marginTop: 50 }}>
          <TouchableOpacity style={styles.button} onPress={this.buttonPressed}>
            <Text style={styles.text}>Create Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 150,
  },
  title: { fontSize: 25, marginBottom: 25, color: 'lightslategrey' },
  button: {
    alignItems: 'center',
    backgroundColor: 'deepskyblue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    flex: 0.45,
    height: 50,
  },
  textInput: {
    fontSize: 20,
    backgroundColor: 'white',
    flex: 0.9,
    height: 50,
    padding: 10,
    borderRadius: 5,
    borderColor: 'lightskyblue',
    borderWidth: 1,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 2,
  },
});
