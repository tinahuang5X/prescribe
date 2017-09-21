import React from 'react';

import RxItemComponent from './RxItemComponent';
export default function RxComponent({
  items,
  selectedItemIds,
  onAddItem,
  onRemoveItem,
  onSelectItem,
  onDeselectItem,
  onSwitch
}) {
  // const { items } = props;
  // const items = props.items;

  // console.log('this is the items array', items);
  if (items && Array.isArray(items)) {
    return (
      <div className="RxComponent">
        {items.map(item =>
          <RxItemComponent
            key={item.id}
            selected={selectedItemIds.indexOf(item.id) !== -1 ? true : false}
            item={item}
            onAddItem={onAddItem}
            onRemoveItem={onRemoveItem}
            onSelectItem={onSelectItem}
            onDeselectItem={onDeselectItem}
            onSwitch={onSwitch}
          />
        )}
      </div>
    );
  } else {
    return <div>...LOADING PLEASE WAIT</div>;
  }
}
