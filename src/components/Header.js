import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Link from './Link';

const Header = () => (
  <AppBar position="static">
    <Toolbar
      style={{ justifyContent: 'space-between' }}
    >
      <Typography
        variant="h5"
      >
        <Link underline="none" color="inherit" to="/">Pharma Inc</Link>
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
