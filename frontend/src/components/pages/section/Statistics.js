import React from 'react';

const Statistics = () => {
  const stats = [
    { number: '2,344', title: 'Total Startups', description: 'Innovative founders building the future' },
    { number: '232', title: 'Workspaces Available', description: 'Collaborative spaces worldwide' },
    { number: '578', title: 'Mentors', description: 'Industry experts guiding startups' },
    { number: '$15M+', title: 'Successful Fundings', description: 'Capital raised through our platform' },
    { number: '232', title: 'Investors Connected', description: 'Active investors on platform' },
    { number: '578', title: 'Jobs Posted', description: 'Open positions for talent' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Empowering Startups, Connecting Innovators
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our platform brings together founders, investors, and talent to create a thriving startup ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
              <span className="text-4xl font-bold text-green-600">{stat.number}</span>
              <h3 className="text-xl font-bold text-gray-900 mt-2">{stat.title}</h3>
              <p className="text-gray-600 mt-2">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;