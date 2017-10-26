import React from 'react';

import EditRxComponent from './EditRxComponent';

export default function UpdateRxPage({
  //id,
  RxItem,
  onEditRx
}) {
  //console.log('foo', props);
  return (
    //<div id={id} className="OrderPage">
    <div
      className="UpdateRxPage"
      style={{
        height: '60%',
        width: '60%',
        margin: '60px auto',
        borderStyle: 'solid',
        backgroundColor: 'MISTYROSE'
      }}>
      {console.log(RxItem)}
      <EditRxComponent RxItem={RxItem} onEditRx={onEditRx} />
    </div>
  );
}
