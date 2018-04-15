import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class HelloComponent extends Component {
  render() {
    return (
      <div>
        <h5
          style={{
            fontWeight: '300',
            color: 'white',
            lineHeight: '35px',
            fontSize: '22px'
          }}>
          <br />
          Hello! This is Dr. John Smith. I'm very excited to introduce
          "Prescribe" to you. It's a web app which allows me to save the drugs I
          prescribe often and the patients I see regularly in the database. The
          last page of the app contains the dropdown menus which I can select
          the desired drug and patient from, and then with the click of a
          button, I am able to enter the required information on the
          prescription pad and send the prescription to the pharmacy. Please
          select the button below to sign up or log in.
        </h5>
        <br />
        <br />
        <Link
          to="/signup"
          className="btn waves-effect waves-light light-blue lighten-1"
          type="submit"
          name="action">
          SIGN UP
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link
          to="/login"
          className="btn waves-effect waves-light light-blue lighten-1"
          type="submit"
          name="action">
          LOG IN
        </Link>
      </div>
    );
  }
}
export default withRouter(HelloComponent);
