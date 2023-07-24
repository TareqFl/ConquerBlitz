import { SET_TERRITORY } from '../actions/types';

const initial_value = {
  green: [{ row: 0, column: 0, direction: 'north', owned: true }],
  red: [{ row: 21, column: 10, direction: 'south', owned: false }],
};

export default function ter(state = initial_value, action) {
  const { type, payload } = action;
  if (type === SET_TERRITORY) {
    return (state = payload);
  }
  return state;
}
