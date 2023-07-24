import { ArrowForwardIos, Remove } from '@mui/icons-material';
import { Fab } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayer, setGameBoard } from '../../store/actions';
import { conquer } from '../../Logic';
const Bacteria = ({ row, column, backgroundColor, direction, owned }) => {
  const dispatch = useDispatch();

  const Player = useSelector((state) => state.Player);
  const Game = useSelector((state) => state.Game);

  const [degree, setDegree] = useState(0);

  useEffect(() => {
    switch (direction) {
      case 'east':
        return setDegree(0);

      case 'south':
        return setDegree(90);
      case 'west':
        return setDegree(180);
      case 'north':
        return setDegree(270);
      default:
        return;
    }
  }, []);

  useEffect(() => {
    conquer({
      Game,
      column,
      row,
      direction,
      owned,
      backgroundColor,
      func: (newBoard) =>
        setTimeout(() => dispatch(setGameBoard([...newBoard])), 100),
    });
  }, [direction, owned, backgroundColor]);

  // Handlers -----------------------------

  function handleClick() {
    if (
      Game[column].rows[row].owned === null ||
      Game[column].rows[row].owned !== Player
    ) {
      return;
    }

    function updateBacteria(newDirection) {
      let newBoard = Game;
      newBoard[column].rows[row] = {
        ...newBoard[column].rows[row],
        direction: newDirection,
      };

      dispatch(setGameBoard([...newBoard]));
      dispatch(setPlayer());
    }

    switch (direction) {
      case 'east':
        setDegree((prev) => prev + 90);
        return updateBacteria('south');

      case 'south':
        setDegree((prev) => prev + 90);
        return updateBacteria('west');
      case 'west':
        setDegree((prev) => prev + 90);
        return updateBacteria('north');
      case 'north':
        setDegree((prev) => prev + 90);
        return updateBacteria('east');
      default:
        return;
    }
  }

  return (
    <Fab
      size={`small`}
      sx={{
        // borderRadius: owned === null ? 8 : owned ? 8 : 2,
        borderRadius: owned === null ? 8 : 2,
        backgroundColor,
        border: `4px solid ${
          owned === null ? 'gray' : owned ? 'green' : 'red'
        }`,
        transform: `rotate(${degree}deg) scale(${
          owned === null ? '0.8' : '1'
        })`,
        ':active': {
          transform: `scale(0.8) rotate(${degree}deg)`,
        },
        position: 'relative',
        transition: '.35s',
      }}
      onClick={handleClick}
    >
      <ArrowForwardIos sx={{ fill: 'white' }} />
      {/* {column}/{row} */}
      <Remove
        sx={{
          fill: 'white',
          position: 'absolute',
          right: -26.5,
          width: '28px',
          height: '32px',
          zIndex: 0,
        }}
      />
    </Fab>
  );
};

export default Bacteria;
