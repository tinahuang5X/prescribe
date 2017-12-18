import React from 'react';
import DrugsPageLayout from './DrugsPageLayout';
import DrugsComponent from './DrugsComponent';

export default function DrugsPage({
  //id,
  onAddRx,
  onEditRx,
  RxItems,
  onRemoveItem,
  onLogout
}) {
  if (RxItems && Array.isArray(RxItems)) {
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
        </DrugsPageLayout>
      </div>
    );
  } else {
    return (
      <div>
        <h5>
          <p>
            &nbsp;&nbsp;&nbsp;You are not authorized to view this page or your
            credentials have expired.
          </p>
        </h5>
        <a
          href="#/login"
          className="waves-effect waves-light btn light-blue lighten-1"
          style={{
            marginLeft: '20px'
          }}>
          BACK TO LOGIN PAGE
        </a>
      </div>
    );
  }
}
