import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

const Header = () => (
  <AppBar position="static">
    <Toolbar
      style={{ justifyContent: 'space-between' }}
    >
      <Typography
        variant="h5"
      >
        Pharma Inc
      </Typography>
      <IconButton
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Header;
