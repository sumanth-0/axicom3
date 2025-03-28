import React from 'react';

const Profile = ({ userEmail }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
        <p className="text-gray-700">Email: {userEmail}</p>
        {/* Add more user information here as needed */}
      </div>
    </div>
  );
};

export default Profile; 