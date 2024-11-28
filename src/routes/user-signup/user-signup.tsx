import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

export default function UserSignup() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [signup, setSignup] = useState<boolean>(true);
  const [role, setRole] = useState<string>('User');  // Default role is 'user'

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('User signup:', { name, email, password, role });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-2">{signup ? `${role} Sign Up` : `${role} Log In`}</h2>
        <p className="text-gray-600 mb-6">
            {
                 role === 'Admin' ? (
                    signup ? 'Create a new account to access our courses' : 'Access your account'
                 ):(
                    signup ? 'Create new courses in our platform' : 'Access your account'
                 )
            }
         
        </p>
        <form onSubmit={handleSignup}>
          <div className="space-y-4">
            {/* Dropdown for role selection */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">Select Role</label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            {signup && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {signup ? 'Sign Up' : 'Log In'}
          </button>
        </form>
        {
          signup ? (
            <p className="mt-4 text-center">
              Already have an account?
              <button
                className="text-indigo-600 hover:text-indigo-500"
                onClick={() => setSignup(false)}
              >
                Log In
              </button>
            </p>
          ) : (
            <div className="mt-4 flex justify-between">
              <button
                className="text-sm text-indigo-600 hover:text-indigo-500"
                onClick={() => setSignup(true)}
              >
                Create an account
              </button>
              <Link to="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </Link>
            </div>
          )
        }
      </div>
    </div>
  );
}
