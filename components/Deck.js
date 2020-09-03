import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getDecks } from '../utils/helpers';

class Deck extends Component {
  buttonPressed = (e) => {
    this.props.navigation.navigate('DeckDetail', {
      itemId: this.props.id,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.buttonPressed}>
          <Text
            style={{
              color: 'lightslategrey',
              fontWeight: 'bold',
              fontSize: 20,
              paddingBottom: 2,
            }}
          >
            {this.props.deckTitle}
          </Text>
          <Text style={{ color: 'lightslategrey', fontSize: 15 }}>
            {this.props.numberOfCards} cards
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Deck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'aliceblue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    flex: 0.8,
    height: 100,
  },
});
