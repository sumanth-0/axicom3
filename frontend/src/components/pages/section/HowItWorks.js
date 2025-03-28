import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How we work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="path-to-icon" alt="Sign up" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Sign Up & Create Profile</h3>
            <p className="text-gray-600">Register and share details about your startup journey.</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="path-to-icon" alt="Validate" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Validate & Refine Your Idea</h3>
            <p className="text-gray-600">Use our Idea Hub, get expert feedback, and refine your startup concept.</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="path-to-icon" alt="Build" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Build & Scale Your Startup</h3>
            <p className="text-gray-600">Access mentorship, funding, and workspace to develop your MVP.</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="path-to-icon" alt="Launch" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Launch & Grow</h3>
            <p className="text-gray-600">Take your startup to market and expand your business.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;