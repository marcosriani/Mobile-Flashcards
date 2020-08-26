import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getDecks } from '../utils/helpers';

class DeckList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>List of decks goes in here</Text>
      </View>
    );
  }
}

export default DeckList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
