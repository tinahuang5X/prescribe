import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class EditPtComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { hasValidationError: false };
  }
  render() {
    return (
      <form className="col s12" onSubmit={this.handleEditPt}>
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
              placeholder={this.props.patient && this.props.patient.name}
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
              placeholder={this.props.patient && this.props.patient.dob}
              //required
            />
            {console.log(this.props)}
            <label htmlFor="icon_cake" />
          </div>
          <div className="input-field col s12">
            <i className="material-icons prefix">phone</i>
            <input
              style={{ fontSize: '20px' }}
              id="icon_phone"
              type="text"
              className="validate"
              placeholder={this.props.patient && this.props.patient.phone}
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
              placeholder={this.props.patient && this.props.patient.address}
              //required
            />
            <label htmlFor="icon_address" />
          </div>

          <div className="col s12 center">
            <button
              className="btn waves-effect waves-light red darken-2"
              type="submit"
              name="action">
              UPDATE PATIENT INFO
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
  handleEditPt = event => {
    //const { onSubmit } = this.props;
    event.preventDefault();
    const $form = event.target;
    const name = $form.icon_name.value.trim() || this.props.patient.name;
    const dob = $form.icon_cake.value.trim() || this.props.patient.dob;

    const phone = $form.icon_phone.value.trim() || this.props.patient.phone;

    const address =
      $form.icon_address.value.trim() || this.props.patient.address;

    let regName = /^[a-zA-Z ]{2,30}$/;
    //let regDob = /^[0,1]?\d{1}\/(([0-2]?\d{1})|([3][0,1]{1}))\/(([1]{1}[9]{1}[9]{1}\d{1})|([2-9]{1}\d{3}))$/;
    let regDob = /^(([1-9])|(0[1-9])|(1[0-2]))\/(([0-9])|([0-2][0-9])|(3[0-1]))\/(([0-9][0-9])|([1-2][0,9][0-9][0-9]))$/;
    let regPhone = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;

    console.log(this.props.patient.id);
    if (name.match(regName) && phone.match(regPhone) && dob.match(regDob)) {
      this.props.onEditPt(this.props.patient.id, {
        name,
        dob,
        phone,
        address
      });

      this.props.history.push('/patients');
    } else this.setState({ hasValidationError: true });
  };
}
export default withRouter(EditPtComponent);
