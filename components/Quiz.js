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

class Quiz extends Component {
  buttonPressedAddCard = (e) => {
    this.props.navigation.navigate('AddCard', {
      itemId: this.props.id,
      otherParam: 'anything you want here',
    });
  };

  buttonPressedQuiz = (e) => {
    this.props.navigation.navigate('Quiz', {
      itemId: this.props.id,
      otherParam: 'anything you want here',
    });
  };

  buttonPressedDelete = (e) => {
    Alert.alert('Deleted');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.numberOfCards}>2/2</Text>

        <View style={{ alignItems: 'center' }}>
          <View style={{ marginTop: 5, backgroundColor: 'white', padding: 55 }}>
            <Text style={styles.title}>Question</Text>

            <Text>Where do you Make Ajax requests in React?</Text>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: 'lightgreen', flex: 0.9, height: 75 },
              ]}
              onPress={this.buttonPressedQuiz}
            >
              <Text style={styles.text}>Correct</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: 'lightsalmon', flex: 0.9, height: 75 },
              ]}
              onPress={this.buttonPressedAddCard}
            >
              <Text style={styles.text}>Incorrect</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: 'lightgrey', flex: 0.4, height: 50 },
              ]}
              onPress={this.buttonPressedQuiz}
            >
              <Text style={styles.text}>Show Answer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Quiz;

const styles = StyleSheet.create({
  numberOfCards: {
    paddingLeft: 10,
    fontSize: 18,
    marginBottom: 6,
    color: 'lightslategrey',
  },
  container: {
    flex: 1,
    marginTop: 25,
  },
  title: {
    color: 'lightslategrey',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 2,
  },
});
