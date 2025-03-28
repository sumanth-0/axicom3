import React from 'react';

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How We Help Startups</h2>
          <p className="mt-4 text-xl text-gray-600">
            How is WeXtGen suitable for startups?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature cards */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a41f205f-e29d-436a-a54a-9d575dc368c4?placeholderIfAbsent=true&apiKey=8cbdea57122b4aaa899c21fadd54ce84"
              alt="Mentoring"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-xl font-bold mb-4">Mentoring</h3>
            <p className="text-gray-600">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9f5984f3db49863e1bc041656252dbafee09802?placeholderIfAbsent=true&apiKey=8cbdea57122b4aaa899c21fadd54ce84"
              alt="Workspaces"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-xl font-bold mb-4">Workspaces</h3>
            <p className="text-gray-600">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b98cd56ddc561972d0e3cc06e437bcddd540f157?placeholderIfAbsent=true&apiKey=8cbdea57122b4aaa899c21fadd54ce84"
              alt="Funding"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-xl font-bold mb-4">Funding</h3>
            <p className="text-gray-600">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f98c559732cc00f71378e452fdd09d7c7e6e2e2e?placeholderIfAbsent=true&apiKey=8cbdea57122b4aaa899c21fadd54ce84"
              alt="Newsletter"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-600">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/671e6bf8-aa6b-4b1b-a233-08f72a4451d0?placeholderIfAbsent=true&apiKey=8cbdea57122b4aaa899c21fadd54ce84"
              alt="Ideas hub"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-xl font-bold mb-4">Ideas hub</h3>
            <p className="text-gray-600">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/06f511b827a56d69081a76f43c0a6fad2bdbe090?placeholderIfAbsent=true&apiKey=8cbdea57122b4aaa899c21fadd54ce84"
              alt="Dedicated board"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-xl font-bold mb-4">Dedicated board</h3>
            <p className="text-gray-600">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;