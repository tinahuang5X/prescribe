import React from 'react';

export default function OrderRxPageLayout(props) {
  if (!props.children || !props.children[0] || !props.children[1]) return null;

  return (
    <div className="OrderRxPageLayout">
      <header>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper red darken-2">
              <a
                href="index.html"
                className="brand-logo"
                style={{
                  marginLeft: '20px'
                }}>
                Prescribe
              </a>
              <a href="." data-activates="orderRx" className="button-collapse">
                <i className="material-icons">Prescriptions</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li className="active">
                  <a href=".">Refresh Drug List</a>
                </li>
              </ul>
              <ul className="side-nav" id="orderRx">
                <li className="active">
                  <a href=".">Order Rx</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <div className="Container">
        <div
          className="Rx"
          style={{
            display: 'inline-table',
            float: 'left',
            width: '70%'
          }}>
          {props.children[0]}
        </div>
        <div
          className="ManageRxList"
          style={{
            display: 'inline-table',
            float: 'left',
            flexdirection: 'column',
            width: '25%',
            marginLeft: '10px'
          }}>
          {props.children[1]}
        </div>
        <div
          className="OrderRxForm"
          style={{
            display: 'inline-table',
            float: 'left',
            flexdirection: 'column',
            width: '25%',
            marginLeft: '10px'
          }}>
          {props.children[2]}
        </div>
        <div
          className="RxPad"
          style={{
            display: 'inline-table',
            float: 'left',
            flexdirection: 'column',
            width: '25%',
            marginLeft: '10px'
          }}>
          {props.children[3]}
        </div>
      </div>
    </div>
  );
}
