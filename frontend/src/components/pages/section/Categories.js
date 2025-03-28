import React from 'react';

const Categories = () => {
  const categories = [
    { title: 'Graphics & Design', positions: 357, icon: '🎨' },
    { title: 'Code & Programming', positions: 312, icon: '💻' },
    { title: 'Digital Marketing', positions: 297, icon: '📱' },
    { title: 'Video & Animation', positions: 247, icon: '🎥' },
    { title: 'Music & Audio', positions: 204, icon: '🎵' },
    { title: 'Account & Finance', positions: 167, icon: '💰' },
    { title: 'Health & Care', positions: 125, icon: '🏥' },
    { title: 'Data & Science', positions: 57, icon: '📊' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Popular Categories</h2>
          <button className="text-green-600 hover:text-green-700 flex items-center">
            View All
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <span className="text-2xl mr-4">{category.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{category.title}</h3>
                  <p className="text-sm text-gray-500">{category.positions} Open positions</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;