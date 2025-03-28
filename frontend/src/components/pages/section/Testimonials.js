import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marco Kihn",
      role: "Happy Client",
      text: "Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f55cbf38120383765f8410d76915c34abca5e44?placeholderIfAbsent=true&apiKey=8cbdea57122b4aaa899c21fadd54ce84",
      stars: 5,
      heading: "Amazing services"
    },
    {
      name: "Kristin Hester",
      role: "Happy Client",
      text: "Mus etiam et vestibulum venenatis viverra ut. Elit morbi bibendum ullamcorper augue faucibus",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fd7e36f0b3e78f54c6e4c6c347e807ae62ff068e?placeholderIfAbsent=true&apiKey=8cbdea57122b4aaa899c21fadd54ce84",
      stars: 5,
      heading: "Everything simple"
    },
    {
      name: "Zion Cisneros",
      role: "Happy Client",
      text: "Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis viverra ut. Elit morbi bibendum ullamcorper augue faucibus. Nulla et tempor montes",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a306c513a094582ecfd0096b4d7beae1d51d53f?placeholderIfAbsent=true&apiKey=8cbdea57122b4aaa899c21fadd54ce84",
      stars: 5,
      heading: "Awesome, thank you!"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Testimonials from Our Customers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <img
                    key={i}
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6b90ee74b123170b324ceb4fa7dd578bc655a5a?placeholderIfAbsent=true&apiKey=8cbdea57122b4aaa899c21fadd54ce84"
                    alt="Star"
                    className="w-5 h-5"
                  />
                ))}
              </div>
              <h3 className="text-xl font-bold mb-4">{testimonial.heading}</h3>
              <p className="text-gray-600 mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;