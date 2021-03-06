import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import { addDeck } from '../actions';
import { connect } from 'react-redux';
import { saveDeckTitleAsyncStorage } from '../utils/api';

class AddDeck extends Component {
  state = {
    title: '',
  };

  onChangeTitle = (event) => {
    const { text } = event.nativeEvent;
    this.setState({ title: text });
  };

  buttonPressedAddDeck = () => {
    const foundTitle = Object.keys(this.props.decks).find(
      (item) => item === this.state.title.trim()
    );

    if (this.state.title.trim().length > 0) {
      if (foundTitle === undefined) {
        this.props.addDeck(this.state.title);
        saveDeckTitleAsyncStorage(this.state.title);
        Alert.alert(`${this.state.title} - Deck created successfully!`);
        this.props.navigation.navigate('DeckDetail', {
          itemId: this.state.title,
        });
      } else {
        Alert.alert('This Deck Exist. Try Another Title.');
      }

      this.setState({ title: '' });
    }
  };

  render() {
    const buttonColor =
      this.state.title.trim().length === 0 ? 'lightgray' : 'deepskyblue';
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add a title to your new deck</Text>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            value={this.state.title}
            onChange={this.onChangeTitle}
            placeholder='Deck Title'
            style={styles.textInput}
          />
        </View>

        <View style={{ flexDirection: 'row', marginTop: 50 }}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: buttonColor }]}
            onPress={this.buttonPressedAddDeck}
            disabled={this.state.title === ''}
          >
            <Text style={styles.text}>Create Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  // Need to check if title already exist or not
  return {
    decks: state,
  };
};

export default connect(mapStateToProps, { addDeck })(AddDeck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 150,
  },
  title: { fontSize: 25, marginBottom: 25, color: 'lightslategrey' },
  button: {
    alignItems: 'center',
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
