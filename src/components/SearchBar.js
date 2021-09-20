import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { PatientsContext } from '../contexts/PatientsContext';

const useStyles = makeStyles(() => ({
  searchInput: {
    width: '100%',
  },
}));

const SearchBar = ({ setPatientList }) => {
  const classes = useStyles();

  const [patientData] = useContext(PatientsContext);
  const [patientToFind, setPatientToFind] = useState('');

  const handleChange = (event) => setPatientToFind(event.target.value);

  useEffect(() => {
    const patientsFound = patientData.filter(
      (patient) => patient.name.first.toLowerCase().includes(patientToFind)
    || patient.name.last.toLowerCase().includes(patientToFind),
    );
    setPatientList(patientsFound);
  }, [patientToFind]);

  return (
    <TextField
      className={classes.searchInput}
      variant="outlined"
      type="search"
      label="Search patient"
      value={patientToFind}
      onChange={handleChange}
    />
  );
};

SearchBar.propTypes = {
  setPatientList: PropTypes.func.isRequired,
};

export default SearchBar;
