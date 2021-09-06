import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  searchInput: {
    width: '100%',
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  return (
    <>
      <TextField
        className={classes.searchInput}
        variant="outlined"
        type="search"
        label="Search"
      />
    </>
  );
};

export default SearchBar;
