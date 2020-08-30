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

class Settings extends Component {
  buttonPressed = (e) => {
    Alert.alert('hi');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Do you wish to reset your data?</Text>

        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <TouchableOpacity style={styles.button} onPress={this.buttonPressed}>
            <Text style={styles.text}>Reset data</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: 25, marginBottom: 25, color: 'lightslategrey' },
  button: {
    alignItems: 'center',
    backgroundColor: 'crimson',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    flex: 0.45,
    height: 50,
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 2,
  },
});
