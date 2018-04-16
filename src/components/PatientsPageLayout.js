import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
//import RaisedButton from 'material-ui/RaisedButton';

class PatientsPageLayout extends Component {
  state = {
    open: false,
    hasValidationError: false
  };

  handleOpen = () => {
    this.setState({ open: true, hasValidationError: false });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = event => {
    //this.setState({ open: false });
    event.preventDefault();
    const $form = event.target;
    const name = $form.icon_name.value.trim();
    const dob = $form.icon_cake.value.trim();

    const phone = $form.icon_phone.value.trim();

    const address = $form.icon_address.value.trim();

    let regName = /^[a-zA-Z ]{2,30}$/;

    let regDob = /^(([1-9])|(0[1-9])|(1[0-2]))\/(([0-9])|([0-2][0-9])|(3[0-1]))\/(([0-9][0-9])|([1-2][0,9][0-9][0-9]))$/;
    let regPhone = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
    if (
      name.match(regName) &&
      phone.match(regPhone) &&
      dob.match(regDob) &&
      address
    ) {
      this.props.onAddPt({
        name,
        dob,
        phone,
        address
      });
      this.setState({ open: false });
    } else {
      this.setState({ hasValidationError: true });
      this.setState({ open: true });
    }
  };

  handleLogout = event => {
    event.preventDefault();
    localStorage.clear();
    //localStorage.removeItem('token');
    let token1 = localStorage.getItem('token');
    console.log('this', token1, this.props);
    this.props.onLogout();

    this.props.history.push('/');
  };

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />
    ];
    if (
      !this.props.children
      // !this.props.children[0] ||
      // !this.props.children[1]
    )
      return null;
    return (
      <div className="PatientsPageLayout">
        <header>
          <div className="navbar-fixed">
            <nav>
              <div className="nav-wrapper blue-grey darken-3">
                <a
                  href="#/patients"
                  className="brand-logo"
                  style={{
                    marginLeft: '20px'
                  }}>
                  My Patients
                </a>

                <ul className="right hide-on-med-and-down">
                  <li className="active">
                    <div>
                      <a
                        className="waves-effect waves-light btn blue-grey darken-3"
                        onClick={this.handleOpen}>
                        add patient
                      </a>
                      <Dialog
                        title="ADD PATIENT"
                        titleStyle={{
                          backgroundColor: '#37474f',
                          color: 'white'
                        }}
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        autoScrollBodyContent={true}>
                        <form className="col s12" onSubmit={this.handleSubmit}>
                          <div className="row">
                            <h5
                              className="header"
                              style={{
                                textAlign: 'center',
                                textDecoration: 'underline',
                                color: '#29b6f6'
                              }}>
                              <br />
                              Patient Info
                            </h5>
                            <div className="input-field col s12">
                              <i className="material-icons prefix">person</i>
                              <input
                                style={{ fontSize: '20px' }}
                                id="icon_name"
                                type="text"
                                className="validate"
                                placeholder="Name"
                                //required
                              />
                              <label htmlFor="icon_name" />
                            </div>

                            <div className="input-field col s12">
                              <i className="material-icons prefix">cake</i>
                              <input
                                style={{ fontSize: '20px' }}
                                id="icon_cake"
                                type="text"
                                className="validate"
                                placeholder="Date of Birth mm/dd/yyyy"
                                //required
                              />
                              <label htmlFor="icon_cake" />
                            </div>

                            <div className="input-field col s12">
                              <i className="material-icons prefix">phone</i>
                              <input
                                style={{ fontSize: '20px' }}
                                id="icon_phone"
                                type="text"
                                className="validate"
                                placeholder="Phone Number (xxx) xxx-xxxx"
                                //required
                              />
                              <label htmlFor="icon_phone" />
                            </div>

                            <div className="input-field col s12">
                              <i className="material-icons prefix">
                                location_city
                              </i>
                              <input
                                style={{ fontSize: '20px' }}
                                id="icon_address"
                                type="text"
                                className="validate"
                                placeholder="Address"
                                //required
                              />
                              <label htmlFor="icon_address" />
                            </div>

                            <div className="col s12 center">
                              <br />

                              <button
                                className="btn waves-effect waves-light light-blue lighten-1"
                                type="submit"
                                name="action">
                                ADD TO PATIENT LIST
                              </button>
                              {this.state.hasValidationError
                                ? <p
                                    style={{
                                      color: 'red',
                                      fontWeight: 'bold',
                                      textAlign: 'center'
                                    }}>
                                    Please enter valid data.
                                  </p>
                                : null}
                            </div>
                          </div>
                          <br />
                        </form>
                      </Dialog>
                    </div>
                  </li>

                  <li className="active">
                    <a
                      href="#/drugs"
                      className="waves-effect waves-light btn blue-grey darken-3">
                      My Drugs
                    </a>
                  </li>
                  <li className="active">
                    <a
                      href="#/prescribe"
                      className="waves-effect waves-light btn blue-grey darken-3">
                      Prescribe
                    </a>
                  </li>
                  <li className="active">
                    <a
                      className="waves-effect waves-light btn blue-grey darken-3"
                      onClick={this.handleLogout}>
                      Log Out
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        {console.log(this.props)}

        <div className="Pt">
          {this.props.children}
        </div>
        <footer
          className="page-footer"
          style={{ height: '70px', margin: '-3%', backgroundColor: '#37474f' }}
        />
      </div>
    );
  }
}
export default withRouter(PatientsPageLayout);
