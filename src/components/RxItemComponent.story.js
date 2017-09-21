import React from 'react';
import { storiesOf } from '@storybook/react';
import RxItemComponent from './RxItemComponent';
//import './MenuItemComponent.story.css';

storiesOf('RxItemComponent', module).add('Rx item passed in', () =>
  <RxItemComponent
    selected={true}
    item={{
      id: 1,

      generic: 'Atorvastatin',
      brand: 'Liptor',
      indications: 'lower cholesterol',
      dosage: '10 mg once daily',
      sideeffects: 'allergic reaction, red skin rash'
    }}
    onAddItem={itemId => {
      console.log(itemId);
    }}
  />
);
