import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load projects from localStorage on component mount
    const savedProjects = localStorage.getItem('projects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  const createProject = (projectData) => {
    const newProject = {
      id: Date.now(), // Use timestamp as unique ID
      ...projectData,
      status: 'Active',
      createdAt: new Date().toISOString(),
    };

    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    toast.success('Project created successfully!');
    navigate('/projects');
  };

  const updateProject = (projectId, updatedData) => {
    const updatedProjects = projects.map(project =>
      project.id === projectId ? { ...project, ...updatedData } : project
    );
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    toast.success('Project updated successfully!');
  };

  const deleteProject = (projectId) => {
    const updatedProjects = projects.filter(project => project.id !== projectId);
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    toast.success('Project deleted successfully!');
  };

  return null; // This component doesn't render anything directly
};

export default ProjectManager; 