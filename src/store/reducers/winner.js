import { SET_WINNER } from '../actions/types';

const init = '';

export default function winner(state = init, action) {
  const { type, payload } = action;
  if (type === SET_WINNER) {
    return (state = payload);
  }
  return state;
}
