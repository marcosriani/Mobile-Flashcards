import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';
import { connect } from 'react-redux';

class Quiz extends Component {
  state = {
    showAnswer: false,
    buttonText: 'Show Answer',
    questionIndex: 0,
    correct: 0,
    incorrect: 0,
  };

  buttonActions = () => {
    // If the deck has question and the correct/incorrect button is pressed
    // Also check if the deck if finished with all it's questions, then redirect to Score component
    if (this.props.decks[this.props.itemId].questions.length > 0) {
      if (this.state.questionIndex + 1 > this.props.numberOfCards) {
        this.props.navigation.navigate('Score', {
          itemId: this.props.itemId,
          correct: this.state.correct,
          numberOfCards: this.props.numberOfCards,
        });

        // Notification
        clearLocalNotification().then(setLocalNotification);

        this.setState(() => ({
          questionIndex: 0,
        }));
      }
    }
  };

  buttonPressedCorrect = () => {
    // Changing questions and answer in card
    this.setState(
      (prevState) => ({
        showAnswer: false,
        buttonText: 'Show Answer',
        questionIndex: prevState.questionIndex + 1,
        correct: prevState.correct + 1,
      }),
      () => {
        this.buttonActions();
      }
    );
  };

  buttonPressedIncorrect = () => {
    // Changing questions and answer in card
    this.setState(
      (prevState) => ({
        showAnswer: false,
        buttonText: 'Show Answer',
        questionIndex: prevState.questionIndex + 1,
        incorrect: prevState.incorrect + 1,
      }),
      () => {
        this.buttonActions();
      }
    );
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
    // Button color
    const buttonShowAnswerColor =
      this.state.buttonText === 'Show Answer' ? 'maroon' : 'silver';
    const buttonCorrectColor =
      this.state.buttonText === 'Show Answer' ? 'silver' : 'lightgreen';
    const buttonIncorrectColor =
      this.state.buttonText === 'Show Answer' ? 'silver' : 'lightsalmon';

    // Card ID
    const { decks, itemId } = this.props;

    return (
      <View style={styles.container}>
        {decks[itemId].questions.length !== 0 ? (
          <View>
            <Text style={styles.numberOfCards}>
              {this.props.itemId} - {this.state.questionIndex + 1}/
              {this.props.numberOfCards}
            </Text>

            <View style={{ alignItems: 'center' }}>
              {this.state.showAnswer ? (
                <View style={styles.card}>
                  <Text style={styles.title}>Answer</Text>
                  <Text>
                    {decks[itemId].questions[this.state.questionIndex] !==
                      undefined &&
                      decks[itemId].questions[this.state.questionIndex].answer}
                  </Text>
                </View>
              ) : (
                <View style={styles.card}>
                  <Text style={styles.title}>Question</Text>

                  <Text>
                    {decks[itemId].questions[this.state.questionIndex] !==
                      undefined &&
                      decks[itemId].questions[this.state.questionIndex]
                        .question}
                  </Text>
                </View>
              )}
              <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {
                      backgroundColor: buttonShowAnswerColor,
                      flex: 0.9,
                      height: 60,
                    },
                  ]}
                  onPress={this.buttonPressedAnswer}
                >
                  <Text style={styles.text}>{this.state.buttonText}</Text>
                </TouchableOpacity>
              </View>

              {this.state.showAnswer && (
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ marginTop: 5, height: 60, width: 170 }}>
                    <TouchableOpacity
                      style={[
                        styles.button,
                        {
                          backgroundColor: buttonCorrectColor,
                          flex: 0.9,
                          height: 60,
                        },
                      ]}
                      onPress={this.buttonPressedCorrect}
                    >
                      <Text style={styles.text}>Correct</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ marginTop: 5, height: 60, width: 170 }}>
                    <TouchableOpacity
                      style={[
                        styles.button,
                        {
                          backgroundColor: buttonIncorrectColor,
                          flex: 0.9,
                          height: 60,
                        },
                      ]}
                      onPress={this.buttonPressedIncorrect}
                    >
                      <Text style={styles.text}>Incorrect</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          </View>
        ) : (
          <View style={styles.noCardsAlert}>
            <Text style={{ fontSize: 25, color: 'lightslategrey' }}>
              Sorry, you cannot take a quiz because there are no cards in the
              deck.
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { itemId, numberOfCards } = ownProps.route.params;

  return {
    itemId: JSON.parse(JSON.stringify(itemId)),
    numberOfCards: JSON.parse(JSON.stringify(numberOfCards)),
    decks: state,
  };
};

export default connect(mapStateToProps)(Quiz);

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
    height: 220,
    minWidth: 370,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noCardsAlert: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 30,
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
