import React from 'react';

import PatientsComponent from './PatientsComponent';
import PatientsPageLayout from './PatientsPageLayout';
import image from '../images/patients1.jpg';

export default function PatientsPage({
  patients,
  onLogout,
  onAddPt,
  onRemovePatient,
  onEditPt
}) {
  let storedToken = localStorage.getItem('token');

  if (patients && Array.isArray(patients) && storedToken) {
    return (
      <div className="PatientsPage">
        <PatientsPageLayout onLogout={onLogout} onAddPt={onAddPt}>
          <img alt="patients" src={image} style={{ width: '100%' }} />
          <div
            className="Patients"
            style={{
              margin: '-0.5% auto'
            }}>
            <PatientsComponent
              patients={patients}
              onRemovePatient={onRemovePatient}
              onEditPt={onEditPt}
            />
          </div>
        </PatientsPageLayout>
      </div>
    );
  } else {
    return (
      <div>
        <h5>
          <p>
            &nbsp;&nbsp;&nbsp;You are not authorized to view this page or your
            credentials have expired.
          </p>
        </h5>
        <a
          href="#/login"
          className="waves-effect waves-light btn light-blue lighten-1"
          style={{
            marginLeft: '20px'
          }}>
          BACK TO LOGIN PAGE
        </a>
      </div>
    );
  }
}
