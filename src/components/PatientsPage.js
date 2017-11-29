import React from 'react';

import PatientsComponent from './PatientsComponent';

export default function PatientsPage({
  patients,

  onRemovePatient
}) {
  return (
    <div className="OrderRxPage">
      <PatientsComponent
        patients={patients}
        onRemovePatient={onRemovePatient}
      />
    </div>
  );
}
