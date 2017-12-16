import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class PrescribeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { hasValidationError: false };
  }
  render() {
    let d = new Date().toDateString();
    const nameField = [];
    const dobField = [];
    const genericField = [];
    const brandField = [];
    const indicationsField = [];
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
      for (let patients of this.props.patients) {
        nameField.push(patients.name);
        dobField.push(patients.dob);
      }
    }

    if (this.props.items && Array.isArray(this.props.items)) {
      for (let item of this.props.items) {
        genericField.push(item.generic);
        brandField.push(item.brand);
        indicationsField.push(item.indications);
      }
    }
    let firstName = localStorage.getItem('firstName');
    let lastName = localStorage.getItem('lastName');
    //console.log(firstName, lastName);

    return (
      <div
        className="PrescribeComponent"
        style={{
          width: '800px',
          height: '1100px',
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
          {/* <AutoComplete
            id="dob"
            floatingLabelText="Type or select a patient's date of birth (case insensitive)"
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
            dataSource={dobField}
          /> */}
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
          {/* <AutoComplete
            id="brand"
            floatingLabelText="Type or select a brand name (case insensitive)"
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
            dataSource={brandField}
          /> */}
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
          {/* <AutoComplete
            id="indications"
            floatingLabelText="Type or select an indication (case insensitive)"
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
            dataSource={indicationsField}
          /> */}
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

          <h5>
            <span
              style={{
                fontSize: '18px',
                textDecoration: 'underline',
                marginLeft: '120px'
              }}>
              approved by: Dr. {firstName} {lastName}
            </span>
          </h5>
          <br />
          <br />

          <div className="col s12 center">
            <button
              className="btn waves-effect waves-light light-blue lighten-1"
              type="submit"
              name="action"
              style={{ marginRight: '10%' }}>
              SEND TO PHARMACY
            </button>
            <br />
            <br />
            {this.state.hasValidationError
              ? <p
                  style={{
                    color: 'red',
                    fontWeight: 'bold',
                    // textAlign: 'center',
                    marginLeft: '240px'
                  }}>
                  Please enter valid data.
                </p>
              : null}
          </div>
        </form>
      </div>
    );
  }
  handleSubmit = event => {
    //const { onSubmit } = this.props;
    event.preventDefault();
    const $form = event.target;
    const name = $form.name.value.trim();
    const dob = $form.dob.value.trim();
    const generic = $form.generic.value.trim();
    const brand = $form.brand.value.trim();
    const strength = $form.strength.value.trim();
    const indications = $form.indications.value.trim();
    const dosage = $form.dosage.value.trim();

    console.log({ name, dob, generic, brand, strength, indications, dosage });
    let regName = /^[a-zA-Z ]{2,30}$/;
    if (
      name.match(regName) &&
      dob &&
      generic.match(regName) &&
      brand.match(regName) &&
      strength &&
      indications &&
      dosage
    ) {
      this.props.onSubmit({
        name,
        dob,
        generic,
        brand,
        strength,
        indications,
        dosage
      });
    } else this.setState({ hasValidationError: true });
  };
}
export default PrescribeComponent;
