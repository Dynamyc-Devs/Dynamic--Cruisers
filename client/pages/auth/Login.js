// pages/auth/login.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Add your authentication logic here
    // For example, you can make an API request to verify the credentials
    // If successful, you can redirect the user to a dashboard page
    // Otherwise, display an error message

    // For now, let's just redirect to a dashboard page
    router.push('/dashboard');
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
        <Link href="/auth/register">
          <a>Register</a>
        </Link>
      </p>
    </div>
  );
};

export default Login;
