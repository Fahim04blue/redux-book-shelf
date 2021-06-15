import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import bookReducer from "./reducers/bookReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = applyMiddleware(thunk);

const combineReducer = combineReducers({
  books: bookReducer,
});

export const store = createStore(
  combineReducer,
  composeWithDevTools(middleware)
);
