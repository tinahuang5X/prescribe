import React from 'react';
//import Background from '../images/gingham-style-background_1048-2586.jpg';
import LoginComponent from './LoginComponent';

export default function LoginPage({
  //id,
  errorType,
  onLogin
}) {
  return (
    <div className="row">
      <img
        alt="welcome"
        className="col s6"
        src="http://aweber.design/gifs/images/Sans/Sans-White-TBG.gif"
        style={{ width: '20%', marginTop: '20%', marginLeft: '8%' }}
      />
      <div
        className="col s6"
        style={{
          height: '50%',
          width: '25%',
          marginLeft: '32%',
          marginTop: '8%',
          borderStyle: 'solid',
          backgroundColor: 'white'
          //backgroundImage: 'url(' + { Background } + ')'
        }}>
        <LoginComponent onLogin={onLogin} errorType={errorType} />
      </div>
    </div>
  );
}
