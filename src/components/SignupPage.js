import React from 'react';
//import Background from '../images/gingham-style-background_1048-2586.jpg';
import SignupComponent from './SignupComponent';

export default function SignupPage({
  //id,
  errorType,
  onSignup
}) {
  return (
    //<div id={id} className="OrderPage">

    <div
      className="SignupPage"
      style={{
        height: '50%',
        width: '45%',
        margin: '60px auto',
        borderStyle: 'solid',
        backgroundColor: 'white'
        //backgroundImage: 'url(' + { Background } + ')'
      }}>
      <SignupComponent onSignup={onSignup} errorType={errorType} />
    </div>
  );
}
