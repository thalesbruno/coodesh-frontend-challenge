/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { makeStyles } from '@material-ui/core/styles';
import { PatientsContext } from '../contexts/PatientsContext';
import PatientCard from './PatientCard';

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

const PatientTableBody = ({ patients }) => {
  const [open, setOpen] = React.useState(false);
  const [patientToShow, setPatientToShow] = useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {}, [patientToShow]);

  return (
    <>
      <TableBody>
        {patients.map((patient) => {
          const date = new Date(patient.dob.date);
          return (
            <TableRow key={patient.login.uuid}>
              <TableCell>{`${patient.name.first} ${patient.name.last}`}</TableCell>
              <TableCell>{patient.gender}</TableCell>
              <TableCell>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</TableCell>
              <TableCell>
                <IconButton
                  onClick={() => {
                    setPatientToShow(patient);
                    handleClickOpen();
                  }}
                  aria-label="Open"
                  color="primary"
                  size="small"
                >
                  <OpenInNewIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      {Object.keys(patientToShow).length > 0 && patientToShow.constructor === Object
        && <PatientCard handleClose={handleClose} open={open} patient={patientToShow} />}
    </>
  );
};

const PatientTable = () => {
  const classes = useStyles();

  const [patientData, setPatientData] = useContext(PatientsContext);
  const [limit, setLimit] = useState(10);

  const handleClick = (event) => {
    event.preventDefault();
    if (limit + 10 < patientData.length) {
      setLimit(limit + 10);
    } else {
      setLimit(patientData.length);
    }
  };

  return (
    <>
      <TableContainer>
        <Table>
          <PatientTableHead />
          <PatientTableBody patients={patientData.slice(0, limit)} />
        </Table>
      </TableContainer>
      <Button
        onClick={handleClick}
        variant="contained"
        startIcon={<AutorenewIcon />}
        className={classes.button}
        disabled={limit === patientData.length}
      >
        More
      </Button>
    </>
  );
};

PatientTableBody.propTypes = {
  patients: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PatientTable;
