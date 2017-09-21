import React from 'react';

import OrderRxPageLayout from './OrderRxPageLayout';
import RxComponent from './RxComponent';
import AddRxComponent from './AddRxComponent';
import OrderRxFormComponent from './OrderRxFormComponent';
import RxPadComponent from './RxPadComponent';

export default function OrderRxPage({
  //id,
  RxItems,
  selected,
  selectedItemIds,
  orderItems,
  patientInfo,
  onAddItem,
  onRemoveItem,
  onSelectItem,
  onDeselectItem,
  onAddRx,
  onSubmit,
  onTransmit
}) {
  return (
    //<div id={id} className="OrderPage">
    <div className="OrderRxPage">
      <OrderRxPageLayout>
        <RxComponent
          items={RxItems}
          selectedItemIds={selectedItemIds}
          onAddItem={onAddItem}
          onRemoveItem={onRemoveItem}
          onSelectItem={onSelectItem}
          onDeselectItem={onDeselectItem}
        />
        <AddRxComponent onAddRx={onAddRx} />
        <OrderRxFormComponent patientInfo={patientInfo} onSubmit={onSubmit} />
        {/* {patientInfo
          ? <RxPadComponent
              items={orderItems}
              patientInfo={patientInfo}
              onTransmit={onTransmit}
            />
          : null} */}
        <RxPadComponent
          items={orderItems}
          patientInfo={patientInfo}
          onTransmit={onTransmit}
        />
      </OrderRxPageLayout>
    </div>
  );
}
