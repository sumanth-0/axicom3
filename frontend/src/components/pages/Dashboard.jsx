import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Innovators from './Innovators';

const Dashboard = ({ isAuthenticated, userEmail, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const roles = [
    {
      title: 'Innovators',
      subtitle: '(Startup Users)',
      description: 'Turn your startup dream into reality! Pitch your ideas, gain traction, and connect with investors, mentors, and collaborators to scale your business.',
      icon: '🚀'
    },
    {
      title: 'Visionaries',
      subtitle: '(Investors)',
      description: 'Fuel the next big idea! Discover promising startups, invest in groundbreaking innovations, and be a part of the future of entrepreneurship.',
      icon: '💡'
    },
    {
      title: 'Enablers',
      subtitle: '(Workspace Providers)',
      description: 'Empower startups with the perfect workspace! List your co-working spaces, incubators, or offices and support budding entrepreneurs with an inspiring environment.',
      icon: '🏢'
    },
    {
      title: 'Go-Getters',
      subtitle: '(Job Seekers)',
      description: 'Kickstart your career with exciting startup opportunities! Connect with innovative companies, explore dynamic roles, and be part of the next revolution.',
      icon: '💼'
    },
    {
      title: 'Guiding Lights',
      subtitle: '(Mentorship Providers)',
      description: 'Shape the future of startups! Share your expertise, mentor budding entrepreneurs, and help turn ideas into successful businesses.',
      icon: '🌟'
    }
  ];

  const projects = [
    { name: "Project Alpha", stage: "Ideation", status: "In Progress" },
    { name: "Project Beta", stage: "Development", status: "Completed" },
    { name: "Project Gamma", stage: "Testing", status: "Pending" },
    { name: "Project Delta", stage: "Research", status: "In Progress" },
    { name: "Project Epsilon", stage: "Planning", status: "Not Started" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-8 h-8 rounded-full border-4 border-green-600 mr-2"></div>
            <span className="text-3xl font-bold">WeXtGen</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Amazing Market Place
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Step into the world of innovation! Choose your role and unlock endless opportunities to connect, collaborate, and grow in the startup ecosystem.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{role.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {role.title}
              </h2>
              <h3 className="text-lg text-green-600 mb-4">
                {role.subtitle}
              </h3>
              <p className="text-gray-600">
                {role.description}
              </p>
              <button
                onClick={() => {
                  if (role.title === 'Innovators') {
                    navigate('/innovators');
                  } else {
                    navigate(`/${role.title.toLowerCase()}`);
                  }
                }}
                className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>


        
      </div>
    </div>
  );
};

export default Dashboard; 