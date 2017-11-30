import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class AddPtComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { hasValidationError: false };
  }
  render() {
    return (
      <form className="col s12" onSubmit={this.handleAddPt}>
        <div className="row">
          <h5
            className="header"
            style={{
              textAlign: 'center',
              textDecoration: 'underline',
              color: 'brown'
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
              placeholder="name"
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
              placeholder="Date of Birth"
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
              placeholder="Phone Number"
              //required
            />
            <label htmlFor="icon_phone" />
          </div>

          <div className="input-field col s12">
            <i className="material-icons prefix">location_city</i>
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
            <button
              className="btn waves-effect waves-light red darken-2"
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
    );
  }
  handleAddPt = event => {
    //const { onSubmit } = this.props;
    event.preventDefault();
    const $form = event.target;
    const name = $form.icon_name.value.trim();
    const dob = $form.icon_cake.value.trim();

    const phone = $form.icon_phone.value.trim();

    const address = $form.icon_address.value.trim();

    let regName = /^[a-zA-Z ]{2,30}$/;
    //let regDob = /^[0,1]?\d{1}\/(([0-2]?\d{1})|([3][0,1]{1}))\/(([1]{1}[9]{1}[9]{1}\d{1})|([2-9]{1}\d{3}))$/;
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

      this.props.history.push('/patients');
    } else this.setState({ hasValidationError: true });
  };
}
export default withRouter(AddPtComponent);
