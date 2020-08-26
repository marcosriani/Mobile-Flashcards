import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getDecks } from '../utils/helpers';

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings goes here</Text>
      </View>
    );
  }
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
