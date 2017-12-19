import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class PrescribeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { hasValidationError: false, clearForm: true };
  }

  render() {
    let d = new Date().toDateString();
    const nameField = [];

    const genericField = [];

    const strengthField = ['5mg', '10mg', '20mg', '30mg', '40mg'];
    const dosageField = [
      'Take one tablet by mouth once daily',
      'Take one tablet by mouth once daily at bedtime',
      '30mg',
      'Take one tablet by mouth twice daily with food',
      'Take two tablets by mouth once daily',
      'Take one capsule by mouth once daily'
    ];

    if (this.props.patients && Array.isArray(this.props.patients)) {
      for (let patient of this.props.patients) {
        nameField.push(patient.name);
      }
    }

    if (this.props.items && Array.isArray(this.props.items)) {
      for (let item of this.props.items) {
        genericField.push(item.generic);
      }
    }

    //let firstName = localStorage.getItem('firstName');
    //let lastName = localStorage.getItem('lastName');
    //console.log(firstName, lastName);

    return (
      <div
        className="PrescribeComponent"
        style={{
          width: '800px',
          height: '1200px',
          margin: 'auto'
        }}>
        <form className="col s12" onSubmit={this.handleSubmit}>
          <br />
          <br />
          <h5>
            <span
              style={{
                textDecoration: 'underline',
                marginLeft: '120px'
              }}>
              Date:&nbsp;&nbsp;{d}
            </span>
          </h5>

          <AutoComplete
            style={{ marginTop: '50px' }}
            id="name"
            floatingLabelText="Type or select a patient's name (case insensitive)"
            floatingLabelStyle={{
              fontSize: '20px',
              color: 'lightgray',
              width: '500px',
              marginLeft: '120px'
            }}
            inputStyle={{
              fontSize: '20px',
              //color: '#29b6f6',
              width: '500px',
              marginLeft: '120px'
            }}
            underlineStyle={{ width: '500px', marginLeft: '120px' }}
            menuStyle={{ marginLeft: '120px' }}
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={nameField}
          />
          <br />
          <br />
          <br />
          <AutoComplete
            id="generic"
            floatingLabelText="Type or select a generic name (case insensitive)"
            floatingLabelStyle={{
              fontSize: '20px',
              color: 'lightgray',
              width: '500px',
              marginLeft: '120px'
            }}
            inputStyle={{
              fontSize: '20px',
              //color: '#29b6f6',
              width: '500px',
              marginLeft: '120px'
            }}
            underlineStyle={{ width: '500px', marginLeft: '120px' }}
            menuStyle={{ marginLeft: '120px' }}
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={genericField}
          />
          {console.log(this.props.items)}
          <br />
          <br />
          <br />
          <AutoComplete
            id="strength"
            floatingLabelText="Type or select a strength (case insensitive)"
            floatingLabelStyle={{
              fontSize: '20px',
              color: 'lightgray',
              width: '500px',
              marginLeft: '120px'
            }}
            inputStyle={{
              fontSize: '20px',
              //color: '#29b6f6',
              width: '500px',
              marginLeft: '120px'
            }}
            underlineStyle={{ width: '500px', marginLeft: '120px' }}
            menuStyle={{ marginLeft: '100px' }}
            listStyle={{ width: '500px' }}
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={strengthField}
          />
          <br />
          <br />
          <br />
          <AutoComplete
            id="dosage"
            floatingLabelText="Type or select a dosage (case insensitive)"
            floatingLabelStyle={{
              fontSize: '20px',
              color: 'lightgray',
              width: '500px',
              marginLeft: '120px'
            }}
            inputStyle={{
              fontSize: '20px',
              //color: '#29b6f6',
              width: '500px',
              marginLeft: '120px'
            }}
            underlineStyle={{ width: '500px', marginLeft: '120px' }}
            menuStyle={{ marginLeft: '100px' }}
            listStyle={{ width: '500px' }}
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={dosageField}
          />
          <br />
          <br />
          <br />

          {/* <h5>
            <span
              style={{
                fontSize: '18px',
                textDecoration: 'underline',
                marginLeft: '120px'
              }}>
              approved by: Dr. {firstName} {lastName}
            </span>
          </h5> */}

          {console.log(this.props.rxInfo)}

          <div className="col s12 center">
            <button
              className="btn waves-effect waves-light light-blue lighten-1"
              type="submit"
              name="action"
              style={{ marginRight: '10%' }}>
              ENTER
            </button>
            <br />
            <br />
            {this.state.hasValidationError
              ? <p
                  style={{
                    color: 'red',
                    fontWeight: 'bold',
                    // textAlign: 'center',
                    marginLeft: '280px'
                  }}>
                  Please enter valid data.
                </p>
              : null}
          </div>
          <br />
          <br />
          {this.state.clearForm
            ? <h5 style={{ marginLeft: '120px' }}>
                <span
                  style={{
                    fontSize: '18px'
                    // textDecoration: 'underline'
                  }}>
                  Patient Name: &nbsp;&nbsp;
                  <br />
                  Patient Date of Birth:&nbsp;&nbsp;
                  <br /> Drug Generic Name:&nbsp;&nbsp;
                  <br /> Drug Brand Name:&nbsp;&nbsp;
                  <br /> Indication:&nbsp;&nbsp;
                  <br /> Strength:&nbsp;&nbsp;
                  <br /> Dosage:&nbsp;&nbsp;
                </span>
              </h5>
            : <h5 style={{ marginLeft: '120px' }}>
                <span
                  style={{
                    fontSize: '18px'
                    // textDecoration: 'underline'
                  }}>
                  Patient Name: &nbsp;&nbsp;{this.props.rxInfo &&
                    this.props.rxInfo.name}
                  <br />
                  Patient Date of Birth:&nbsp;&nbsp;
                  {this.props.rxInfo && this.props.rxInfo.dob}
                  <br /> Drug Generic Name:&nbsp;&nbsp;
                  {this.props.rxInfo && this.props.rxInfo.generic}
                  <br /> Drug Brand Name:&nbsp;&nbsp;
                  {this.props.rxInfo && this.props.rxInfo.brand}
                  <br /> Indication:&nbsp;&nbsp;
                  {this.props.rxInfo && this.props.rxInfo.indications}
                  <br /> Strength:&nbsp;&nbsp;
                  {this.props.rxInfo && this.props.rxInfo.strength}
                  <br /> Dosage:&nbsp;&nbsp;
                  {this.props.rxInfo && this.props.rxInfo.dosage}
                </span>
              </h5>}
        </form>
        <br /> <br />
        <div className="col s12">
          {this.state.clearForm
            ? null
            : <button
                className="btn waves-effect waves-light light-blue lighten-1"
                type="submit"
                name="action"
                style={{ marginLeft: '18%' }}>
                SEND TO PHARMACY
              </button>}
          <button
            onClick={this.handleClick}
            href="#/prescribe"
            className="btn waves-effect waves-light light-blue lighten-1"
            type="submit"
            name="action"
            style={{ marginLeft: '15%' }}>
            CLEAR
          </button>
        </div>
      </div>
    );
  }

  handleClick = event => {
    //const { onSubmit } = this.props;
    event.preventDefault();
    this.setState({ clearForm: true, hasValidationError: false });
  };

  handleSubmit = event => {
    //const { onSubmit } = this.props;
    event.preventDefault();
    const $form = event.target;

    const nameField = [];
    const genericField = [];
    if (this.props.patients && Array.isArray(this.props.patients)) {
      for (let patient of this.props.patients) {
        nameField.push(patient.name);
      }
    }

    if (this.props.items && Array.isArray(this.props.items)) {
      for (let item of this.props.items) {
        genericField.push(item.generic);
      }
    }
    const name = $form.name.value.trim();
    const nameIndex = nameField.indexOf(name);
    let dob = '';
    if (name && nameIndex !== -1) {
      dob = this.props.patients[nameIndex].dob;
    }
    const generic = $form.generic.value.trim();
    const genericIndex = genericField.indexOf(generic);
    let brand = '';
    let indications = '';
    if (generic && genericIndex !== -1) {
      brand = this.props.items[genericIndex].brand;
      indications = this.props.items[genericIndex].indications;
    }
    const strength = $form.strength.value.trim();

    const dosage = $form.dosage.value.trim();

    console.log({
      name,
      nameIndex,
      dob,
      generic,
      brand,
      indications,
      strength,
      dosage
    });
    let regName = /^[a-zA-Z ]{2,30}$/;

    if (name.match(regName) && generic.match(regName) && strength && dosage) {
      this.props.onSubmit({
        name,
        dob,
        generic,
        brand,
        indications,
        strength,
        dosage
      });
      this.setState({ clearForm: false, hasValidationError: false });
    } else this.setState({ hasValidationError: true });
  };
}
export default PrescribeComponent;
