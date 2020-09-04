import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { resetStore } from '../actions';
import { resetDecksAsyncStorage } from '../utils/api';
import { connect } from 'react-redux';

class Settings extends Component {
  buttonPressed = () => {
    Alert.alert('Reset Data', 'Are you sure you want to reset your data?', [
      {
        text: 'Delete Data',
        onPress: () => {
          resetDecksAsyncStorage();
          this.props.resetStore();
          Alert.alert('Your data has been reset successfully!');
        },
      },
      {
        text: 'Cancel',
        onPress: () => this.props.navigation.navigate('Settings'),
      },
    ]);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Do you wish to reset your data?</Text>

        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <TouchableOpacity style={styles.button} onPress={this.buttonPressed}>
            <Text style={styles.text}>Reset Data</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(null, { resetStore })(Settings);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: 25, marginBottom: 25, color: 'lightslategrey' },
  button: {
    alignItems: 'center',
    backgroundColor: 'crimson',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    flex: 0.45,
    height: 50,
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 2,
  },
});
