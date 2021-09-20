import React, { useContext, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import SearchBar from '../components/SearchBar';
import PatientTable from '../components/PatientTable';
import { PatientsContext } from '../contexts/PatientsContext';

const PatientList = () => {
  const [patientData] = useContext(PatientsContext);
  const [patientList, setPatientList] = useState([]);

  useEffect(() => {
    setPatientList([...patientData]);
  }, [patientData]);

  return (
    <Grid
      container
      spacing={3}
    >
      <Grid item xs={12}>
        <SearchBar setPatientList={setPatientList} />
      </Grid>
      <Grid
        item
        xs={12}
        container
        direction="column"
        alignItems="center"
      >
        <PatientTable patientList={patientList} />
      </Grid>
    </Grid>
  );
};

export default PatientList;
