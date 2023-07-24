import { Box, CssBaseline, Typography } from '@mui/material';
import React from 'react';
import NavBar from './Components/NavBar';
import Canvas from './Components/Game/Canvas';
import Announce from './Components/Announce';
const App = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        height: '100vh',
        width: '100vw',
      }}
    >
      <CssBaseline />
      <NavBar />
      <Announce />
      <Box
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            color: 'white',
            display: {
              xs: 'block',
              lg: 'none',
            },
          }}
        >
          Please use a bigger screen
        </Typography>
        <Canvas />
      </Box>
    </Box>
  );
};

export default App;
