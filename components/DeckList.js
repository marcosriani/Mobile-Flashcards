import React, { Component } from 'react';
import { StyleSheet, Alert, SafeAreaView, ScrollView } from 'react-native';
import Deck from './Deck';
import { getDecks } from '../utils/helpers';

class DeckList extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Deck
            deckTitle='React'
            numberOfCards={2}
            navigation={this.props.navigation}
            id='1'
          />
          <Deck
            deckTitle='JavaScript'
            numberOfCards={1}
            navigation={this.props.navigation}
            id='2'
          />
          <Deck
            deckTitle='Redux'
            numberOfCards={3}
            navigation={this.props.navigation}
            id='3'
          />
          <Deck
            deckTitle='Redux'
            numberOfCards={3}
            navigation={this.props.navigation}
            id='4'
          />
          <Deck
            deckTitle='Redux'
            numberOfCards={3}
            navigation={this.props.navigation}
            id='5'
          />
          <Deck
            deckTitle='React'
            numberOfCards={2}
            navigation={this.props.navigation}
            id='6'
          />
          <Deck
            deckTitle='JavaScript'
            numberOfCards={1}
            navigation={this.props.navigation}
            id='7'
          />
          <Deck
            deckTitle='Redux'
            numberOfCards={3}
            navigation={this.props.navigation}
            id='8'
          />
          <Deck
            deckTitle='Redux'
            numberOfCards={3}
            navigation={this.props.navigation}
            id='9'
          />
          <Deck
            deckTitle='Redux'
            numberOfCards={3}
            navigation={this.props.navigation}
            id='10'
          />
          <Deck
            deckTitle='React'
            numberOfCards={2}
            navigation={this.props.navigation}
            id='11'
          />
          <Deck
            deckTitle='JavaScript'
            numberOfCards={1}
            navigation={this.props.navigation}
            id='12'
          />
          <Deck
            deckTitle='Redux'
            numberOfCards={3}
            navigation={this.props.navigation}
            id='13'
          />
          <Deck
            deckTitle='Redux'
            numberOfCards={3}
            navigation={this.props.navigation}
            id='14'
          />
          <Deck
            deckTitle='Redux'
            numberOfCards={3}
            navigation={this.props.navigation}
            id='15'
          />
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
