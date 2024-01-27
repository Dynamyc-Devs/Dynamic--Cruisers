// Signup.js
import React from 'react';
import signupHtml from './signup.html';

function Signup() {
  return (
    <div dangerouslySetInnerHTML={{ __html: signupHtml }} />
  );
}

export default Signup;
