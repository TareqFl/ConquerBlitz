import { SET_PLAYER } from '../actions/types';

const inital_value = true;

export default function player(state = inital_value, action) {
  const { type } = action;
  if (type === SET_PLAYER) {
    return (state = !state);
  }
  return state;
}
