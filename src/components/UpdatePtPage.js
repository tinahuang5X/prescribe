import React from 'react';

import EditPtComponent from './EditPtComponent';

export default function UpdatePtPage({
  //id,
  patient,
  onEditPt
}) {
  //console.log('foo', props);
  return (
    //<div id={id} className="OrderPage">
    <div
      className="UpdatePtPage"
      style={{
        height: '60%',
        width: '60%',
        margin: '60px auto',
        borderStyle: 'solid',
        backgroundColor: 'MISTYROSE'
      }}>
      {console.log(patient)}
      <EditPtComponent patient={patient} onEditPt={onEditPt} />
    </div>
  );
}
