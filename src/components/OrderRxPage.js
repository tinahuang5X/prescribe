import React from 'react';

import OrderRxPageLayout from './OrderRxPageLayout';
import ManageRxListComponent from './ManageRxListComponent';
//import RxComponent from './RxComponent';
import DrugsComponent from './DrugsComponent';
import OrderRxFormComponent from './OrderRxFormComponent';
import RxPadComponent from './RxPadComponent';

export default function OrderRxPage({
  //id,
  onAddRx,
  filter,
  sort,
  selected,
  RxItems,

  selectedItemIds,
  orderItems,
  patientInfo,
  onSubmitSort,
  onSubmitFilter,
  onAddItem,
  onRemoveItem,
  onSelectItem,
  onDeselectItem,
  //onAddRx,
  onSubmit,
  onTransmit,
  onSwitch,
  onLogout,
  history
}) {
  //console.log(onLogout);
  return (
    //<div id={id} className="OrderPage">
    <div className="OrderRxPage">
      <OrderRxPageLayout
        onLogout={onLogout}
        history={history}
        onAddRx={onAddRx}>
        <DrugsComponent items={RxItems} onRemoveItem={onRemoveItem} />
        <ManageRxListComponent
          sort={sort}
          filter={filter}
          onSubmitFilter={onSubmitFilter}
          onSubmitSort={onSubmitSort}
        />
        <OrderRxFormComponent patientInfo={patientInfo} onSubmit={onSubmit} />

        <RxPadComponent
          items={orderItems}
          patientInfo={patientInfo}
          onTransmit={onTransmit}
        />
      </OrderRxPageLayout>
    </div>
  );
}
