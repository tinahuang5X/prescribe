import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SignupComponent extends Component {
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
              required
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
              required
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
              required
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
              required
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
            {/* <Link
              to="/login"
              className="btn waves-effect waves-light red darken-2"
              type="submit"
              name="action">
              SIGN UP
            </Link> */}
          </div>
        </div>
        <br />
      </form>
    );
  }
  handleSignup = event => {
    //const { onSubmit } = this.props;
    event.preventDefault();
    const $form = event.target;
    const firstName = $form.icon_firstName.value.trim();
    const lastName = $form.icon_lastName.value.trim();
    const email = $form.icon_email.value.trim();
    const password = $form.icon_password.value.trim();
    //const sideeffects = $form.icon_sideeffects.value.trim();

    this.props.onSignup({ firstName, lastName, email, password });
    this.props.history.push('/login');
  };
}
export default withRouter(SignupComponent);
