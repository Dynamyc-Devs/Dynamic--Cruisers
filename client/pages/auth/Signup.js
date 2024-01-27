// Signup.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';

function Signup() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate signup logic (replace with actual signup)
    // For simplicity, consider signup successful for any input
    // In a real application, you should send a request to your backend for user registration
    // and handle the response appropriately.

    try {
      // Here, you can perform actual signup logic, for example, using an API call to your backend
      // For now, we'll simulate a successful signup
      // Replace this with your actual signup logic
      // For example, you can use fetch or axios to send a request to your server
      // and handle the server's response.

      // Simulating a successful signup
      // You may want to redirect to a different page after successful signup
      // For now, we'll redirect to the home page
      router.push('/');
    } catch (error) {
      // Handle signup error (if any)
      setError('Failed to signup. Please try again.');
      console.error('Signup failed:', error);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
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
        <button type="submit">Signup</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default Signup;
