import React, { useContext } from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { makeStyles } from '@material-ui/core/styles';
import { PatientsContext } from '../contexts/PatientsContext';

const useStyles = makeStyles(() => ({
  button: {
    marginTop: '10px',
  },
}));

const headCells = [
  { id: 'name', label: 'Name' },
  { id: 'gender', label: 'Gender' },
  { id: 'birth', label: 'Birth' },
  { id: 'actions', label: 'Actions' },
];

const PatientTableHead = () => (
  <TableHead>
    <TableRow>
      {headCells.map((headCell) => (
        <TableCell
          key={headCell.id}
        >
          {headCell.label}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

const PatientTableBody = () => {
  // eslint-disable-next-line no-unused-vars
  const [patientData, setPatientData] = useContext(PatientsContext);
  return (
    <TableBody>
      {patientData.map((patient) => (
        <TableRow key={patient.login.md5}>
          <TableCell>{patient.name.first}</TableCell>
          <TableCell>{patient.gender}</TableCell>
          <TableCell>{patient.dob.date}</TableCell>
          <TableCell>View</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

const PatientTable = () => {
  const classes = useStyles();

  return (
    <>
      <TableContainer>
        <Table>
          <PatientTableHead />
          <PatientTableBody />
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        startIcon={<AutorenewIcon />}
        className={classes.button}
      >
        More
      </Button>
    </>
  );
};

export default PatientTable;
