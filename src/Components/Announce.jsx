import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { winner } from '../store/actions';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 200,
  bgcolor: '#333',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

export default function BasicModal() {
  const dispatch = useDispatch();
  const Winner = useSelector((state) => state.Winner);

  const Territory = useSelector((state) => state.Territory);

  const { red, green } = Territory;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  React.useEffect(() => {
    function handleWinner() {
      if (red?.length === 0) {
        console.log('green wins');
        handleOpen();
        return dispatch(winner('Green'));
      }
      if (green?.length === 0) {
        console.log('red wins');

        handleOpen();
        return dispatch(winner('Red'));
      }
    }
    handleWinner();
  }, [Territory]);
  return (
    <div>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ color: red.length === 0 ? 'green' : 'red', fontWeight: 900 }}
          >
            {Winner} Wins!
          </Typography>
          <Button
            variant="outlined"
            color={Winner === 'Green' ? 'error' : 'success'}
            onClick={() => window.location.reload()}
          >
            Reset
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
