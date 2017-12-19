import React from 'react';
import PrescribePageLayout from './PrescribePageLayout';
import PrescribeComponent from './PrescribeComponent';
//import PaperComponent from './PaperComponent';

export default function PrescribePage({
  //id,
  onLogout,
  RxItems,
  patients,
  onSubmit,
  rxInfo
}) {
  let storedToken = localStorage.getItem('token');

  if (
    patients &&
    Array.isArray(patients) &&
    RxItems &&
    Array.isArray(RxItems) &&
    storedToken
  ) {
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
              rxInfo={rxInfo}
            />
          </div>
          {/* <PaperComponent /> */}
        </PrescribePageLayout>
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
