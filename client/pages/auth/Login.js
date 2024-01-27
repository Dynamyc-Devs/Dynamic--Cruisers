// Login.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';

function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate login logic (replace with actual login)
    // For simplicity, consider login successful for any input
    // In a real application, you should send a request to your backend for user authentication
    // and handle the response appropriately.

    try {
      // Here, you can perform actual login logic, for example, using an API call to your backend
      // For now, we'll simulate a successful login
      // Replace this with your actual login logic
      // For example, you can use fetch or axios to send a request to your server
      // and handle the server's response.

      // Simulating a successful login
      // You may want to redirect to a different page after successful login
      // For now, we'll redirect to the home page
      router.push('/');
    } catch (error) {
      // Handle login error (if any)
      setError('Failed to login. Please check your username and password.');
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
