import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

function getPatientProperty(patients, patientId, propertyName) {
  if (!Array.isArray(patients)) return '';
  const patient = patients.find(patient => patient.id === patientId);
  if (!patient) return '';
  return patient[propertyName];
}

class PatientsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      dob: null,
      phone: null,
      address: null,
      openRemove: false,
      open: false,
      patientId: null,
      hasValidationError: false
    };
  }

  handleChangeName = event => {
    event.preventDefault();

    this.setState({ name: event.target.value });
  };

  handleChangeDob = event => {
    event.preventDefault();

    this.setState({ dob: event.target.value });
  };

  handleChangePhone = event => {
    event.preventDefault();

    this.setState({
      phone: event.target.value
    });
  };

  handleChangeAddress = event => {
    event.preventDefault();

    this.setState({
      address: event.target.value
    });
  };

  handleOpenRemove = event => {
    this.setState({ openRemove: true });
    let tag = event.target;
    console.log(event.target);
    let val = tag.getAttribute('value');
    let valNum = parseInt(val, 10);
    console.log(tag, val, valNum);
    this.setState({ patientId: valNum });
  };

  handleOpen = event => {
    this.setState({ open: true });
    let tag = event.target;
    console.log(event.target);
    let val = tag.getAttribute('value');
    let valNum = parseInt(val, 10);
    console.log(tag, val, valNum);
    this.setState({ patientId: valNum });
  };

  handleClose = event => {
    this.setState({ open: false });
    this.setState({ hasValidationError: false });
    this.setState({
      name: null,
      dob: null,
      phone: null,
      address: null
    });
  };

  handleCloseRemove = event => {
    this.setState({ openRemove: false });
    this.setState({ hasValidationError: false });
  };
  handleSubmit = event => {
    this.setState({ openRemove: false });

    console.log(this.state.patientId);
    this.props.onRemovePatient(this.state.patientId);
  };
  handleEditPt = event => {
    //const { onSubmit } = this.props;
    event.preventDefault();
    let patientId = this.state.patientId;
    let patients = this.props.patients;
    console.log(patientId);
    const $form = event.target;
    const name =
      $form.icon_name.value.trim() ||
      getPatientProperty(patients, patientId, 'name');

    const dob =
      $form.icon_cake.value.trim() ||
      getPatientProperty(patients, patientId, 'dob');

    const phone =
      $form.icon_phone.value.trim() ||
      getPatientProperty(patients, patientId, 'phone');

    const address =
      $form.icon_address.value.trim() ||
      getPatientProperty(patients, patientId, 'address');

    let regName = /^[a-zA-Z ]{2,30}$/;

    let regDob = /^(([1-9])|(0[1-9])|(1[0-2]))\/(([0-9])|([0-2][0-9])|(3[0-1]))\/(([0-9][0-9])|([1-2][0,9][0-9][0-9]))$/;
    let regPhone = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
    if (name.match(regName) && phone.match(regPhone) && dob.match(regDob)) {
      this.props.onEditPt(patientId, {
        name,
        dob,
        phone,
        address
      });

      this.setState({ open: false });
      this.setState({
        name: null,
        dob: null,
        phone: null,
        address: null
      });
    } else {
      this.setState({ hasValidationError: true });
      this.setState({ open: true });
    }
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleCloseRemove}
      />,
      <FlatButton label="Submit" primary={true} onClick={this.handleSubmit} />
    ];
    if (this.props.patients && Array.isArray(this.props.patients)) {
      return (
        <div className="PatientsComponent">
          <Table
            className="bordered highlight centered"
            onCellClick={this.handleCellClick}>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn style={{ fontSize: '20px' }}>
                  Name
                </TableHeaderColumn>
                <TableHeaderColumn style={{ fontSize: '20px' }}>
                  Date of Birth
                </TableHeaderColumn>
                <TableHeaderColumn style={{ fontSize: '20px' }}>
                  Phone Number
                </TableHeaderColumn>
                <TableHeaderColumn
                  style={{
                    fontSize: '20px',
                    width: '300px'
                  }}>
                  Address
                </TableHeaderColumn>
                <TableHeaderColumn style={{ fontSize: '20px' }}>
                  Action
                </TableHeaderColumn>
                <TableHeaderColumn style={{ fontSize: '20px' }}>
                  Action
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.props.patients.map((patient, index) =>
                <TableRow key={index} rowNumber={this.rowNumber}>
                  <TableRowColumn style={{ fontSize: '15px' }}>
                    {patient.name}
                  </TableRowColumn>
                  <TableRowColumn style={{ fontSize: '15px' }}>
                    {patient.dob}
                  </TableRowColumn>
                  <TableRowColumn style={{ fontSize: '15px' }}>
                    {patient.phone}
                  </TableRowColumn>
                  <TableRowColumn
                    style={{
                      fontSize: '15px',
                      width: '300px'
                    }}>
                    {patient.address}
                  </TableRowColumn>
                  <TableRowColumn style={{ fontSize: '15px' }}>
                    <div>
                      <a
                        value={patient.id}
                        className="waves-effect waves-light btn light-blue lighten-1"
                        onClick={this.handleOpenRemove}>
                        REMOVE
                      </a>
                      <Dialog
                        actions={actions}
                        modal={false}
                        open={this.state.openRemove}
                        onRequestClose={this.handleCloseRemove}
                        overlayStyle={{
                          backgroundColor: 'lightgray',
                          opacity: 0.1
                        }}>
                        Are you sure you want to delete this patient from the
                        list?
                      </Dialog>
                    </div>

                    {console.log(patient.id, index)}
                  </TableRowColumn>
                  <TableRowColumn style={{ fontSize: '15px' }}>
                    <div>
                      <a
                        value={patient.id}
                        className="waves-effect waves-light btn light-blue lighten-1"
                        onClick={this.handleOpen}>
                        EDIT
                      </a>
                      <Dialog
                        title="EDIT PATIENT"
                        titleStyle={{
                          backgroundColor: '#37474f',
                          color: 'white'
                        }}
                        actions={
                          <FlatButton
                            label="Cancel"
                            primary={true}
                            onClick={this.handleClose}
                          />
                        }
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        overlayStyle={{
                          backgroundColor: 'lightgray',
                          opacity: 0.1
                        }}
                        autoScrollBodyContent={true}>
                        <form className="col s12" onSubmit={this.handleEditPt}>
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
                                value={
                                  typeof this.state.name === 'string'
                                    ? this.state.name
                                    : getPatientProperty(
                                        this.props.patients,
                                        this.state.patientId,
                                        'name'
                                      )
                                }
                                onChange={this.handleChangeName}
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
                                value={
                                  typeof this.state.dob === 'string'
                                    ? this.state.dob
                                    : getPatientProperty(
                                        this.props.patients,
                                        this.state.patientId,
                                        'dob'
                                      )
                                }
                                onChange={this.handleChangeDob}
                                placeholder="Date of Birth mm/dd/yyyy"
                                //required
                              />
                              {console.log(this.props.patients[index])}
                              <label htmlFor="icon_cake" />
                            </div>
                            <div className="input-field col s12">
                              <i className="material-icons prefix">phone</i>
                              <input
                                style={{ fontSize: '20px' }}
                                id="icon_phone"
                                type="text"
                                className="validate"
                                value={
                                  typeof this.state.phone === 'string'
                                    ? this.state.phone
                                    : getPatientProperty(
                                        this.props.patients,
                                        this.state.patientId,
                                        'phone'
                                      )
                                }
                                onChange={this.handleChangePhone}
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
                                value={
                                  typeof this.state.address === 'string'
                                    ? this.state.address
                                    : getPatientProperty(
                                        this.props.patients,
                                        this.state.patientId,
                                        'address'
                                      )
                                }
                                onChange={this.handleChangeAddress}
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
                      </Dialog>
                    </div>
                  </TableRowColumn>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <br />
          <br />
        </div>
      );
    } else {
      return <div>...LOADING, PLEASE WAIT</div>;
    }
  }
}
export default withRouter(PatientsComponent);
