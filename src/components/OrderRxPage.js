import React from 'react';

import OrderRxPageLayout from './OrderRxPageLayout';
import RxComponent from './RxComponent';

import OrderRxFormComponent from './OrderRxFormComponent';
import RxPadComponent from './RxPadComponent';

export default function OrderRxPage({
  //id,
  RxItems,
  orderItems,
  patientInfo,
  onAddItem,
  onSubmit,
  onTransmit
}) {
  return (
    //<div id={id} className="OrderPage">
    <div className="OrderRxPage">
      <OrderRxPageLayout>
        <RxComponent items={RxItems} onAddItem={onAddItem} />
        <OrderRxFormComponent patientInfo={patientInfo} onSubmit={onSubmit} />
        {patientInfo
          ? <RxPadComponent
              items={orderItems}
              patientInfo={patientInfo}
              onTransmit={onTransmit}
            />
          : null}
      </OrderRxPageLayout>
    </div>
  );
}
