import React from 'react';

const FeaturedStartups = () => {
  const startups = [
    {
      name: 'Dribbble',
      location: 'United States',
      logo: 'https://example.com/dribbble-logo.png',
      isFeatured: true
    },
    {
      name: 'Upwork',
      location: 'United States',
      logo: 'https://example.com/upwork-logo.png',
      isFeatured: false
    },
    {
      name: 'Slack',
      location: 'China',
      logo: 'https://example.com/slack-logo.png',
      isFeatured: false
    },
    {
      name: 'Freepik',
      location: 'United States',
      logo: 'https://example.com/freepik-logo.png',
      isFeatured: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Startups</h2>
          <div className="flex gap-4">
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {startups.map((startup, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{startup.name}</h3>
                    <p className="text-sm text-gray-500 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {startup.location}
                    </p>
                  </div>
                </div>
                {startup.isFeatured && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Featured</span>
                )}
              </div>
              <button className="w-full bg-gray-50 text-gray-700 py-2 rounded hover:bg-gray-100 transition-colors">
                Open Position
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStartups;