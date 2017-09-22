import React from 'react';
import { storiesOf } from '@storybook/react';
import EditRxComponent from './EditRxComponent';

//console.log(AddRxComponent);
storiesOf('EditRxComponent', module).add('Edit path', () => {
  return <EditRxComponent />;
});
