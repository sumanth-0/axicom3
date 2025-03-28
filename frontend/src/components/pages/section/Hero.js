import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Empowering Startups, Connecting Founders, Unlocking Opportunities
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              WeXtGen is a one-stop platform that provides founders with curated resources,
              mentorship, access to investors, workspaces, and jobs.
            </p>
            <button
              onClick={() => navigate('/signup')}
              className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors"
            >
              Get Started
            </button>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5efcfaf41ef2f994275940621789fd7b9260385"
              alt="Hero illustration"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {[
            { count: '1,75,324', label: 'Live Jobs', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/902edc430cb85037afa35ef427d065ec73c47bb9' },
            { count: '1,300', label: 'Workspaces', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/829ef1bd628c31057f2914b765d9cd4786119ac3' },
            { count: '38,47,154', label: 'Candidates', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9cef83acb2eda85539491435e1b34b806e7c6750' },
            { count: '7,532', label: 'Mentors', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3c8cdb13bd68e6df5c02e5aca21820e0eab78e11' }
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <img src={item.icon} alt={item.label} className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-2xl font-bold text-gray-900">{item.count}</span>
                <span className="text-gray-600">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;