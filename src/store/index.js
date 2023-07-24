import { createStore, combineReducers } from 'redux';
import Game from './reducers/gameReducer';
import Territory from './reducers/territory';
import Player from './reducers/player';
import Winner from './reducers/winner';
const rootReducer = combineReducers({
  Game,
  Territory,
  Player,
  Winner,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
