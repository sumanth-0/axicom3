import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/InputDesign.module.css';

const ProjectsContent = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [userName] = useState('Sumanth');

  useEffect(() => {
    // Load projects from localStorage
    const loadProjects = () => {
      const savedProjects = JSON.parse(localStorage.getItem('projects') || '[]');
      // Sort projects by creation date, newest first
      const sortedProjects = savedProjects.sort((a, b) => 
        new Date(b.createdAt) - new Date(a.createdAt)
      );
      setProjects(sortedProjects);
    };

    loadProjects();
    // Add event listener for storage changes
    window.addEventListener('storage', loadProjects);
    return () => window.removeEventListener('storage', loadProjects);
  }, []);

  const handleCreateNewProject = () => {
    navigate('/create-project');
  };

  const handleViewDetails = () => {
    // Unconditionally navigate to project details page
    navigate('/project-details');
  };

  return (
    <section className={styles.contentSection}>
      <div className={styles.contentHeader}>
        <h1 className={styles.pageTitle}>My Projects</h1>
        <h2 className={styles.welcomeText}>Hello, {userName}</h2>
        <p className={styles.subText}>Here are your innovative ideas</p>
        <div>
          <button 
            className={styles.createButton} 
            onClick={handleCreateNewProject}
            aria-label="Create a new project"
          >
            Create New Project
          </button>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.projectTable}>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Category</th>
              <th>Current Stage</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>
                  <div className={styles.projectInfo}>
                    <span className={styles.projectName}>{project.name}</span>
                    <span className={styles.projectDescription}>{project.description}</span>
                  </div>
                </td>
                <td>
                  <span className={styles.category}>{project.category}</span>
                </td>
                <td>
                  <span className={styles.stage}>{project.stage}</span>
                </td>
                <td>
                  <span className={`${styles.status} ${styles[project.status.toLowerCase().replace(' ', '')]}`}>
                    {project.status}
                  </span>
                </td>
                <td>
                  <button 
                    className={styles.viewButton}
                    onClick={handleViewDetails}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
            {projects.length === 0 && (
              <tr>
                <td colSpan="5" className={styles.emptyState}>
                  To explore more, start creating new projects.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProjectsContent; 