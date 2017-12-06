import React from 'react';

import DrugsPageLayout from './DrugsPageLayout';
import ManageRxListComponent from './ManageRxListComponent';
//import RxComponent from './RxComponent';
import DrugsComponent from './DrugsComponent';
import OrderRxFormComponent from './OrderRxFormComponent';
import RxPadComponent from './RxPadComponent';

export default function DrugsPage({
  //id,
  onAddRx,
  onEditRx,
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
    <div className="DrugsPage">
      <DrugsPageLayout onLogout={onLogout} onAddRx={onAddRx}>
        <DrugsComponent
          items={RxItems}
          onRemoveItem={onRemoveItem}
          onEditRx={onEditRx}
        />
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
      </DrugsPageLayout>
    </div>
  );
}
