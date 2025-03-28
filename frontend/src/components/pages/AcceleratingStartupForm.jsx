"use client";
import React, { useState } from "react";
import styles from "../styles/AcceleratingStartupForm.module.css"; // Create this CSS file for styles
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AcceleratingStartupForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    teamSize: "",
    companyWebsite: "",
    incorporationStatus: "Registered",
    businessModel: "B2C",
    yearOfEstablishment: "",
    ideaCategory: "Healthcare",
    ideaStage: "MVP",
    productTitle: "",
    productDescription: "",
    supportingDocument: null,
    appliedForFunding: "No",
    receivedFunding: "No",
    fundingDetails: "",
    fundingStage: "Seed",
    ipPatentFiled: "No",
    challengesFaced: "",
    mentorshipNeeds: "",
    termsAgreed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      supportingDocument: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to CreateProject page with form data
    navigate('/create-project', { state: { formData } });
  };

  return (
    <div className={styles.container}>
      <h1>Share Your Startup Idea</h1>
      <p>Fill out the form to share your startup idea and begin your innovation journey with expert guidance and support.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>
        <label>
          Company Name:
          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </label>
        <label>
          Team Size:
          <input type="number" name="teamSize" value={formData.teamSize} onChange={handleChange} required />
        </label>
        <label>
          Company Website:
          <input type="url" name="companyWebsite" value={formData.companyWebsite} onChange={handleChange} />
        </label>
        <label>
          Incorporation Status:
          <select name="incorporationStatus" value={formData.incorporationStatus} onChange={handleChange}>
            <option value="Registered">Registered</option>
            <option value="Not Registered">Not Registered</option>
          </select>
        </label>
        <label>
          Business Model:
          <select name="businessModel" value={formData.businessModel} onChange={handleChange}>
            <option value="B2C">B2C</option>
            {/* Add more business models as needed */}
          </select>
        </label>
        <label>
          Year of Establishment:
          <input type="number" name="yearOfEstablishment" value={formData.yearOfEstablishment} onChange={handleChange} />
        </label>
        <label>
          Idea Category:
          <select name="ideaCategory" value={formData.ideaCategory} onChange={handleChange}>
            <option value="Healthcare">Healthcare</option>
            {/* Add more categories as needed */}
          </select>
        </label>
        <label>
          Idea Stage:
          <select name="ideaStage" value={formData.ideaStage} onChange={handleChange}>
            <option value="MVP">MVP</option>
            {/* Add more stages as needed */}
          </select>
        </label>
        <label>
          Product Title:
          <input type="text" name="productTitle" value={formData.productTitle} onChange={handleChange} required />
        </label>
        <label>
          Product Description (50/300):
          <textarea name="productDescription" value={formData.productDescription} onChange={handleChange} maxLength="300" required />
        </label>
        <label>
          Upload Supporting Document:
          <input type="file" onChange={handleFileChange} />
        </label>
        <p>Attach relevant files such as PDF, Word, PPT, video, or image formats to help us better understand your idea. (Max size: 20MB)</p>
        <label>
          Have you applied for any other fundings?
          <select name="appliedForFunding" value={formData.appliedForFunding} onChange={handleChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Have you received any other fundings?
          <select name="receivedFunding" value={formData.receivedFunding} onChange={handleChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          If yes, please provide the details below:
          <textarea name="fundingDetails" value={formData.fundingDetails} onChange={handleChange} />
        </label>
        <label>
          IP/Patent filed:
          <select name="ipPatentFiled" value={formData.ipPatentFiled} onChange={handleChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Any Challenges faced? (Optional)
          <textarea name="challengesFaced" value={formData.challengesFaced} onChange={handleChange} />
        </label>
        <label>
          Upload Supporting Document:
          <input type="file" onChange={handleFileChange} />
        </label>
        <p>Attach the Registration/Approved documents in the form of PDF, JPEG, JPG formats. (Max size: 20MB)</p>
        <label>
          <input type="checkbox" name="termsAgreed" checked={formData.termsAgreed} onChange={() => setFormData({ ...formData, termsAgreed: !formData.termsAgreed })} />
          I agree with Terms and Conditions
        </label>
        <button type="submit" className={styles.button} disabled={!formData.termsAgreed}>
          Submit Idea
        </button>
      </form>
    </div>
  );
};

export default AcceleratingStartupForm; 