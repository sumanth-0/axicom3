import React from 'react';

const Blog = () => {
  const posts = [
    {
      image: 'https://example.com/blog1.jpg',
      category: 'News',
      date: '30 March 2024',
      title: 'Revitalizing Workplace Morale: Innovative Tactics for Boosting Employee Engagement in 2024'
    },
    {
      image: 'https://example.com/blog2.jpg',
      category: 'Blog',
      date: '30 March 2024',
      title: 'How to avoid the top six most common startup mistakes'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">News and Blog</h2>
            <p className="mt-2 text-gray-600">Stay updated with the latest startup trends and insights</p>
          </div>
          <a href="#" className="text-green-600 hover:text-green-700">View all</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <div className="h-48 bg-gray-200"></div>
                <span className="absolute top-4 left-4 bg-green-600 text-white text-sm px-3 py-1 rounded">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-500">{post.date}</time>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">{post.title}</h3>
                <a href="#" className="mt-4 inline-flex items-center text-green-600 hover:text-green-700">
                  Read more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;