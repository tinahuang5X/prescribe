import React, { Component } from 'react';
import HelloComponent from './HelloComponent';

class HelloPage extends Component {
  render() {
    return (
      <div className="row">
        <img
          alt="welcome"
          className="col s6"
          src="https://bretonbrander.files.wordpress.com/2016/02/aftereffects-liquid.gif"
          style={{ width: '20%', marginTop: '15%', marginLeft: '8%' }}
        />
        <div
          className="col s4"
          style={{
            marginTop: '4%',
            marginLeft: '30%'
          }}>
          <HelloComponent />
        </div>
      </div>
    );
  }
}

export default HelloPage;
