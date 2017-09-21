import React from 'react';

import OrderRxPageLayout from './OrderRxPageLayout';
import RxComponent from './RxComponent';
//import AddRxComponent from './AddRxComponent';
import OrderRxFormComponent from './OrderRxFormComponent';
import RxPadComponent from './RxPadComponent';

export default function OrderRxPage({
  //id,
  selected,
  RxItems,

  selectedItemIds,
  orderItems,
  patientInfo,
  onAddItem,
  onRemoveItem,
  onSelectItem,
  onDeselectItem,
  //onAddRx,
  onSubmit,
  onTransmit,
  onSwitch
}) {
  return (
    //<div id={id} className="OrderPage">
    <div className="OrderRxPage">
      <OrderRxPageLayout>
        <RxComponent
          items={RxItems}
          selected={selected}
          selectedItemIds={selectedItemIds}
          onAddItem={onAddItem}
          onRemoveItem={onRemoveItem}
          onSelectItem={onSelectItem}
          onDeselectItem={onDeselectItem}
          onSwitch={onSwitch}
        />

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
