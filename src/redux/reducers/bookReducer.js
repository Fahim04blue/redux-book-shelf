import * as actions from "../actions/actionTypes";

const initialState = {
  readingList: [],
  discoverList: [],
  finishedList: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_BOOKS: {
      //return state+ action.payload
      const newState = {
        ...state,
        discoverList: action.payload,
      };
      return newState;
    }
    case actions.ADD_TO_READING_LIST: {
      //return state+ action.payload
      const isAdded = state.readingList.find(
        (book) => book.id === action.payload.id
      );
      const newState = {
        ...state,
        readingList: [...state.readingList, action.payload],
      };
      return isAdded ? state : newState;
    }
    case actions.LOAD_FROM_READING_LIST: {
      const newState = {
        ...state,
        readingList: action.payload,
      };
      return newState;
    }
    case actions.ADD_TO_FINISHED_LIST: {
      const newState = {
        ...state,
        readingList: state.readingList.filter(
          (book) => book.id !== action.payload.id
        ),
        finishedList: [
          ...state.finishedList,
          state.readingList.find((book) => book.id === action.payload.id),
        ],
      };
      return newState;
    }

    case actions.REMOVE_FROM_READING_LIST: {
      //return state- action.payload

      const newState = {
        ...state,
        readingList: state.readingList.filter(
          (book) => book.id !== action.payload.id
        ),
      };
      return newState;
    }

    default: {
      //state
      return state;
    }
  }
};

export default bookReducer;
