import React from 'react';
//import Background from '../images/gingham-style-background_1048-2586.jpg';
import LoginComponent from './LoginComponent';

export default function LoginPage({
  //id,

  onLogin
}) {
  return (
    //<div id={id} className="OrderPage">

    <div
      className="LoginPage"
      style={{
        height: '60%',
        width: '60%',
        margin: '60px auto',
        borderStyle: 'solid',
        backgroundColor: 'MISTYROSE'
        //backgroundImage: 'url(' + { Background } + ')'
      }}>
      <LoginComponent onLogin={onLogin} />
    </div>
  );
}
