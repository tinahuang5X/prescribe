import React from 'react';

export default function RxItemComponent({
  selected,
  item,
  onAddItem,
  onRemoveItem,
  onSelectItem,
  onDeselectItem
}) {
  // console.log(item, '<<<<< in RxItemComponent');
  if (!item) return <h5>"No Prescriptions!!"</h5>;

  function handleClick(event) {
    event.preventDefault();
    console.log(item, '<<<<< handleClick');
    onAddItem(item.id);
  }

  function handleRemove(event) {
    event.preventDefault();
    console.log(item, '<<<<< handleClick');
    onRemoveItem(item.id);
  }

  function handleSelect(event) {
    // event.preventDefault();
    console.log(item, '<<<< handleSelect');
    // onSelectItem(item.id);
    selected ? onDeselectItem(item.id) : onSelectItem(item.id);
  }

  return (
    <div className="card RxItemComponent">
      {/* {console.log(item, ' in the component')} */}
      <div className="col s12 m7">
        <div className="card horizontal">
          <div className="card-content">
            <table className="highlight centered">
              <thead>
                <tr>
                  <th style={{ width: '30px' }}>Select</th>
                  <th style={{ width: '80px' }}>Genreic Name</th>
                  <th style={{ width: '100px' }}>Brand Name</th>
                  <th style={{ width: '130px' }}>Indications</th>
                  <th style={{ width: '130px' }}>Dosage</th>
                  <th style={{ width: '100px' }}>Side Effects</th>
                  <th style={{ width: '50px' }}>Action</th>
                  <th style={{ width: '50px' }}>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <div>
                      <input
                        id={`selectRx-${item.id}`}
                        type="checkbox"
                        checked={selected === true}
                        onChange={handleSelect}
                      />
                      <label htmlFor={`selectRx-${item.id}`} />
                    </div>
                  </td>
                  <td>
                    {item.generic}
                  </td>
                  <td>
                    {item.brand}
                  </td>
                  <td>
                    {item.indications}
                  </td>
                  <td>
                    {item.dosage}
                  </td>
                  <td>
                    {item.sideeffects}
                  </td>
                  <td>
                    <div className="card-action">
                      <a
                        href="."
                        className="waves-effect waves-light btn"
                        onClick={handleRemove}
                        style={{ margin: 'auto' }}>
                        REMOVE
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="card-action">
                      <a
                        href="."
                        className="waves-effect waves-light btn"
                        onClick={handleClick}
                        style={{ margin: 'auto' }}>
                        ORDER
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
