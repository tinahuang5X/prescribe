import React, { Component } from 'react';

export default class OrderRxFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { hasValidationError: false };
  }
  render() {
    return (
      <div
        className="card-panel grey lighten-3 OrderRxFormComponent"
        style={{ width: '400px' }}>
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <h5
              className="header"
              style={{
                textAlign: 'center',
                textDecoration: 'underline',
                color: 'brown'
              }}>
              Patient Info
            </h5>
            <div className="input-field col s12">
              <i className="material-icons prefix">account_circle</i>
              <input
                id="icon_name"
                type="text"
                className="validate"
                placeholder="Name"
                required
              />
              <label htmlFor="icon_name" />
            </div>

            <div className="input-field col s12">
              <i className="material-icons prefix">cake</i>
              <input
                id="icon_cake"
                type="text"
                className="validate"
                placeholder="Birthdate"
                required
              />
              <label htmlFor="icon_cake" />
            </div>

            <div className="col s12 center">
              <button
                className="btn waves-effect waves-light red darken-2"
                type="submit"
                name="action">
                SUBMIT TO RX PAD
              </button>
              {this.state.hasValidationError
                ? <p style={{ color: 'red', fontWeight: 'bold' }}>
                    {' '}Please enter valid data.{' '}
                  </p>
                : null}
            </div>
          </div>
          <br />
        </form>
      </div>
    );
  }
  handleSubmit = event => {
    //const { onSubmit } = this.props;
    event.preventDefault();
    const $form = event.target;
    const name = $form.icon_name.value.trim();
    const dob = $form.icon_cake.value.trim();

    //console.log({ name, phone, address });
    let regName = /^[a-zA-Z ]{2,30}$/;
    if (name.match(regName) && dob) {
      this.props.onSubmit({ name, dob });
    } else this.setState({ hasValidationError: true });
  };
}
