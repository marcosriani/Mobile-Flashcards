import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';

class DeckDetail extends Component {
  buttonPressedAddCard = (e) => {
    this.props.navigation.navigate('AddCard', {
      itemId: this.props.route.params.itemId,
    });
  };

  buttonPressedQuiz = (e) => {
    const { itemId, numberOfCards } = this.props.route.params;

    this.props.navigation.navigate('Quiz', {
      itemId: JSON.parse(JSON.stringify(itemId)),
      numberOfCards: this.props.decks[itemId].questions.length,
    });
  };

  buttonPressedDelete = (e) => {
    Alert.alert('Deleted');
  };

  render() {
    const { itemId } = this.props.route.params;
    const cardId = JSON.parse(JSON.stringify(itemId));

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{cardId}</Text>
        <Text style={styles.subTitle}>
          {this.props.decks[itemId].questions.length} cards
        </Text>

        <View style={{ flexDirection: 'row', marginTop: 30 }}>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: 'cornflowerblue', flex: 0.9, height: 90 },
            ]}
            onPress={this.buttonPressedAddCard}
          >
            <Text style={styles.text}>Add New Question</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 18 }}>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: 'darkcyan', flex: 0.9, height: 90 },
            ]}
            onPress={this.buttonPressedQuiz}
          >
            <Text style={styles.text}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 60 }}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'tomato' }]}
            onPress={this.buttonPressedDelete}
          >
            <Text style={styles.text}>Delete Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    decks: state,
  };
};

export default connect(mapStateToProps)(DeckDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
  },
  title: { fontSize: 25, marginBottom: 10, color: 'lightslategrey' },
  subTitle: { fontSize: 18, marginBottom: 25, color: 'lightslategrey' },
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
