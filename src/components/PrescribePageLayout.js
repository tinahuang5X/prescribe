import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//import Dialog from 'material-ui/Dialog';
//import FlatButton from 'material-ui/FlatButton';
//import RaisedButton from 'material-ui/RaisedButton';

class PrescribePageLayout extends Component {
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
    //const actions = [
    //<FlatButton label="Cancel" primary={true} onClick={this.handleClose} />
    // <FlatButton
    //   label="Submit"
    //   primary={true}
    //   keyboardFocused={true}
    //   onClick={this.handleClose}
    // />
    //];
    // if (
    //   !this.props.children ||
    //   !this.props.children[0] ||
    //   !this.props.children[1]
    // )
    //   return null;
    return (
      <div className="PrescribePageLayout">
        <header>
          <div className="navbar-fixed">
            <nav>
              <div className="nav-wrapper blue-grey darken-3">
                <a
                  href="#/prescribe"
                  className="brand-logo"
                  style={{
                    marginLeft: '20px'
                  }}>
                  Prescribe
                </a>

                <ul className="right hide-on-med-and-down">
                  <li className="active">
                    <li className="active">
                      <a
                        href="#/drugs"
                        className="waves-effect waves-light btn blue-grey darken-3">
                        My Drugs
                      </a>
                    </li>
                    <a
                      href="#/patients"
                      className="waves-effect waves-light btn blue-grey darken-3">
                      My Patients
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

        <div className="Prescribe">
          {this.props.children}
        </div>

        <footer
          className="page-footer"
          style={{
            height: '70px',
            margin: '-2%',
            backgroundColor: '#37474f'
          }}
        />
      </div>
    );
  }
}
export default withRouter(PrescribePageLayout);
