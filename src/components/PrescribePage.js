import React from 'react';
import PrescribePageLayout from './PrescribePageLayout';
import PrescribeComponent from './PrescribeComponent';

export default function PrescribePage({
  //id,
  onLogout,
  RxItems
}) {
  return (
    //<div id={id} className="OrderPage">
    <div className="PrescribePage">
      <PrescribePageLayout onLogout={onLogout}>
        <div
          className="CreateRxPage"
          style={{
            height: '50%',
            width: '30%',
            margin: '60px auto',
            borderStyle: 'solid',
            backgroundColor: 'white'
            //backgroundImage: 'url(' + { Background } + ')'
          }}>
          <PrescribeComponent items={RxItems} />
        </div>
      </PrescribePageLayout>
    </div>
  );
}
