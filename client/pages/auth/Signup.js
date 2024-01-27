// pages/auth/Signup.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();

    // TODO: Implement sign-up logic using your preferred method
    // For example, you can use NextAuth.js, Firebase, or your custom API endpoint

    try {
      // Assuming you have a sign-up function that returns user data
      const userData = await signup(username, password);
      
      // Redirect to login page upon successful sign-up
      router.push('/auth/login');
    } catch (error) {
      console.error('Sign-up error:', error.message);
      // Handle sign-up error (display error message, redirect, etc.)
    }
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
