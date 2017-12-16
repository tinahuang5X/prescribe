import React from 'react';
import PrescribePageLayout from './PrescribePageLayout';
import PrescribeComponent from './PrescribeComponent';
//import PaperComponent from './PaperComponent';

export default function PrescribePage({
  //id,
  onLogout,
  RxItems,
  patients,
  onSubmit
}) {
  return (
    //<div id={id} className="OrderPage">
    <div className="PrescribePage">
      <PrescribePageLayout onLogout={onLogout}>
        <div
          className="Prescribe"
          style={{
            // height: '50%',
            width: '50%',
            margin: 'auto',
            marginTop: '20px',
            //borderStyle: 'solid',
            backgroundColor: 'white'
            //  backgroundImage: 'url(' + { Background } + ')'
          }}>
          <PrescribeComponent
            items={RxItems}
            patients={patients}
            onSubmit={onSubmit}
          />
        </div>
        {/* <PaperComponent /> */}
      </PrescribePageLayout>
    </div>
  );
}
