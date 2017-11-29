import React from 'react';
import { Link } from 'react-router-dom';
import PatientComponent from './PatientComponent';
export default function PatientsComponent({
  patients,

  onRemovePatient
}) {
  // const { patients } = props;
  // const patients = props.patients;

  // console.log('this is the patients array', patients);
  if (patients && Array.isArray(patients)) {
    return (
      <div className="PatientsComponent">
        {patients.map(patient =>
          <PatientComponent
            key={patient.id}
            patient={patient}
            onRemovePatient={onRemovePatient}
          />
        )}
        <br />
        <Link
          to="/add-patient"
          style={{
            borderStyle: 'solid',
            backgroundColor: 'white',
            color: 'brown',
            marginLeft: '40%',
            fontSize: '30px',
            fontWeight: 'bold'
          }}>
          &nbsp;&nbsp;GO TO ADD PATIENT PAGE&nbsp;&nbsp;
        </Link>
      </div>
    );
  } else {
    return <div>...LOADING, PLEASE WAIT</div>;
  }
}
