import { Box, Stack } from '@mui/material';
import React from 'react';
import Bacteria from './Bacteria';
import Score from './Score';

import { useSelector } from 'react-redux';

const Canvas = () => {
  const Game = useSelector((state) => state.Game);

  return (
    <Box
      sx={{
        margin: '32px',
        border: '1px solid white',
        borderRadius: 8,
        padding: 2,
        display: {
          xs: 'none',
          lg: 'block',
        },
      }}
    >
      <Score />
      <Box
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {Game?.map((col, index) => {
          return (
            <Stack key={index} display="flex" direction={'column'} mt={2}>
              <Stack display={'flex'} direction={'row'} spacing={2}>
                {col.rows?.map((row, index_) => {
                  return (
                    <Bacteria
                      key={index_}
                      row={index_}
                      column={index}
                      backgroundColor={row.backgroundColor}
                      direction={row.direction}
                      owned={row.owned}
                    />
                  );
                })}
              </Stack>
            </Stack>
          );
        })}
      </Box>
    </Box>
  );
};

export default Canvas;
