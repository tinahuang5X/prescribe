import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class OrderRxPageLayout extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log(this.props, '');
  // }

  render() {
    if (
      !this.props.children ||
      !this.props.children[0] ||
      !this.props.children[1]
    )
      return null;
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
                <a
                  href="."
                  data-activates="orderRx"
                  className="button-collapse">
                  <i className="material-icons">Prescriptions</i>
                </a>
                <ul className="right hide-on-med-and-down">
                  <li className="active">
                    <a href=".">Refresh Drug List</a>
                  </li>
                  <li className="active">
                    <button
                      className="btn waves-effect waves-light red darken-2"
                      onClick={this.handleLogout}
                      type="submit"
                      name="action">
                      Log Out
                    </button>
                  </li>
                </ul>
                <ul className="side-nav" id="orderRx">
                  <li className="active">Order Rx</li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        {console.log(this.props)}
        <div className="Container">
          <div
            className="Rx"
            style={{
              display: 'inline-table',
              float: 'left',
              width: '70%'
            }}>
            {this.props.children[0]}
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
            {this.props.children[1]}
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
            {this.props.children[2]}
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
            {this.props.children[3]}
          </div>
        </div>
      </div>
    );
  }
  handleLogout = event => {
    event.preventDefault();
    localStorage.clear();
    let token1 = localStorage.getItem('token');
    console.log('this', token1, this.props);
    this.props.onLogout();

    this.props.history.push('/');
  };
}
export default withRouter(OrderRxPageLayout);
