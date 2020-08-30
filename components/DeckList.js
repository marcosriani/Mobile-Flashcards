import React, { Component } from 'react';
import { StyleSheet, Alert, SafeAreaView, ScrollView } from 'react-native';
import Deck from './Deck';
import { getDecks } from '../utils/helpers';

class DeckList extends Component {
  buttonPressed = (e) => {
    Alert.alert('hi');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Deck deckTitle='React' numberOfCards={2} />
          <Deck deckTitle='JavaScript' numberOfCards={1} />
          <Deck deckTitle='Redux' numberOfCards={3} />
          <Deck deckTitle='Redux' numberOfCards={3} />
          <Deck deckTitle='Redux' numberOfCards={3} />
          <Deck deckTitle='React' numberOfCards={2} />
          <Deck deckTitle='JavaScript' numberOfCards={1} />
          <Deck deckTitle='Redux' numberOfCards={3} />
          <Deck deckTitle='Redux' numberOfCards={3} />
          <Deck deckTitle='Redux' numberOfCards={3} />
          <Deck deckTitle='React' numberOfCards={2} />
          <Deck deckTitle='JavaScript' numberOfCards={1} />
          <Deck deckTitle='Redux' numberOfCards={3} />
          <Deck deckTitle='Redux' numberOfCards={3} />
          <Deck deckTitle='Redux' numberOfCards={3} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default DeckList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
