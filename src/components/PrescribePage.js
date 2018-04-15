import React from 'react';
import PrescribePageLayout from './PrescribePageLayout';
import PrescribeComponent from './PrescribeComponent';
import image from '../images/prescribe.png';

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
      <div className="PrescribePage">
        <PrescribePageLayout onLogout={onLogout}>
          <img alt="prescribe" src={image} style={{ width: '100%' }} />
          <div
            className="Prescribe"
            style={{
              backgroundColor: 'white',
              margin: '-0.5% auto'
            }}>
            <PrescribeComponent
              items={RxItems}
              patients={patients}
              onSubmit={onSubmit}
              rxInfo={rxInfo}
            />
          </div>
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
