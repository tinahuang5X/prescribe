import React from 'react';

import RxItemComponent from './RxItemComponent';
export default function RxComponent({ items, onAddItem }) {
  // const { items } = props;
  // const items = props.items;
  if (items && Array.isArray(items)) {
    return (
      <div className="RxComponent">
        {items.map(item =>
          <RxItemComponent key={item.id} item={item} onAddItem={onAddItem} />
        )}
      </div>
    );
  } else {
    return <div>...LOADING PLEASE WAIT</div>;
  }
}
