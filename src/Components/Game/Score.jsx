import { Box, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTerritory } from '../../store/actions';
const Score = () => {
  const dispatch = useDispatch();
  const Game = useSelector((state) => state.Game);
  const Territory = useSelector((state) => state.Territory);
  const Player = useSelector((state) => state.Player);

  const { red, green } = Territory;

  useEffect(() => {
    function handleTerritory() {
      let green_ = [];
      let red_ = [];
      Game.forEach((ter) =>
        ter.rows.forEach((rw) => {
          if (rw.owned === true) {
            green_.push(rw);
          }
          if (rw.owned === false) {
            red_.push(rw);
          }
        })
      );

      dispatch(setTerritory({ green: green_, red: red_ }));
    }

    handleTerritory();
  }, [Game]);

  const Title = ({ Text, sx }) => {
    return <Box sx={{ ...sx }}>{Text}</Box>;
  };
  return (
    <Stack
      display={'flex'}
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-evenly'}
      sx={{
        height: '100px',
        padding: '0 16px',
      }}
    >
      <Title
        Text={`GREEN : ${
          green.length < 10 ? '0' + green.length : green.length
        }`}
        sx={{
          width: '200px',
          textAlign: 'center',
          fontWeight: 900,
          color: 'white',
          fontSize: 32,
          backgroundColor: Player ? 'Green' : '#333',
          borderRadius: 4,
        }}
      />
      <Title
        Text={'CONQUER BLITZ'}
        sx={{
          flexGrow: 1,
          textAlign: 'center',
          fontWeight: 900,
          color: 'white',
          fontSize: 32,
        }}
      />

      <Title
        Text={`RED : ${red.length < 10 ? '0' + red.length : red.length}`}
        sx={{
          width: '200px',
          textAlign: 'center',
          fontWeight: 900,
          color: 'white',
          fontSize: 32,
          backgroundColor: Player ? '#333' : 'red',
          borderRadius: 4,
        }}
      />
    </Stack>
  );
};

export default Score;
