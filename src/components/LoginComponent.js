import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasValidationError: false
    };
  }
  render() {
    return (
      <form className="col s12" onSubmit={this.handleLogin}>
        <div className="row">
          <h5
            className="header"
            style={{
              textAlign: 'center',
              textDecoration: 'underline',
              color: 'brown'
            }}>
            <br />
            Welcome! Please log in.
          </h5>

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
              LOG IN
            </button>

            {this.props.errorType === 'SUBMIT_LOGININFO_ERROR'
              ? <p
                  style={{
                    color: 'red',
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}>
                  Wrong email or password
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
            {/* <Link
              to="/order"
              className="btn waves-effect waves-light red darken-2"
              type="submit"
              name="action">
              LOG IN
            </Link> */}
          </div>
        </div>
        <br />
      </form>
    );
  }
  handleLogin = event => {
    //const { onSubmit } = this.props;
    event.preventDefault();
    const $form = event.target;
    const email = $form.icon_email.value.trim();
    const password = $form.icon_password.value.trim();

    let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regEmail) && password.length >= 8) {
      this.props.onLogin({ email, password });
      this.setState({ hasValidationError: false });
    } else {
      this.setState({ hasValidationError: true });
    }
  };
}
export default withRouter(LoginComponent);
