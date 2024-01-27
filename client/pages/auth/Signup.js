// Signup.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';

function Signup() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle signup logic here

    // For example, redirect to home page after signup
    router.push('/');
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        {/* Add your signup form fields here */}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
