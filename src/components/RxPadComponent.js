import React from 'react';

export default function RxPadComponent({
  items,
  patientInfo = {},
  onTransmit = () => {}
}) {
  function handleClick(event) {
    onTransmit();
  }

  let d = new Date().toDateString();
  //console.log(d);
  //console.log(typeof d);
  console.log(items);
  return (
    <div
      className="card-panel grey lighten-3 RxPadComponent"
      style={{ width: '400px' }}>
      <img
        src="http://www.clker.com/cliparts/5/8/6/4/1267321431676379771rx%20medical%20button.svg.med.png"
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
          {patientInfo ? patientInfo.name : null}
        </span>&nbsp;&nbsp;&nbsp; DOB:&nbsp;&nbsp;
        <span style={{ textDecoration: 'underline' }}>
          {patientInfo ? patientInfo.dob : null}
        </span>
      </p>
      {items.map((item, index) =>
        <span className="drug" key={index} style={{ fontSize: 'large' }}>
          {item.generic} {item.dosage} <br />
        </span>
      )}
      <p>
        approved by:
        <span style={{ textDecoration: 'underline' }}>Dr. Tina Huang</span>
      </p>
      <button className="waves-effect waves-light btn" onClick={handleClick}>
        TRANSMIT TO PHARMACY
      </button>
    </div>
  );
}
