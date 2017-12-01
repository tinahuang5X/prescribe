import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class RxPadComponent extends Component {
  //   items,
  //   patientInfo = {},
  //   onTransmit = () => {}
  // })

  //console.log(d);
  //console.log(typeof d);
  //console.log(items);
  render() {
    let d = new Date().toDateString();
    return (
      <div
        className="card-panel grey lighten-3 RxPadComponent"
        style={{ width: '400px' }}>
        <img
          src="http://www.ipharmd.net/images/rx_bold_red_box.png"
          alt="rxImage"
          width="50px"
        />&nbsp;&nbsp;&nbsp;<div
          style={{
            marginTop: '10px',
            // marginBottom: '30px',
            // marginLeft: '30px',
            // textAlign: 'right',
            textDecoration: 'underline'
          }}>
          Date:&nbsp;&nbsp;{d}
        </div>
        <p>
          Patient Name:&nbsp;&nbsp;&nbsp;
          <span style={{ textDecoration: 'underline' }}>
            {this.props.patientInfo ? this.props.patientInfo.name : null}
          </span>&nbsp;&nbsp;&nbsp; DOB:&nbsp;&nbsp;
          <span style={{ textDecoration: 'underline' }}>
            {this.props.patientInfo ? this.props.patientInfo.dob : null}
          </span>
        </p>
        {this.props.items.map((item, index) =>
          <span className="drug" key={index} style={{ fontSize: 'large' }}>
            {item.generic} {item.dosage} <br />
          </span>
        )}
        <p>
          approved by:&nbsp;&nbsp;
          <span style={{ textDecoration: 'underline' }}>Dr. </span>
        </p>
        <button
          className="waves-effect waves-light btn red darken-2"
          onClick={this.handleClick}>
          TRANSMIT TO PHARMACY
        </button>
      </div>
    );
  }
  handleClick = event => {
    this.props.onTransmit();
  };
}

export default withRouter(RxPadComponent);
