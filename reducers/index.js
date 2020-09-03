import {
  RECEIVE_DECKS,
  ADD_DECK,
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
    case ADD_DECK:
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

      console.log(restOfState);

      return {
        ...restOfState,
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
