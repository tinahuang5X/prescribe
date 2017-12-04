import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import AddRxComponent from './AddRxComponent';

class OrderRxPageLayout extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />
    ];
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
              <div className="nav-wrapper blue-grey darken-3">
                <a
                  href="."
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
                  {/* <li className="active">
                    <a href=".">Refresh Drug List</a>
                  </li> */}

                  <li className="active">
                    {/* <a
                      href="#/add-drug"
                      className="waves-effect waves-light btn blue-grey darken-3">
                      Add Drug
                    </a> */}
                    <div>
                      <RaisedButton
                        className="waves-effect waves-light btn blue-grey darken-3"
                        label="Add Drug"
                        onClick={this.handleOpen}
                      />
                      <Dialog
                        title="Drug Info"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        autoScrollBodyContent={true}>
                        <div
                          className="CreateRxPage"
                          style={{
                            height: '90%',
                            width: '90%',
                            margin: 'auto'
                            //borderStyle: 'solid',
                            //backgroundColor: 'lightblue'
                            //backgroundImage: 'url(' + { Background } + ')'
                          }}>
                          <AddRxComponent onAddRx={this.onAddRx} />
                        </div>
                      </Dialog>
                    </div>
                  </li>
                  <li className="active">
                    <a
                      href="#/patients"
                      className="waves-effect waves-light btn blue-grey darken-3">
                      Patients
                    </a>
                  </li>
                  <li className="active">
                    <a
                      href="."
                      className="waves-effect waves-light btn blue-grey darken-3"
                      onClick={this.handleLogout}>
                      Log Out
                    </a>
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
          <div className="Rx">
            {this.props.children[0]}
          </div>
          {/* <div
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
          </div> */}
        </div>
      </div>
    );
  }
  handleLogout = event => {
    event.preventDefault();
    localStorage.clear();
    //localStorage.removeItem('token');
    let token1 = localStorage.getItem('token');
    console.log('this', token1, this.props);
    this.props.onLogout();

    this.props.history.push('/');
  };
}
export default withRouter(OrderRxPageLayout);
