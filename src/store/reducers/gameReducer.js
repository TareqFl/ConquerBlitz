import { SET_GAME_BOARD } from '../actions/types';
import { board } from '../../Logic';

function handleNumb() {
  let numb = 1 + Math.floor(Math.random() * Math.floor(Math.random() * 10));
  if (numb <= 2) {
    return 'north';
  } else if (numb <= 5) {
    return 'east';
  } else if (numb <= 8) {
    return 'west';
  } else if (numb >= 9) {
    return 'south';
  }
}

const initial_value = board.filter((col) => {
  return col?.rows.filter((row) => {
    let direction = handleNumb();
    if (row.owned === null) {
      row.direction = direction;
      return row;
    }
  });
});

export default function game(state = initial_value, action) {
  const { type, payload } = action;

  if (type === SET_GAME_BOARD) {
    return (state = payload);
  }
  return state;
}
