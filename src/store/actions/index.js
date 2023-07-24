import { SET_GAME_BOARD, SET_PLAYER, SET_TERRITORY, SET_WINNER } from './types';

export const setGameBoard = (value) => {
  return {
    type: SET_GAME_BOARD,
    payload: value,
  };
};

export const setTerritory = (value) => {
  return {
    type: SET_TERRITORY,
    payload: value,
  };
};

export const setPlayer = () => {
  return {
    type: SET_PLAYER,
  };
};

export const winner = (value) => {
  return {
    type: SET_WINNER,
    payload: value,
  };
};
