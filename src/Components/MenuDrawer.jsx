import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {
  ConnectWithoutContact,
  DarkMode,
  Menu,
  Settings,
} from '@mui/icons-material';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const List_ = ({ anchor }) => (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { name: 'Settings', icon: <Settings /> },
          { name: 'Theme', icon: <DarkMode /> },
          { name: 'Contact', icon: <ConnectWithoutContact /> },
        ].map(({ name, icon }, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box>
      {['left'].map((anchor) => (
        <Box key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {/* {anchor} */}
            <Menu sx={{ fill: 'white' }} />
          </Button>
          <Drawer
            anchor={'left'}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <List_ anchor={anchor} />
          </Drawer>
        </Box>
      ))}
    </Box>
  );
}
