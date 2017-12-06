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
}
