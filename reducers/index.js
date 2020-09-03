import {
  RECEIVE_DECKS,
  ADD_DECKS,
  REMOVE_DECK,
  ADD_CARD,
  RESET_STORE,
} from '../actions/';

import { decksData } from '../utils/_DATA';

const decks = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECKS:
      const { title } = action;

      return {
        ...state,
        [title]: {
          title,
          questions: [],
        },
      };

    case REMOVE_DECK:
      const { id } = action;

      const { [id]: value, ...restOfState } = state;

      return {
        restOfState,
      };

    case ADD_CARD:
      const { deckId, card } = action;
      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          questions: [...state[deckId].questions].concat(card),
        },
      };

    case RESET_STORE:
      return decksData;

    default:
      return state;
  }
};

export default decks;