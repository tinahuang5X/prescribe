import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class SignupComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasValidationError: false
    };
  }

  render() {
    return (
      <form className="col s12" onSubmit={this.handleSignup}>
        <div className="row">
          <h5
            className="header"
            style={{
              textAlign: 'center',
              textDecoration: 'underline',
              color: 'brown'
            }}>
            <br />
            Welcome! Please sign up.
          </h5>
          <div className="input-field col s12">
            <i className="material-icons prefix">account_circle</i>
            <input
              id="icon_firstName"
              type="text"
              className="validate"
              placeholder="First Name"
              //required
            />
            <label htmlFor="icon_firstName" />
          </div>

          <div className="input-field col s12">
            <i className="material-icons prefix">account_circle</i>
            <input
              id="icon_lastName"
              type="text"
              className="validate"
              placeholder="Last Name"
              //required
            />
            <label htmlFor="icon_lastName" />
          </div>

          <div className="input-field col s12">
            <i className="material-icons prefix">email</i>
            <input
              id="icon_email"
              type="text"
              className="validate"
              placeholder="Email Address"
              //required
            />
            <label htmlFor="icon_email" />
          </div>

          <div className="input-field col s12">
            <i className="material-icons prefix">lock</i>
            <input
              id="icon_password"
              type="password"
              className="validate"
              placeholder="Password"
              //required
            />
            <label htmlFor="icon_password" />
          </div>

          <div className="col s12 center">
            <button
              className="btn waves-effect waves-light red darken-2"
              type="submit"
              name="action">
              SIGN UP
            </button>
            <br />
            <br />
            {this.props.errorType === 'SUBMIT_MDINFO_ERROR'
              ? <p
                  style={{
                    color: 'red',
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}>
                  Email already taken
                </p>
              : null}
            {this.state.hasValidationError
              ? <p
                  style={{
                    color: 'red',
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}>
                  Please enter valid data, such as an email address in the right
                  format and a password at least 8 characters long.
                </p>
              : null}

            <br />
            <br />
            <p
              className="header"
              style={{
                textAlign: 'center',
                color: 'brown'
              }}>
              _____________________________________________________________________________________________________________
              <br />
              <br />If you have already signed up, please click the button below
              to log in.
            </p>
            <br />
            <Link
              to="/login"
              className="btn waves-effect waves-light red darken-2"
              type="submit"
              name="action">
              LOG IN
            </Link>
          </div>
        </div>
        <br />
      </form>
    );
  }
  handleSignup = event => {
    //const { onSubmit } = this.props;
    event.preventDefault();

    console.log(this.state.theStoredMsg);
    const $form = event.target;
    const firstName = $form.icon_firstName.value.trim();
    const lastName = $form.icon_lastName.value.trim();
    const email = $form.icon_email.value.trim();
    const password = $form.icon_password.value.trim();

    let regName = /^[a-zA-Z ]{2,30}$/;
    let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (
      firstName.match(regName) &&
      lastName.match(regName) &&
      email.match(regEmail) &&
      password.length >= 8
    ) {
      this.props.onSignup({ firstName, lastName, email, password });
      this.setState({ hasValidationError: false });
    } else {
      this.setState({ hasValidationError: true });
    }
  };
}
export default withRouter(SignupComponent);
