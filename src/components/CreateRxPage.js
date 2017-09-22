import React from 'react';
//import Background from '../images/gingham-style-background_1048-2586.jpg';
import AddRxComponent from './AddRxComponent';

export default function CreateRxPage({
  //id,

  onAddRx
}) {
  return (
    //<div id={id} className="OrderPage">

    <div
      className="CreateRxPage"
      style={{
        height: '60%',
        width: '60%',
        margin: '60px auto',
        borderStyle: 'solid',
        backgroundColor: 'MISTYROSE'
        //backgroundImage: 'url(' + { Background } + ')'
      }}>
      <AddRxComponent onAddRx={onAddRx} />
    </div>
  );
}
