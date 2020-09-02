import React, { Component } from 'react';
import { StyleSheet, Alert, SafeAreaView, ScrollView } from 'react-native';
import Deck from './Deck';
import { getDecks } from '../utils/helpers';
import { handleInitialData } from '../actions/';
import { connect } from 'react-redux';

class DeckList extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const { decks } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {Object.values(decks).map((item) => (
            <Deck
              key={item.title}
              deckTitle={item.title}
              numberOfCards={item.questions.length}
              navigation={this.props.navigation}
              id={item.title}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    decks: state,
  };
};

export default connect(mapStateToProps, { handleInitialData })(DeckList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
