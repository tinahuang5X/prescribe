import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderRxFormComponent from './OrderRxFormComponent';

storiesOf('OrderRxFormComponent', module).add('Patient path', () =>
  <OrderRxFormComponent onSubmit={patientInfo => console.log(patientInfo)} />
);
