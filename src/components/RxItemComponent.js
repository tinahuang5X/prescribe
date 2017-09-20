import React from 'react';

export default function RxItemComponent({
  item,
  onAddItem,
  onSelectItem,
  onDeselectItem
}) {
  if (!item) return <h5>"No Prescriptions!!"</h5>;

  function handleClick(event) {
    event.preventDefault();
    onAddItem(item.id);
  }

  function handleSelect(event) {
    //event.preventDefault();
    item.selected ? onDeselectItem(item.id) : onSelectItem(item.id);
  }

  return (
    <div className="card RxItemComponent">
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
                  <th style={{ width: '180px' }}>Side Effects</th>
                  <th style={{ width: '130px' }}>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <div>
                      <input
                        id="selectRx"
                        name="selectRx"
                        defaultValue="selectRx"
                        type="checkbox"
                        checked={item.selected === true}
                        onChange={handleSelect}
                      />
                      <label htmlFor="selectRx" />
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
                        onClick={handleClick}
                        style={{ margin: 'auto' }}>
                        ADD
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
