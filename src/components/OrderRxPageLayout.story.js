import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderRxPageLayout from './OrderRxPageLayout';
import RxComponent from './RxComponent';

import OrderRxFormComponent from './OrderRxFormComponent';
import RxPadComponent from './RxPadComponent';

storiesOf('OrderRxPageLayout', module).add('Layout path', () =>
  <OrderRxPageLayout>
    <RxComponent
      items={[
        {
          id: 1,

          generic: 'Atorvastatin',
          brand: 'Liptor',
          indications: 'lower cholesterol',
          dosage: '10 mg once daily',
          sideeffects: 'allergic reaction, red skin rash'
        },
        {
          id: 2,

          generic: 'Levothyroxine',
          brand: 'Synthroid',
          indications: 'treat hypothyroidism',
          dosage: '100 mcg once daily',
          sideeffects: 'hypersensitivity pneumonitis,'
        },
        {
          id: 3,

          generic: 'Atorvastatin',
          brand: 'Liptor',
          indications: 'lower cholesterol',
          dosage: '10 mg once daily',
          sideeffects: 'allergic reaction, red skin rash'
        },
        {
          id: 4,

          generic: 'Atorvastatin',
          brand: 'Liptor',
          indications: 'lower cholesterol',
          dosage: '10 mg once daily',
          sideeffects: 'allergic reaction, red skin rash'
        }
      ]}
    />
    <OrderRxFormComponent
      patientInfo={{
        name: 'Lisa',
        dob: '9/8/1980'
      }}
    />
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
        birthdate: '7/8/1980'
      }}
    />
  </OrderRxPageLayout>
);
