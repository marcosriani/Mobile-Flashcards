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
import { addCardToDeck } from '../actions';
import { connect } from 'react-redux';

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  };

  onChangeQuestion = (event) => {
    const { text } = event.nativeEvent;
    this.setState({ question: text });
  };

  onChangeAnswer = (event) => {
    const { text } = event.nativeEvent;
    this.setState({ answer: text });
  };

  buttonPressed = () => {
    const { itemId } = this.props.route.params;

    const card = {
      question: this.state.question,
      answer: this.state.answer,
    };

    this.props.addCardToDeck(itemId, card);

    this.props.navigation.navigate('Decks');
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
          <TextInput
            value={this.state.question}
            onChange={this.onChangeQuestion}
            placeholder='Question'
            style={styles.textInput}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            value={this.state.answer}
            onChange={this.onChangeAnswer}
            placeholder='Answer'
            style={styles.textInput}
          />
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

const mapStateToProps = (state) => {
  return {
    decks: state,
  };
};

export default connect(mapStateToProps, { addCardToDeck })(AddCard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
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
