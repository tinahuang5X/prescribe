import React from 'react';
import { storiesOf } from '@storybook/react';
import RxPadComponent from './RxPadComponent';

//let item;
storiesOf('RxPadComponent', module).add('Transmit path', () =>
  <RxPadComponent
    items={[
      {
        id: 1,
        imagePath: 'https://www.drugs.com/images/pills/nlm/200000131.jpg',
        generic: 'Atorvastatin',
        brand: 'Liptor',
        indications: 'lower cholesterol',
        dosage: '10 mg once daily',
        sideeffects: 'allergic reaction, red skin rash'
      }
    ]}
    patientInfo={{
      name: 'Lisa',
      dob: '7/8/1980'
    }}
  />
);
