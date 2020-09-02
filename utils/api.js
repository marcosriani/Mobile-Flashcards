import React from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// To manage the AsyncStorage database

// Return all of the decks
export const getDecks = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    Alert.alert('Error while fetching decks data');
  }
};

// Return specif deck
export const getDeck = async (id) => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    Alert.alert('Error while fetching deck data');
  }
};

// Take a single title argument and add it to the decks
export const saveDeckTitle = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_Key', value);
  } catch (e) {
    Alert.alert('Error while saving new Deck');
  }
};

// Take in two arguments, title and card,
// and will add the card to the list of questions for the deck with the associated title
export const addCardToDeck = async (title, card) => {
  try {
    const jsonValue = JSON.stringify(title, card);
    await AsyncStorage.setItem('@storage_Key', jsonValue);
  } catch (e) {
    Alert.alert('Error while saving card');
  }
};
