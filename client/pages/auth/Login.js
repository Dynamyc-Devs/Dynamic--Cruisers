// Login.js
import React from 'react';
import loginHtml from './login.html';

function Login() {
  return (
    <div dangerouslySetInnerHTML={{ __html: loginHtml }} />
  );
}

export default Login;
