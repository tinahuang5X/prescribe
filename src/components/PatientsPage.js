import React from 'react';

import PatientsComponent from './PatientsComponent';
import PatientsPageLayout from './PatientsPageLayout';

export default function PatientsPage({
  patients,
  onLogout,
  onAddPt,
  onRemovePatient,
  onEditPt
}) {
  if (patients && Array.isArray(patients)) {
    return (
      <div className="PatientsPage">
        <PatientsPageLayout onLogout={onLogout} onAddPt={onAddPt}>
          <PatientsComponent
            patients={patients}
            onRemovePatient={onRemovePatient}
            onEditPt={onEditPt}
          />
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
