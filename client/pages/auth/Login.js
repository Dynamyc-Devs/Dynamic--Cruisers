// pages/auth/Login.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    // TODO: Implement authentication logic using your preferred method
    // For example, you can use NextAuth.js, Firebase, or your custom API endpoint

    try {
      // Assuming you have an authentication function that returns user data
      const userData = await authenticate(username, password);
      
      // Redirect to dashboard upon successful login
      router.push('/dashboard');
    } catch (error) {
      console.error('Authentication error:', error.message);
      // Handle authentication error (display error message, redirect, etc.)
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account?{' '}
        <Link href="/auth/signup">
          <a>Register</a>
        </Link>
      </p>
    </div>
  );
};

export default Login;
