import React from 'react';

import AddRxComponent from './AddRxComponent';

export default function CreateRxPage({
  //id,

  onAddRx
}) {
  return (
    //<div id={id} className="OrderPage">
    <div className="CreateRxPage">
      <AddRxComponent onAddRx={onAddRx} />
    </div>
  );
}
