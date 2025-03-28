import React from 'react';
import { useNavigate } from 'react-router-dom';

const Innovators = () => {
  const navigate = useNavigate();

  const handleSaveAndContinue = () => {
    // Save logic here (e.g., form submission)
    navigate('/project-dashboard'); // Navigate to the project dashboard
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">WeXtGen</h1>

        <p className="text-lg text-gray-600 mb-4">
          Fill out the form to share your startup idea and begin your innovation journey with expert guidance and support.
        </p>
        
        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">Profile Picture</label>
            <input type="file" id="profilePicture" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
            <p className="mt-2 text-sm text-gray-500">A photo larger than 400 pixels works best. Max photo size 5 MB.</p>
          </div>
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio Description</label>
            <textarea id="bio" rows="3" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"></textarea>
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input type="text" id="location" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">LinkedIn Profile (Optional)</label>
            <input type="text" id="linkedin" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website (Optional)</label>
            <input type="text" id="website" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry</label>
            <input type="text" id="industry" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label htmlFor="education" className="block text-sm font-medium text-gray-700">Education (Optional)</label>
            <input type="text" id="education" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Previous Experience</label>
            <textarea id="experience" rows="3" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"></textarea>
          </div>
          <div>
            <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills/Expertise</label>
            <input type="text" id="skills" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Are There any Startup?</label>
            <div>
              <input type="radio" id="yes" name="startup" value="yes" />
              <label htmlFor="yes" className="ml-2">Yes</label>
            </div>
            <div>
              <input type="radio" id="no" name="startup" value="no" />
              <label htmlFor="no" className="ml-2">No</label>
            </div>
          </div>
          <div>
            <label htmlFor="startupName" className="block text-sm font-medium text-gray-700">Startup Name</label>
            <input type="text" id="startupName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label htmlFor="startupStage" className="block text-sm font-medium text-gray-700">Startup Stage</label>
            <input type="text" id="startupStage" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label htmlFor="startupDescription" className="block text-sm font-medium text-gray-700">Startup Description</label>
            <textarea id="startupDescription" rows="3" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"></textarea>
          </div>
          <div>
            <label htmlFor="fundingStatus" className="block text-sm font-medium text-gray-700">Funding Status</label>
            <input type="text" id="fundingStatus" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms" className="ml-2">I agree with Terms and Conditions</label>
          </div>
          <button type="button" onClick={handleSaveAndContinue} className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300">
            Save and Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Innovators; 