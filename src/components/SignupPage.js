import React from 'react';
//import Background from '../images/gingham-style-background_1048-2586.jpg';
import SignupComponent from './SignupComponent';

export default function SignupPage({
  //id,

  onSignup
}) {
  return (
    //<div id={id} className="OrderPage">

    <div
      className="SignupPage"
      style={{
        height: '60%',
        width: '60%',
        margin: '60px auto',
        borderStyle: 'solid',
        backgroundColor: 'MISTYROSE'
        //backgroundImage: 'url(' + { Background } + ')'
      }}>
      <SignupComponent onSignup={onSignup} />
    </div>
  );
}
