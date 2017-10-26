import React, { Component } from 'react';
//import { Button, Dropdown, NavItem } from 'react-materialize';
//import Dropdown from 'react-dropdown';
import image from '../images/pill.png';

export default class ManageRxListComponent extends Component {
  render() {
    return (
      <div
        className="card-panel grey lighten-3 ManageRxListComponent"
        style={{ width: '400px' }}>
        <form className="col s12" onSubmit={this.handleFilter}>
          <div className="row">
            <h5
              className="header"
              style={{
                textAlign: 'center',
                textDecoration: 'underline',
                color: 'brown'
              }}>
              Manage Drug List
            </h5>

            <div className="input-field col s12">
              <input
                id="filter"
                type="text"
                placeholder="Please enter a generic name to filter."
                className="validate"
                style={{
                  backgroundColor: 'white',
                  color: 'black'
                }}
                required
              />
              <button
                type="submit"
                name="action"
                className="btn waves-effect waves-light red darken-2">
                FILTER DRUG LIST
              </button>
            </div>
          </div>
        </form>

        <br />
        <img
          src={image}
          alt="pill-img"
          width="130px"
          style={{ marginLeft: '30px' }}
        />
        <br />
        <br />
        <div className="col s12" style={{ marginLeft: '14px' }}>
          <a
            className="dropdown-button btn red darken-2"
            href="."
            data-activates="dropdown1">
            SORT DRUG LIST
          </a>
          <ul id="dropdown1" className="dropdown-content">
            <li
              onClick={this.handleSort}
              style={{
                color: 'brown',
                marginLeft: '25px',
                marginTop: '15px'
              }}>
              generic
            </li>

            <li
              onClick={this.handleSort}
              style={{
                color: 'brown',
                marginLeft: '25px'
              }}>
              indications
            </li>

            <li
              onClick={this.handleSort}
              style={{
                color: 'brown',
                marginLeft: '25px'
              }}>
              dosage
            </li>
          </ul>
          <br /> <br />
          {/* <input
                id="sort"
                type="text"
                placeholder="ex. generic, indications, or dosage."
                className="validate"
                style={{
                  backgroundColor: 'white',
                  color: 'black'
                }}
              />
              <button
                type="submit"
                name="action"
                className="btn waves-effect waves-light red darken-2">
                Sort Drug List
              </button> */}
        </div>
      </div>
    );
  }
  handleFilter = event => {
    //const { onSubmit } = this.props;
    event.preventDefault();

    const $form = event.target;
    const filter = $form.filter.value.trim() || '';

    console.log(filter);
    if (filter) this.props.onSubmitFilter(filter);
  };
  handleSort = event => {
    const sort = event.target.innerText || '';
    console.log(event.target.innerText);
    console.log(sort);
    if (sort) this.props.onSubmitSort(sort);
  };
}
