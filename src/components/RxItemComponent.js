import React from 'react';
import { Link } from 'react-router-dom';
export default function RxItemComponent({
  selected,
  item,
  onAddItem,
  onRemoveItem,
  onSelectItem,
  onDeselectItem,
  onSwitch
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

  function handleSwitch(event) {
    // event.preventDefault();
    console.log(item.id, item);
    onSwitch(item.id, item);
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
                  <th style={{ width: '100px' }}>Generic Name </th>
                  {/* <th style={{ width: '100px' }}>Brand Name</th> */}
                  <th style={{ width: '100px' }}>Indications</th>
                  <th style={{ width: '80px' }}>Dosage</th>

                  <th style={{ width: '30px' }}>Action</th>
                  <th style={{ width: '30px' }}>Action</th>
                  <th style={{ width: '70px' }}>Action</th>
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
                    <br />
                    <span
                      onClick={handleSwitch}
                      style={{
                        color: 'brown',
                        textDecoration: 'underline'
                      }}>
                      switch to Brand
                    </span>
                  </td>
                  {/* <td>
                    {item.brand}
                  </td> */}
                  <td>
                    {item.indications}
                  </td>
                  <td>
                    {item.dosage}
                  </td>

                  <td>
                    <div className="card-action">
                      <a
                        href="."
                        className="waves-effect waves-light btn red darken-2"
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
                        className="waves-effect waves-light btn red darken-2"
                        onClick={handleClick}
                        style={{ margin: 'auto' }}>
                        <span className="testClick">ORDER</span>
                      </a>
                    </div>
                  </td>
                  <td>
                    <Link
                      to={`/drugs/${item.id}`}
                      //to="/add-drug"
                      style={{
                        color: 'brown',

                        fontSize: '18px',
                        textDecoration: 'underline'
                      }}>
                      EDIT DRUG
                    </Link>
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
