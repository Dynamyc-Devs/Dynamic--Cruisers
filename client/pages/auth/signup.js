// pages/auth/signup.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();

    // Add your sign-up logic here
    // For example, you can make an API request to create a new user
    // If successful, you can redirect the user to the login page
    // Otherwise, display an error message

    // For now, let's just redirect to the login page
    router.push('/auth/login');
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account?{' '}
        <Link href="/auth/login">
          <a>Login</a>
        </Link>
      </p>
    </div>
  );
};

export default Signup;
