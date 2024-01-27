// Login.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';

function Login() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle login logic here

    // For example, redirect to home page after login
    router.push('/');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {/* Add your login form fields here */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
