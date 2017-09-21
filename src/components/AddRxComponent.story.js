import React from 'react';
import { storiesOf } from '@storybook/react';
import AddRxComponent from './AddRxComponent';

//console.log(AddRxComponent);
storiesOf('AddRxComponent', module).add('Add path', () => {
  return <AddRxComponent />;
});
