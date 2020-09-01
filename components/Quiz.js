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
  state = {
    showAnswer: false,
    buttonText: 'Show Answer',
  };

  buttonPressedCorrect = (e) => {
    this.props.navigation.navigate('Score', {
      itemId: this.props.id,
      otherParam: 'anything you want here',
    });
  };

  buttonPressedIncorrect = (e) => {
    Alert.alert('Incorrect');
  };

  buttonPressedAnswer = (e) => {
    this.setState((prevState) => ({
      showAnswer: !prevState.showAnswer,
      buttonText:
        prevState.buttonText === 'Show Answer'
          ? 'Show Question'
          : 'Show Answer',
    }));
  };

  render() {
    const buttonColor =
      this.state.buttonText === 'Show Answer' ? 'maroon' : 'silver';

    return (
      <View style={styles.container}>
        <Text style={styles.numberOfCards}>2/2</Text>

        <View style={{ alignItems: 'center' }}>
          {this.state.showAnswer ? (
            <View style={styles.card}>
              <Text style={styles.title}>Answer</Text>

              <Text>
                Don't get discouraged! Try building your project in an Expo
                Snack🍎. In order to submit the project, just download the zip
                file and submit that file
              </Text>
            </View>
          ) : (
            <View style={styles.card}>
              <Text style={styles.title}>Question</Text>

              <Text>Where do you Make Ajax requests in React?</Text>
            </View>
          )}

          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: 'lightgreen', flex: 0.9, height: 60 },
              ]}
              onPress={this.buttonPressedCorrect}
            >
              <Text style={styles.text}>Correct</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: 'lightsalmon', flex: 0.9, height: 60 },
              ]}
              onPress={this.buttonPressedIncorrect}
            >
              <Text style={styles.text}>Incorrect</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: buttonColor, flex: 0.9, height: 60 },
              ]}
              onPress={this.buttonPressedAnswer}
            >
              <Text style={styles.text}>{this.state.buttonText}</Text>
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
  card: {
    backgroundColor: 'white',
    padding: 40,
    height: 210,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'lightslategrey',
    marginTop: 10,
    marginBottom: 20,
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
