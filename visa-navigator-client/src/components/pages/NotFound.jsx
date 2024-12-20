import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-900">404</h1>
        <p className="mt-4 text-2xl font-semibold text-gray-600">
          Oops! Page not found.
        </p>
        <p className="mt-2 text-gray-500">
          The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-red-600 rounded-lg hover:bg-red-700"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;