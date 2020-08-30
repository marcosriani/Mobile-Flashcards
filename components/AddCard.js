import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getDecks } from '../utils/helpers';

class AddCard extends Component {
  buttonPressed = (e) => {
    Alert.alert('hi');
  };

  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled
      >
        <Text style={styles.title}>Add Question & Answer</Text>
        <View style={{ flexDirection: 'row', marginBottom: 12 }}>
          <TextInput placeholder='Question' style={styles.textInput} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TextInput placeholder='Answer' style={styles.textInput} />
        </View>

        <View style={{ flexDirection: 'row', marginTop: 50 }}>
          <TouchableOpacity style={styles.button} onPress={this.buttonPressed}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default AddCard;

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
