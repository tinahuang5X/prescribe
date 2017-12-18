import React from 'react';
//import Background from '../images/gingham-style-background_1048-2586.jpg';
import LoginComponent from './LoginComponent';

export default function LoginPage({
  //id,
  errorType,
  onLogin
}) {
  return (
    //<div id={id} className="OrderPage">

    <div
      className="LoginPage"
      style={{
        height: '50%',
        width: '40%',
        margin: '60px auto',
        borderStyle: 'solid',
        backgroundColor: 'white'
        //backgroundImage: 'url(' + { Background } + ')'
      }}>
      <LoginComponent onLogin={onLogin} errorType={errorType} />
    </div>
  );
}
