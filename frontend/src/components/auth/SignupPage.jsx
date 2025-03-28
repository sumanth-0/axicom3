import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthMonth: '',
    birthDay: '',
    birthYear: '',
    country: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.birthMonth || !formData.birthDay || !formData.birthYear) {
      newErrors.birthDate = 'Birth date is required';
    }

    if (!formData.country) {
      newErrors.country = 'Country is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate a successful signup
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Account created successfully!');
      navigate('/login');
    } catch (error) {
      toast.error('Failed to create account. Please try again.');
    }
  };

  const handleSocialLogin = (platform) => {
    toast.info(`${platform} login coming soon!`);
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Sign Up Form */}
      <div className="w-2/3 p-8 flex flex-col items-center justify-center">
        <div className="max-w-md w-full">
          <div className="mb-8 flex justify-center">
            <div className="flex items-center">
              
              <span className="text-xl font-semibold"></span>
              <br></br>
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-8">Create Your Account</h1>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className={`w-full border-b-2 ${errors.email ? 'border-red-500' : 'border-green-600'} py-2 focus:outline-none`}
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className={`w-full border-b-2 ${errors.password ? 'border-red-500' : 'border-gray-300'} py-2 focus:outline-none`}
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Name Fields */}
            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className={`w-full border-b-2 ${errors.firstName ? 'border-red-500' : 'border-gray-300'} py-2 focus:outline-none`}
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className={`w-full border-b-2 ${errors.lastName ? 'border-red-500' : 'border-gray-300'} py-2 focus:outline-none`}
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            {/* Birth Information */}
            <div className="mb-1">
              <p className="text-sm text-gray-600">Birth information</p>
            </div>
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                name="birthMonth"
                placeholder="Month"
                className="w-1/3 border-b-2 border-gray-300 py-2 focus:outline-none"
                value={formData.birthMonth}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="birthDay"
                placeholder="Day"
                className="w-1/3 border-b-2 border-gray-300 py-2 focus:outline-none"
                value={formData.birthDay}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="birthYear"
                placeholder="Year"
                className="w-1/3 border-b-2 border-gray-300 py-2 focus:outline-none"
                value={formData.birthYear}
                onChange={handleChange}
                required
              />
            </div>
            {errors.birthDate && <p className="text-red-500 text-sm mb-4">{errors.birthDate}</p>}

            {/* Country/Region */}
            <div className="mb-6 relative">
              <select
                name="country"
                className={`w-full border-b-2 ${errors.country ? 'border-red-500' : 'border-gray-300'} py-2 bg-white focus:outline-none appearance-none`}
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Country/Region</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="AU">Australia</option>
                <option value="IN">India</option>
                <option value="SG">Singapore</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="JP">Japan</option>
                <option value="CN">China</option>
              </select>
              <div className="absolute right-0 top-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-full mb-4 transition-colors duration-200"
            >
              SIGN UP
            </button>
          </form>

          {/* Terms */}
          <div className="text-xs text-center mb-6">
            By clicking Create account, I agree that I have read and accepted the{' '}
            <a href="#" className="text-blue-600 hover:underline">Terms of Use</a> and{' '}
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
          </div>

          <div className="text-center mb-4">or use account</div>

          {/* Social Logins */}
          <div className="space-y-3">
            <button 
              type="button"
              onClick={() => handleSocialLogin('Twitter')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
              TWITTER
            </button>
            <button 
              type="button"
              onClick={() => handleSocialLogin('Facebook')}
              className="w-full bg-blue-800 hover:bg-blue-900 text-white py-3 px-4 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
              FACEBOOK
            </button>
            <button 
              type="button"
              onClick={() => handleSocialLogin('Google')}
              className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 px-4 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
              </svg>
              GOOGLE
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Green Login Section */}
      <div className="w-1/3 bg-green-600 text-white flex flex-col items-center justify-center p-8">
        <div className="text-center max-w-xs">
          <h2 className="text-3xl font-bold mb-4">Welcome back!</h2>
          <p className="mb-8">To keep connected with us please signin</p>
          <button 
            onClick={() => navigate('/login')}
            className="border-2 border-white hover:bg-white hover:text-green-600 text-white font-bold py-2 px-12 rounded-full transition-colors duration-200"
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage; 