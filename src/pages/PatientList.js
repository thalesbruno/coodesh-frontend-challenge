import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchBar from '../components/SearchBar';
import PatientTable from '../components/PatientTable';
import { PatientsProvider } from '../contexts/PatientsContext';

const PatientList = () => (
  <PatientsProvider>
    <Grid
      container
      spacing={3}
    >
      <Grid item xs={12}>
        <SearchBar />
      </Grid>
      <Grid
        item
        xs={12}
        container
        direction="column"
        alignItems="center"
      >
        <PatientTable />
      </Grid>
    </Grid>
  </PatientsProvider>
);

export default PatientList;
