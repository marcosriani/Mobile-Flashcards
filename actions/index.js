import { getDecksAsyncStorage } from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';
export const ADD_CARD = 'ADD_CARD';
export const RESET_STORE = 'RESET_STORE';

export const receiveDecks = (decks) => ({
  type: RECEIVE_DECKS,
  decks,
});

export const addDeck = (title) => ({
  type: ADD_DECK,
  title,
});

export const removeDeck = (id) => ({
  type: REMOVE_DECK,
  id,
});

export const addCardToDeck = (deckId, card) => ({
  type: ADD_CARD,
  deckId,
  card,
});

export const resetStore = () => ({
  type: RESET_STORE,
});

// Asynchronous action creator
// To handle the initial data
export const handleInitialData = () => async (dispatch) => {
  const response = await getDecksAsyncStorage();
  dispatch(receiveDecks(response));
};
