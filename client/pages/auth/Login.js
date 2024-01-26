import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Import the useRouter hook
import Link from 'next/link';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const router = useRouter(); // Use the useRouter hook

  const handleLogin = (e) => {
    e.preventDefault();

    // Add your authentication logic here
    // For example, you can make an API request to verify the credentials
    // If successful, you can update the state with a success message
    // Otherwise, update the state with an error message

    // For now, let's just log the credentials and display a message
    console.log('Username:', username);
    console.log('Password:', password);

    // Simulate a successful login
    setLoginMessage('Login successful!');

    // Redirect to create account page after a brief delay
    setTimeout(() => {
      router.push('/auth/register');
    }, 3000);
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

      {/* Display login message */}
      {loginMessage && <p>{loginMessage}</p>}

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
