import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from './CreateProject.module.css';

function CreateProject() {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData: existingFormData } = location.state || {};

  const [formData, setFormData] = useState({
    name: existingFormData?.ideaDescription || '',
    category: existingFormData?.category || '',
    description: existingFormData?.description || '',
    stage: existingFormData?.ideaStage || 'Ideation'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get existing projects from localStorage
    const existingProjects = JSON.parse(localStorage.getItem('projects') || '[]');
    
    // Create new project with unique ID
    const newProject = {
      id: Date.now().toString(),
      ...formData,
      status: 'In Progress',
      createdAt: new Date().toISOString()
    };

    // Add new project to the list
    const updatedProjects = [...existingProjects, newProject];
    
    // Save to localStorage
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    
    // Show success message
    toast.success('Project created successfully!');
    
    // Navigate to project dashboard
    navigate('/project-dashboard');
  };

  return (
    <div className={styles.createProjectContainer}>
      <h1 className={styles.title}>Create New Project</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Project Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
            placeholder="Enter project name"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className={styles.select}
          >
            <option value="">Select a category</option>
            <option value="IoT">IoT</option>
            <option value="AI/ML">AI/ML</option>
            <option value="Blockchain">Blockchain</option>
            <option value="Healthcare">Healthcare</option>
            <option value="FinTech">FinTech</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="stage">Project Stage</label>
          <select
            id="stage"
            name="stage"
            value={formData.stage}
            onChange={handleChange}
            required
            className={styles.select}
          >
            <option value="Ideation">Ideation</option>
            <option value="Development">Development</option>
            <option value="Testing">Testing</option>
            <option value="Launch">Launch</option>
            <option value="Growth">Growth</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className={styles.textarea}
            placeholder="Enter project description"
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Create Project
        </button>
      </form>
    </div>
  );
}

export default CreateProject; 