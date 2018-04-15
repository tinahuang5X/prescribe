import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
//import RaisedButton from 'material-ui/RaisedButton';

class DrugsPageLayout extends Component {
  state = {
    open: false,
    hasValidationError: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = event => {
    //this.setState({ open: false });
    event.preventDefault();
    const $form = event.target;
    const generic = $form.icon_generic.value.trim();
    const brand = $form.icon_brand.value.trim();
    const indications = $form.icon_indications.value.trim();

    let regName = /^[a-zA-Z ]{2,30}$/;
    if (generic.match(regName) && brand.match(regName) && indications) {
      this.props.onAddRx({ generic, brand, indications });
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
      // <FlatButton
      //   label="Submit"
      //   primary={true}
      //   keyboardFocused={true}
      //   onClick={this.handleClose}
      // />
    ];
    if (!this.props.children) return null;
    return (
      <div className="DrugsPageLayout">
        <header>
          <div className="navbar-fixed">
            <nav>
              <div className="nav-wrapper blue-grey darken-3">
                <a
                  href="#/drugs"
                  className="brand-logo"
                  style={{
                    marginLeft: '20px'
                  }}>
                  My Drugs
                </a>

                <ul className="right hide-on-med-and-down">
                  <li className="active">
                    <div>
                      <a
                        className="waves-effect waves-light btn blue-grey darken-3"
                        onClick={this.handleOpen}>
                        add drug
                      </a>
                      <Dialog
                        title="ADD DRUG"
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
                              Drug Info
                            </h5>
                            <div className="input-field col s12">
                              <i className="material-icons prefix">
                                call_to_action
                              </i>
                              <input
                                style={{ fontSize: '20px' }}
                                id="icon_generic"
                                type="text"
                                className="validate"
                                placeholder="Generic"
                                //required
                              />
                              <label htmlFor="icon_generic" />
                            </div>

                            <div className="input-field col s12">
                              <i className="material-icons prefix">
                                branding_watermark
                              </i>
                              <input
                                style={{ fontSize: '20px' }}
                                id="icon_brand"
                                type="text"
                                className="validate"
                                placeholder="Brand"
                                //required
                              />
                              <label htmlFor="icon_brand" />
                            </div>

                            <div className="input-field col s12">
                              <i className="material-icons prefix">
                                featured_play_list
                              </i>
                              <input
                                style={{ fontSize: '20px' }}
                                id="icon_indications"
                                type="text"
                                className="validate"
                                placeholder="Indications"
                                //required
                              />
                              <label htmlFor="icon_indications" />
                            </div>

                            <div className="col s12 center">
                              <br />

                              <button
                                className="btn waves-effect waves-light light-blue lighten-1"
                                type="submit"
                                name="action">
                                ADD TO DRUG LIST
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
                      href="#/patients"
                      className="waves-effect waves-light btn blue-grey darken-3">
                      My Patients
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

        <div className="Drugs">
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
export default withRouter(DrugsPageLayout);
