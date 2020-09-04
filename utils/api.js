import { decksInitialData } from '../utils/_DATA';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// Key used to identify the decks on the storage
const DECKS_STORAGE_KEY = 'DECKS_STORAGE';

// To manage the AsyncStorage database

// Return all of the decks
export const getDecksAsyncStorage = async () => {
  try {
    const decksData = await AsyncStorage.getItem(DECKS_STORAGE_KEY);

    return decksData !== null
      ? JSON.parse(decksData)
      : AsyncStorage.setItem(
          DECKS_STORAGE_KEY,
          JSON.stringify(decksInitialData)
        );
  } catch (e) {
    Alert.alert('Error while fetching decks data');
    console.log(e);
  }
};

// Return specific deck
export const getDeckAsyncStorage = async (id) => {
  try {
    const deckValue = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    return deckValue !== null ? JSON.parse(deckValue)[id] : null;
  } catch (e) {
    Alert.alert('Error while fetching deck data');
    console.log(e);
  }
};

// Take a single title argument and add it to the decks
export const saveDeckTitleAsyncStorage = async (title) => {
  try {
    await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          title,
          questions: [],
        },
      })
    );
  } catch (e) {
    Alert.alert('Error while saving new Deck');
    console.log(e);
  }
};

// Take in two arguments, title and card,
// and will add the card to the list of questions for the deck with the associated title
export const addCardToDeckAsyncStorage = async (title, card) => {
  try {
    const deck = await getDeckAsyncStorage(title);

    await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          questions: [...deck.questions].concat(card),
        },
      })
    );
  } catch (e) {
    Alert.alert('Error while saving card');
    console.log(e);
  }
};

// Remove specific deck
// export const removeDeckAsyncStorage = async (id) => {
//   const deck = await getDeckAsyncStorage(id);

//   try {
//     await AsyncStorage.removeItem(DECKS_STORAGE_KEY);
//   } catch (e) {
//     Alert.alert('Error while fetching deck data');
// console.log(e)

//   }
// };

export const resetDecksAsyncStorage = async () => {
  try {
    await AsyncStorage.setItem(
      DECKS_STORAGE_KEY,
      JSON.stringify(decksInitialData)
    );
  } catch (err) {
    Alert.alert('Error while resetting data');
    console.log(e);
  }
};
