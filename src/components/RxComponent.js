import React from 'react';
import { Link } from 'react-router-dom';
import RxItemComponent from './RxItemComponent';
export default function RxComponent({
  items,
  selected,
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
        <br />
        <Link
          to="/add-drug"
          style={{
            color: 'brown',
            marginLeft: '40%',
            fontSize: '20px',
            textDecoration: 'underline'
          }}>
          GO TO ADD-DRUG PAGE
        </Link>
      </div>
    );
  } else {
    return <div>...LOADING, PLEASE WAIT</div>;
  }
}
