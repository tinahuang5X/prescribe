import React from 'react';
import { storiesOf } from '@storybook/react';
import RxComponent from './RxComponent';

//import './ItemComponent.story.css';

storiesOf('RxComponent', module).add('All Rx items passed in', () =>
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
        selected: true,
        generic: 'Atorvastatin',
        brand: 'Liptor',
        indications: 'lower cholesterol',
        dosage: '10 mg once daily',
        sideeffects: 'allergic reaction, red skin rash'
      },
      {
        id: 4,
        selected: false,
        generic: 'Atorvastatin',
        brand: 'Liptor',
        indications: 'lower cholesterol',
        dosage: '10 mg once daily',
        sideeffects: 'allergic reaction, red skin rash'
      }
    ]}
    selectedItemIds={[2, 4]}
    onAddItem={itemId => {
      console.log(itemId);
    }}
  />
);
