'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function SignInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('credentials', {
      username,
      password,
      callbackUrl: '/',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl mb-4">Admin Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 px-3 py-2 bg-gray-700 border border-gray-600 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-3 py-2 bg-gray-700 border border-gray-600 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
