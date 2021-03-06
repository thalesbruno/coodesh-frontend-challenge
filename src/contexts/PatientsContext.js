import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const PatientsContext = createContext();

export const PatientsProvider = ({ children }) => {
  const [patientData, setPatientData] = useState([]);

  useEffect(async () => {
    const res = await fetch('https://randomuser.me/api/?results=50&seed=coodesh');
    const data = await res.json();
    setPatientData([...patientData, ...data.results]);
  }, []);

  return (
    <PatientsContext.Provider value={[patientData, setPatientData]}>
      {children}
    </PatientsContext.Provider>
  );
};

PatientsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
