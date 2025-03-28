import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from './styles/StartupIdeaForm.module.css';

const StartupIdeaForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    ideaCategory: 'Healthcare',
    problemStatement: '',
    ideaStage: 'Research',
    proposedSolution: '',
    ideaDescription: '',
    supportingDocument: null,
    appliedForFunding: 'No',
    receivedFunding: 'No',
    fundingDetails: '',
    termsAgreed: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      supportingDocument: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create new project from form data
    const newProject = {
      id: Date.now().toString(),
      name: formData.companyName,
      description: formData.ideaDescription,
      category: formData.ideaCategory,
      stage: formData.ideaStage,
      status: 'In Progress',
      createdAt: new Date().toISOString(),
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      problemStatement: formData.problemStatement,
      proposedSolution: formData.proposedSolution,
      appliedForFunding: formData.appliedForFunding,
      receivedFunding: formData.receivedFunding,
      fundingDetails: formData.fundingDetails
    };

    // Get existing projects
    const existingProjects = JSON.parse(localStorage.getItem('projects') || '[]');
    
    // Add new project
    const updatedProjects = [...existingProjects, newProject];
    
    // Save to localStorage
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    
    // Show success message
    toast.success('Project created successfully!');
    
    // Navigate to create project page
    navigate('/create-project');
  };

  return (
    <div className={styles.container}>
      <h1>Share Your Startup Idea</h1>
      <p>Fill out the form to share your startup idea and begin your innovation journey with expert guidance and support.</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>
            Full Name:
            <input 
              type="text" 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleChange} 
              required 
            />
          </label>
        </div>

        <div className={styles.formGroup}>
          <label>
            Company Name:
            <input 
              type="text" 
              name="companyName" 
              value={formData.companyName} 
              onChange={handleChange} 
              required 
            />
          </label>
        </div>

        <div className={styles.formGroup}>
          <label>
            Email:
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </label>
        </div>

        <div className={styles.formGroup}>
          <label>
            Phone Number:
            <input 
              type="tel" 
              name="phoneNumber" 
              value={formData.phoneNumber} 
              onChange={handleChange} 
              required 
            />
          </label>
        </div>

        <div className={styles.formGroup}>
          <label>
            Idea Category:
            <select name="ideaCategory" value={formData.ideaCategory} onChange={handleChange}>
              <option value="Healthcare">Healthcare</option>
              <option value="IoT">IoT</option>
              <option value="AI/ML">AI/ML</option>
              <option value="Blockchain">Blockchain</option>
              <option value="FinTech">FinTech</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>

        <div className={styles.formGroup}>
          <label>
            Problem Statement:
            <textarea 
              name="problemStatement" 
              value={formData.problemStatement} 
              onChange={handleChange} 
              required 
            />
          </label>
        </div>

        <div className={styles.formGroup}>
          <label>
            Idea Stage:
            <select name="ideaStage" value={formData.ideaStage} onChange={handleChange}>
              <option value="Research">Research</option>
              <option value="Ideation">Ideation</option>
              <option value="Development">Development</option>
              <option value="Testing">Testing</option>
              <option value="Launch">Launch</option>
            </select>
          </label>
        </div>

        <div className={styles.formGroup}>
          <label>
            Proposed Solution:
            <textarea 
              name="proposedSolution" 
              value={formData.proposedSolution} 
              onChange={handleChange} 
              required 
            />
          </label>
        </div>

        <div className={styles.formGroup}>
          <label>
            Idea Description (50/300):
            <textarea 
              name="ideaDescription" 
              value={formData.ideaDescription} 
              onChange={handleChange} 
              maxLength="300" 
              required 
            />
          </label>
        </div>

        <div className={styles.formGroup}>
          <label>
            Upload Supporting Document:
            <input type="file" onChange={handleFileChange} />
          </label>
          <p className={styles.helpText}>
            Attach relevant files such as PDF, Word, PPT, video, or image formats to help us better understand your idea. (Max size: 20MB)
          </p>
        </div>

        <div className={styles.formGroup}>
          <label>
            Have you applied for any other fundings?
            <select name="appliedForFunding" value={formData.appliedForFunding} onChange={handleChange}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
        </div>

        <div className={styles.formGroup}>
          <label>
            Have you received any other fundings?
            <select name="receivedFunding" value={formData.receivedFunding} onChange={handleChange}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
        </div>

        <div className={styles.formGroup}>
          <label>
            If yes, please provide the details below:
            <textarea 
              name="fundingDetails" 
              value={formData.fundingDetails} 
              onChange={handleChange} 
            />
          </label>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.checkboxLabel}>
            <input 
              type="checkbox" 
              name="termsAgreed" 
              checked={formData.termsAgreed} 
              onChange={() => setFormData({ ...formData, termsAgreed: !formData.termsAgreed })} 
            />
            I agree with Terms and Conditions
          </label>
        </div>

        <button 
          type="submit" 
          className={styles.submitButton} 
          disabled={!formData.termsAgreed}
        >
          Submit Idea
        </button>
      </form>
    </div>
  );
};

export default StartupIdeaForm; 