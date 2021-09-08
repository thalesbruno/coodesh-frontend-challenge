import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <AppBar position="static">
    <Toolbar
      style={{ justifyContent: 'space-between' }}
    >
      <Typography
        variant="h5"
      >
        <NavLink
          to="/"
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          Pharma Inc
        </NavLink>
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
