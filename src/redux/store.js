import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { loadState, saveState } from './localStorage';
import courseReducer from "./reducers/courseReducer"

const persistedState = loadState();
const rootReducer = combineReducers({
    courses: courseReducer,
});

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;





