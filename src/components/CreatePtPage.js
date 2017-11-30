import React from 'react';
//import Background from '../images/gingham-style-background_1048-2586.jpg';
import AddPtComponent from './AddPtComponent';

export default function CreatePtPage({ onAddPt }) {
  return (
    <div
      className="CreatePtPage"
      style={{
        height: '60%',
        width: '60%',
        margin: '60px auto',
        borderStyle: 'solid',
        backgroundColor: 'MISTYROSE'
        //backgroundImage: 'url(' + { Background } + ')'
      }}>
      <AddPtComponent onAddPt={onAddPt} />
    </div>
  );
}
