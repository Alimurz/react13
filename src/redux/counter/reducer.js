import { INCREMENT_COUNTER, DECREMENT_COUNTER, CLEAR_COUNTER } from "./types";


const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CLEAR_COUNTER:
      return{
      ...state,
      counter: state.counter - state.counter
      }
    default:
      return state;
  }
};
